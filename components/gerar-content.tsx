"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Play,
  RefreshCcw,
  XCircle,
  Clock,
  Users,
  DoorOpen,
  AlertTriangle,
  Dna,
} from "lucide-react"
import { gerarHorarios } from "@/lib/actions/gerarHorario"

type ConflictType = "professor" | "sala" | "turma"
type ConflictSeverity = "alta" | "media" | "baixa"

interface ConflictItem {
  id: string
  tipo: ConflictType
  rigidez: ConflictSeverity
  descricao: string
}

// ─── Types ───────────────────────────────────────────────

interface TurmaOption {
  id: number
  nome: string
  temAtribuicoes: boolean
}

interface UIResult {
  status: "idle" | "generating" | "completed" | "error"
  progress: number
  turmasProcessadas: number
  totalTurmas: number
  conflitos: ConflictItem[]
  horariosGerados: number
  fitness: number
  generationsRun: number
  message?: string
}

interface Props {
  turmas: TurmaOption[]
}

// ─── Component ───────────────────────────────────────────

export function GerarContent({ turmas }: Props) {
  const router = useRouter()
  const turmasDisponiveis = turmas.filter((t) => t.temAtribuicoes)
  const turmasSemAtribuicao = turmas.filter((t) => !t.temAtribuicoes)

  const [selectedTurmas, setSelectedTurmas] = useState<number[]>(
    turmasDisponiveis.map((t) => t.id)
  )
  const [result, setResult] = useState<UIResult>({
    status: "idle",
    progress: 0,
    turmasProcessadas: 0,
    totalTurmas: 0,
    conflitos: [],
    horariosGerados: 0,
    fitness: 0,
    generationsRun: 0,
  })

  // ── Options state ──
  const [optRespectAvail, setOptRespectAvail] = useState(true)
  const [optAvoidGaps, setOptAvoidGaps] = useState(true)
  const [optBalance, setOptBalance] = useState(false)
  const [periodo, setPeriodo] = useState("Tarde")

  const toggleTurma = (id: number) => {
    setSelectedTurmas((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    )
  }

  const selectAll = () => {
    setSelectedTurmas(turmasDisponiveis.map((t) => t.id))
  }

  const deselectAll = () => {
    setSelectedTurmas([])
  }

  const runGeneration = async () => {
    setResult({
      status: "generating",
      progress: 10,
      turmasProcessadas: 0,
      totalTurmas: selectedTurmas.length,
      conflitos: [],
      horariosGerados: 0,
      fitness: 0,
      generationsRun: 0,
    })

    // Simulate progress while we wait for the server action
    const progressInterval = setInterval(() => {
      setResult((prev) => {
        if (prev.status !== "generating") return prev
        const newProgress = Math.min(prev.progress + Math.random() * 8, 90)
        return { ...prev, progress: newProgress }
      })
    }, 300)

    try {
      const response = await gerarHorarios(selectedTurmas, periodo, {
        respeitarDisponibilidade: optRespectAvail,
        evitarFuros: optAvoidGaps,
        balancearCarga: optBalance,
      })

      clearInterval(progressInterval)

      if (response.status === "error") {
        setResult({
          status: "error",
          progress: 100,
          turmasProcessadas: 0,
          totalTurmas: selectedTurmas.length,
          conflitos: response.conflitos ?? [],
          horariosGerados: 0,
          fitness: response.fitness ?? 0,
          generationsRun: response.generationsRun ?? 0,
          message: response.message,
        })
      } else {
        setResult({
          status: "completed",
          progress: 100,
          turmasProcessadas: selectedTurmas.length,
          totalTurmas: selectedTurmas.length,
          conflitos: response.conflitos,
          horariosGerados: response.horariosGerados,
          fitness: response.fitness,
          generationsRun: response.generationsRun,
        })
      }
    } catch (err) {
      clearInterval(progressInterval)
      setResult({
        status: "error",
        progress: 100,
        turmasProcessadas: 0,
        totalTurmas: selectedTurmas.length,
        conflitos: [],
        horariosGerados: 0,
        fitness: 0,
        generationsRun: 0,
        message: err instanceof Error ? err.message : "Erro inesperado",
      })
    }
  }

  const resetGeneration = () => {
    setResult({
      status: "idle",
      progress: 0,
      turmasProcessadas: 0,
      totalTurmas: 0,
      conflitos: [],
      horariosGerados: 0,
      fitness: 0,
      generationsRun: 0,
    })
  }

  const rigidezColors = {
    alta: "bg-destructive text-destructive-foreground",
    media: "bg-accent text-accent-foreground",
    baixa: "bg-muted text-muted-foreground",
  }

  const tipoIcons = {
    professor: Users,
    sala: DoorOpen,
    turma: Clock,
  } satisfies Record<ConflictType, typeof Users>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Dna className="h-8 w-8 text-primary" />
            Gerar Horários
          </h1>
          <p className="text-muted-foreground">
            Geração automática de horários com algoritmo genético e detecção de conflitos
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* ── Seleccionar Turmas ── */}
          <Card>
            <CardHeader>
              <CardTitle>Selecionar Turmas</CardTitle>
              <CardDescription>
                Escolha as turmas para as quais deseja gerar horários
                {turmasSemAtribuicao.length > 0 && (
                  <span className="block text-xs mt-1 text-muted-foreground">
                    {turmasSemAtribuicao.length} turma(s) sem atribuições professor-disciplina (desactivadas)
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" onClick={selectAll}>
                  Selecionar Todas
                </Button>
                <Button variant="outline" size="sm" onClick={deselectAll}>
                  Desmarcar Todas
                </Button>
                <Badge variant="outline">
                  {selectedTurmas.length} de {turmasDisponiveis.length} selecionadas
                </Badge>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {turmasDisponiveis.map((turma) => (
                  <div
                    key={turma.id}
                    className="flex items-center space-x-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
                  >
                    <Checkbox
                      id={`turma-${turma.id}`}
                      checked={selectedTurmas.includes(turma.id)}
                      onCheckedChange={() => toggleTurma(turma.id)}
                    />
                    <Label htmlFor={`turma-${turma.id}`} className="cursor-pointer flex-1">
                      {turma.nome}
                    </Label>
                  </div>
                ))}
                {turmasDisponiveis.length === 0 && (
                  <div className="col-span-2 text-center py-8 text-muted-foreground">
                    <AlertCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>Nenhuma turma com atribuições encontrada.</p>
                    <p className="text-xs">Configure professores e disciplinas primeiro.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* ── Resultado ── */}
          {result.status !== "idle" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {result.status === "generating" && (
                    <>
                      <RefreshCcw className="h-5 w-5 animate-spin text-primary" />
                      A Gerar Horários (AG)...
                    </>
                  )}
                  {result.status === "completed" && (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Geração Concluída
                    </>
                  )}
                  {result.status === "error" && (
                    <>
                      <XCircle className="h-5 w-5 text-destructive" />
                      Erro na Geração
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progresso</span>
                    <span>{Math.round(result.progress)}%</span>
                  </div>
                  <Progress value={result.progress} />
                  {result.status === "generating" && (
                    <p className="text-sm text-muted-foreground">
                      Evoluindo população... aguarde
                    </p>
                  )}
                  {result.status === "completed" && (
                    <p className="text-sm text-muted-foreground">
                      {result.turmasProcessadas} de {result.totalTurmas} turmas processadas
                    </p>
                  )}
                  {result.status === "error" && result.message && (
                    <div className="rounded-lg border border-destructive/50 bg-destructive/5 p-4 space-y-2">
                      {result.message.split('\n').map((line, i) => (
                        <p key={i} className={`text-sm ${line.startsWith('•') ? 'pl-2 text-muted-foreground' : 'text-destructive font-medium'}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mostrar conflitos tanto em erro como em completed */}
                {(result.status === "error" || result.status === "completed") && result.conflitos.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <h4 className="font-medium text-destructive">
                        {result.conflitos.length} Conflito{result.conflitos.length > 1 ? 's' : ''} Detectado{result.conflitos.length > 1 ? 's' : ''} — Horário NÃO foi guardado
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {result.conflitos.map((conflito) => {
                        const Icon = tipoIcons[conflito.tipo]
                        return (
                          <div
                            key={conflito.id}
                            className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-3"
                          >
                            <Icon className="h-5 w-5 text-destructive mt-0.5" />
                            <div className="flex-1">
                              <p className="text-sm">{conflito.descricao}</p>
                            </div>
                            <Badge className={rigidezColors[conflito.rigidez]}>
                              {conflito.rigidez.charAt(0).toUpperCase() + conflito.rigidez.slice(1)}
                            </Badge>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {result.status === "completed" && result.conflitos.length === 0 && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm font-medium">Sem conflitos — horário guardado com sucesso!</span>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* ── Sidebar ── */}
        <div className="space-y-6">
          {/* Opções */}
          <Card>
            <CardHeader>
              <CardTitle>Opções de Geração</CardTitle>
              <CardDescription>Parâmetros do algoritmo genético</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="respeitar-disp"
                  checked={optRespectAvail}
                  onCheckedChange={(v) => setOptRespectAvail(!!v)}
                />
                <Label htmlFor="respeitar-disp">Respeitar disponibilidade dos professores</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="evitar-furos"
                  checked={optAvoidGaps}
                  onCheckedChange={(v) => setOptAvoidGaps(!!v)}
                />
                <Label htmlFor="evitar-furos">Evitar furos no horário</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="balancear"
                  checked={optBalance}
                  onCheckedChange={(v) => setOptBalance(!!v)}
                />
                <Label htmlFor="balancear">Balancear carga semanal</Label>
              </div>

              <div className="pt-2 border-t">
                <Label className="text-xs text-muted-foreground block mb-2">Período</Label>
                <div className="flex gap-2">
                  {["Manhã", "Tarde"].map((p) => (
                    <Button
                      key={p}
                      variant={periodo === p ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPeriodo(p)}
                    >
                      {p}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acções */}
          <Card>
            <CardHeader>
              <CardTitle>Acções</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {result.status === "idle" && (
                <Button
                  className="w-full gap-2"
                  onClick={runGeneration}
                  disabled={selectedTurmas.length === 0}
                >
                  <Sparkles className="h-4 w-4" />
                  Gerar Horários
                </Button>
              )}
              {result.status === "generating" && (
                <Button className="w-full gap-2" disabled>
                  <RefreshCcw className="h-4 w-4 animate-spin" />
                  A Processar (AG)...
                </Button>
              )}
              {(result.status === "completed" || result.status === "error") && (
                <>
                  {result.status === "completed" && (
                    <Button className="w-full gap-2" variant="default" onClick={() => router.push("/horarios")}>
                      <CheckCircle2 className="h-4 w-4" />
                      Aceitar e Ver Horários
                    </Button>
                  )}
                  <Button className="w-full gap-2 bg-transparent" variant="outline" onClick={runGeneration}>
                    <RefreshCcw className="h-4 w-4" />
                    Regenerar
                  </Button>
                  <Button className="w-full gap-2 bg-transparent" variant="outline" onClick={resetGeneration}>
                    Cancelar
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Resumo (pós-geração) */}
          {result.status === "completed" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dna className="h-4 w-4" />
                  Resumo AG
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Tempos gerados</span>
                  <span className="font-medium">{result.horariosGerados}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Gerações executadas</span>
                  <span className="font-medium">{result.generationsRun}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Fitness final</span>
                  <span className="font-medium">{Math.round(result.fitness)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Conflitos</span>
                  <Badge variant={result.conflitos.length > 0 ? "destructive" : "outline"}>
                    {result.conflitos.length}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge className={result.conflitos.length === 0 ? "bg-green-600 text-white" : "bg-amber-500 text-white"}>
                    {result.conflitos.length === 0 ? "Óptimo" : "Com conflitos"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
