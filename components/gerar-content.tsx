"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle2,
  Play,
  RefreshCcw,
  XCircle,
  Clock,
  Users,
  DoorOpen,
} from "lucide-react"
import gerarHorarios, { LimparDados } from "@/lib/actions/horarios"

import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Turma {
  id: string
  nome: string
}

interface ConflictItem {
  id: string
  tipo: "professor" | "sala" | "turma"
  descricao: string
  severidade: "alta" | "media" | "baixa"
}

interface GenerationResult {
  status: "idle" | "generating" | "completed" | "error"
  progress: number
  turmasProcessadas: number
  totalTurmas: number
  conflitos: ConflictItem[]
  horariosGerados: number
}

export function GerarContent() {
  // 1. Hooks de dados no TOPO (Sempre executados na mesma ordem)
  const { data, error, isLoading } = useSWR<{ turmas: Turma[] }>('/api/turmas', fetcher);

  const [selectedTurmas, setSelectedTurmas] = useState<string[]>([]);
  const [result, setResult] = useState<GenerationResult>({
    status: "idle", progress: 0, turmasProcessadas: 0, totalTurmas: 0, conflitos: [], horariosGerados: 0,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 2. Sincronizar o estado inicial quando os dados da API chegarem
  useEffect(() => {
    if (data?.turmas && selectedTurmas.length === 0) {
      setSelectedTurmas(data.turmas.map((t) => t.id));
    }
  }, [data]);

  // Limpeza de intervalos ao desmontar o componente
  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  // 3. Handlers
  const toggleTurma = (id: string) => {
    setSelectedTurmas((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const selectAll = () => setSelectedTurmas(data?.turmas.map((t) => t.id) || []);
  const deselectAll = () => setSelectedTurmas([]);

  const simulateGeneration = async () => {
    setResult(prev => ({
      ...prev,
      status: "generating",
      progress: 0,
      totalTurmas: selectedTurmas.length,
    }));

    // Chamar a Server Action real (Opcional: tratar o retorno aqui)
    try {
      await gerarHorarios(selectedTurmas)
    } catch (e) {
      console.error("Erro na Action:", e);
    }

    intervalRef.current = setInterval(() => {
      setResult((prev) => {
        const newProgress = prev.progress + Math.random() * 15;

        if (newProgress >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return {
            ...prev,
            status: "completed",
            progress: 100,
            turmasProcessadas: prev.totalTurmas,
            conflitos: [
              { id: "1", tipo: "professor", descricao: "Conflito simulado detetado", severidade: "alta" }
            ],
          };
        }

        return {
          ...prev,
          progress: newProgress,
          turmasProcessadas: Math.floor((newProgress / 100) * prev.totalTurmas),
        };
      });
    }, 300);
  };

  // 4. Renderização Condicional de Erro
  if (error) return <div className="p-4 text-red-500">Erro ao carregar turmas.</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gerar Horários</h1>
        <p className="text-muted-foreground">Geração automática dos Horários</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Selecionar Turmas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoading ? (
                <div className="animate-pulse space-y-2">
                  <div className="h-10 bg-muted rounded w-1/3"></div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[1, 2, 3, 4].map(i => <div key={i} className="h-12 bg-muted rounded"></div>)}
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" onClick={selectAll}>Selecionar Todas</Button>
                    <Button variant="outline" size="sm" onClick={deselectAll}>Limpar</Button>
                    <Badge variant="secondary">{selectedTurmas.length} selecionadas</Badge>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {data?.turmas.map((turma) => (
                      <div key={turma.id} className="flex items-center space-x-3 rounded-lg border p-3">
                        <Checkbox
                          id={turma.id}
                          checked={selectedTurmas.includes(turma.id)}
                          onCheckedChange={() => toggleTurma(turma.id)}
                        />
                        <Label htmlFor={turma.id} className="cursor-pointer flex-1">{turma.nome}</Label>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {result.status !== "idle" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {result.status === "generating" ? <RefreshCcw className="animate-spin" /> : <CheckCircle2 className="text-green-500" />}
                  {result.status === "generating" ? "A processar..." : "Concluído"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={result.progress} />
                <p className="text-sm text-muted-foreground">
                  Processadas {result.turmasProcessadas} de {result.totalTurmas} turmas.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ações</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full"
                disabled={selectedTurmas.length === 0 || result.status === "generating"}
                onClick={simulateGeneration}
              >
                <Play className="mr-2 h-4 w-4" /> Gerar Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
