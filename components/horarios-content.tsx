"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Download, Printer, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { listarAulasPorTurma, listarAulasPorProfessor } from "@/lib/actions/tempoLectivo"
import { listarTodasTurmas } from "@/app/turmas/turma-action"
import { listarTodos as listarTodosProfessores } from "@/app/professores/professores-action"

// ── DADOS FIXOS ───────────────────────────────────────────────
const diasSemana = ["2ª FEIRA", "3ª FEIRA", "4ª FEIRA", "5ª FEIRA", "6ª FEIRA"]

type LinhaTabela =
  | { tipo: "aula";      tempo: string; horaInicio: string; horaFim: string; ordem: number }
  | { tipo: "intervalo"; horaInicio: string; horaFim: string }

const linhasManha: LinhaTabela[] = [
  { tipo: "aula",      tempo: "1º manhã",  horaInicio: "7H30",  horaFim: "8H15",  ordem: 1 },
  { tipo: "aula",      tempo: "2º manhã",  horaInicio: "8H15",  horaFim: "9H00",  ordem: 2 },
  { tipo: "intervalo", horaInicio: "9H00",  horaFim: "9H15" },
  { tipo: "aula",      tempo: "3º manhã",  horaInicio: "9H15",  horaFim: "10H00", ordem: 3 },
  { tipo: "aula",      tempo: "4º manhã",  horaInicio: "10H00", horaFim: "10H45", ordem: 4 },
  { tipo: "intervalo", horaInicio: "10H45", horaFim: "11H00" },
  { tipo: "aula",      tempo: "5º manhã",  horaInicio: "11H00", horaFim: "11H45", ordem: 5 },
  { tipo: "aula",      tempo: "6º manhã",  horaInicio: "11H45", horaFim: "12H30", ordem: 6 },
]

const linhasTarde: LinhaTabela[] = [
  { tipo: "aula",      tempo: "1º tarde",  horaInicio: "13H00", horaFim: "13H45", ordem: 1 },
  { tipo: "aula",      tempo: "2º tarde",  horaInicio: "13H45", horaFim: "14H30", ordem: 2 },
  { tipo: "intervalo", horaInicio: "14H30", horaFim: "14H45" },
  { tipo: "aula",      tempo: "3º tarde",  horaInicio: "14H45", horaFim: "15H30", ordem: 3 },
  { tipo: "aula",      tempo: "4º tarde",  horaInicio: "15H30", horaFim: "16H15", ordem: 4 },
  { tipo: "intervalo", horaInicio: "16H15", horaFim: "16H30" },
  { tipo: "aula",      tempo: "5º tarde",  horaInicio: "16H30", horaFim: "17H15", ordem: 5 },
  { tipo: "aula",      tempo: "6º tarde",  horaInicio: "17H15", horaFim: "18H00", ordem: 6 },
]

interface Aula { 
  disciplina: string
  professor:  string
  sala:       string
  turma?:     string
}

type HorarioData = {
  [turma: string]: {
    [periodo: string]: {
      [dia: string]: {
        [ordem: number]: Aula | null
      }
    }
  }
}

export function HorariosContent() {
  const [turmas, setTurmas] = useState<string[]>([])
  const [professores, setProfessores] = useState<string[]>([])
  const [selectedTurma, setSelectedTurma] = useState<string>("")
  const [selectedProfessor, setSelectedProfessor] = useState("")
  const [viewType, setViewType] = useState("turma")
  const [horario, setHorario] = useState<HorarioData>({})
  const [isLoading, setIsLoading] = useState(false)

  // Carregar lista inicial
  useEffect(() => {
    async function carregarDados() {
      const [dadosTurma, dadosProf] = await Promise.all([
        listarTodasTurmas(),
        listarTodosProfessores()
      ])

      const descricoesTurmas = Array.from(new Set(dadosTurma.map(t => t.descricao_turma)))
      setTurmas(descricoesTurmas)
      if (descricoesTurmas.length > 0) setSelectedTurma(descricoesTurmas[0])

      const descricoesProfs = Array.from(new Set(dadosProf.map(p => p.nome_professor)))
      setProfessores(descricoesProfs)
      if (descricoesProfs.length > 0) setSelectedProfessor(descricoesProfs[0])
    }   
    carregarDados()
  }, [])

  // Buscar dados do horário quando a selecção muda
  useEffect(() => {
    const isProf = viewType === "professor"
    const target = isProf ? selectedProfessor : selectedTurma

    if (!target) return

    async function buscar() {
      setIsLoading(true)           
      try {
        const dados = isProf 
          ? await listarAulasPorProfessor(target)
          : await listarAulasPorTurma(target)

        const novoHorario: HorarioData = {}

        const mapaDias: Record<string, string> = {
          "SEGUNDA": "2ª FEIRA", "TERCA": "3ª FEIRA", "QUARTA": "4ª FEIRA", 
          "QUINTA": "5ª FEIRA", "SEXTA": "6ª FEIRA",
          "Segunda": "2ª FEIRA", "Terça": "3ª FEIRA", "Quarta": "4ª FEIRA", 
          "Quinta": "5ª FEIRA", "Sexta": "6ª FEIRA"
        }
        const mapaPeriodos: Record<string, string> = { 
          "MANHA": "manha", "TARDE": "tarde",
          "Manhã": "manha", "Tarde": "tarde"
        }

        dados.forEach((aula: any) => {
          const dia = mapaDias[aula.dia?.descricao_dia || ""]
          const periodo = mapaPeriodos[aula.periodo?.descricao_periodo || ""]
          const key = isProf ? aula.professor?.nome_professor : aula.turma?.descricao_turma
          const ordem = aula.ordem

          if (!dia || !periodo || !key) return

          if (!novoHorario[key]) novoHorario[key] = {}
          if (!novoHorario[key][periodo]) novoHorario[key][periodo] = {}
          if (!novoHorario[key][periodo][dia]) novoHorario[key][periodo][dia] = {}

          novoHorario[key][periodo][dia][ordem] = {
            disciplina: aula.disciplina?.descricao_disciplina || "Sem Disciplina",
            professor:  aula.professor?.nome_professor || "Sem Prof",
            sala:       aula.sala?.descricao_sala || "Sem Sala",
            turma:      aula.turma?.descricao_turma || "Sem Turma"
          }
        })
        setHorario(novoHorario)
      } catch (err) {
        console.error("Erro ao carregar horário:", err)
      } finally {
        setIsLoading(false)          
      }
    }
    buscar()
  }, [selectedTurma, selectedProfessor, viewType])

  const turmaIndex = turmas.indexOf(selectedTurma)

  const navigateTurma = (direction: number) => {
    const newIndex = turmaIndex + direction
    if (newIndex >= 0 && newIndex < turmas.length) {
      setSelectedTurma(turmas[newIndex])
    }
  }

  const professorIndex = professores.indexOf(selectedProfessor)

  const navigateProfessor = (direction: number) => {
    const newIndex = professorIndex + direction
    if (newIndex >= 0 && newIndex < professores.length) {
      setSelectedProfessor(professores[newIndex])
    }
  }

  const getAula = (key: string, periodo: string, dia: string, ordem: number): Aula | null => {
    return horario[key]?.[periodo]?.[dia]?.[ordem] ?? null
  }

  // ── CÉLULA DE AULA ──────────────────────────────────────────
  const CelulaAula = ({ aula, isProf }: { aula: Aula | null, isProf?: boolean }) => {
    if (aula) {
      return (
        <div className="flex h-full min-h-[70px] flex-col justify-center rounded-lg border border-primary/25 bg-linear-to-br from-primary/15 via-aura-teal-soft/80 to-primary/10 p-2 text-[10px] leading-tight text-foreground shadow-sm">
          <div className="mb-1 border-b border-primary/20 pb-1 text-[9px] font-bold uppercase tracking-wide text-aura-navy">
            {aula.disciplina}
          </div>
          <div className="truncate text-foreground/90">{isProf ? `Turma ${aula.turma}` : `Prof. ${aula.professor}`}</div>
          <div className="mt-1 font-medium text-primary">Sala {aula.sala}</div>
        </div>
      )
    }
    return (
      <div className="flex h-full min-h-[70px] flex-col justify-center rounded-lg border border-dashed border-border/80 bg-muted/25 p-2 text-[10px] italic text-muted-foreground/50">
        <div className="mb-1">Disciplina</div>
        <div>{isProf ? "Turma" : "Professor"}</div>
        <div className="mt-1">Sala</div>
      </div>
    )
  }

  // ── TABELA (manhã ou tarde) ──────────────────────────────────
  const TabelaPeriodo = ({ linhas, periodo, targetKey, isProf }: { linhas: LinhaTabela[], periodo: string, targetKey: string, isProf?: boolean }) => (
    <table className="w-full table-fixed border-collapse text-sm">
      <thead>
        <tr className="bg-aura-navy text-primary-foreground shadow-sm">
          <th className="border border-aura-navy/80 p-2 text-left text-[10px] font-bold tracking-wide w-14 text-white/95">
            TEMPO
          </th>
          <th className="border border-aura-navy/80 p-2 text-center text-[10px] font-bold tracking-wide w-16 text-white/95">
            HORA
          </th>
          {diasSemana.map((dia) => (
            <th
              key={dia}
              className="border border-aura-navy/80 p-2 text-center text-[10px] font-bold tracking-wide text-white/95"
            >
              {dia}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={isLoading ? "opacity-45 transition-opacity" : ""}>
        {linhas.map((linha, i) => {
          if (linha.tipo === "intervalo") {
            return (
              <tr key={`interv-${i}`} className="bg-primary/[0.07]">
                <td className="border border-border/70 p-1 text-center text-[9px] font-bold text-primary">
                  INTERVALO
                </td>
                <td className="border border-border/70 p-1 text-center text-[9px] text-muted-foreground">
                  {linha.horaInicio} - {linha.horaFim}
                </td>
                <td className="border border-border/70 bg-muted/30" colSpan={diasSemana.length} />
              </tr>
            )
          }

          return (
            <tr key={`aula-${linha.ordem}`} className="bg-card">
              <td className="border border-border/70 bg-muted/35 p-2 text-center text-[10px] font-medium text-foreground">
                {linha.tempo}
              </td>
              <td className="border border-border/70 bg-card p-1 text-center text-[10px]">
                <div className="font-semibold text-foreground">{linha.horaInicio}</div>
                <div className="text-[9px] text-muted-foreground">{linha.horaFim}</div>
              </td>
              {diasSemana.map((dia) => (
                <td key={dia} className="h-full border border-border/70 bg-aura-teal-soft/15 p-1">
                  <CelulaAula aula={getAula(targetKey, periodo, dia, linha.ordem)} isProf={isProf} />
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-aura-navy">Horários</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Visualização do calendário escolar por turma ou docente
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 rounded-xl border-border/80 bg-card shadow-sm">
            <Download className="h-4 w-4" /> Exportar PDF
          </Button>
          <Button variant="outline" size="sm" className="gap-2 rounded-xl border-border/80 bg-card shadow-sm">
            <Printer className="h-4 w-4" /> Imprimir
          </Button>
        </div>
      </div>

      <Tabs value={viewType} onValueChange={setViewType} className="w-full">
        <TabsList className="grid h-11 w-full max-w-[400px] grid-cols-2 rounded-xl bg-muted/60 p-1">
          <TabsTrigger value="turma" className="rounded-lg data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm">
            Por Turma
          </TabsTrigger>
          <TabsTrigger value="professor" className="rounded-lg data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm">
            Por Professor
          </TabsTrigger>
        </TabsList>

        <TabsContent value="turma" className="mt-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-xl border border-border/80 bg-card p-1 shadow-sm">
              <Button
                variant="ghost" size="icon" className="h-8 w-8 rounded-lg"
                onClick={() => navigateTurma(-1)}
                disabled={turmaIndex <= 0 || isLoading}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Select value={selectedTurma} onValueChange={setSelectedTurma} disabled={isLoading}>
                <SelectTrigger className="w-44 border-none shadow-none focus:ring-0">
                  <SelectValue placeholder="Escolha a turma" />
                </SelectTrigger>
                <SelectContent>
                  {turmas.map((t) => (
                    <SelectItem key={t} value={t}>Turma {t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="ghost" size="icon" className="h-8 w-8 rounded-lg"
                onClick={() => navigateTurma(1)}
                disabled={turmaIndex >= turmas.length - 1 || isLoading}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            {isLoading && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
          </div>

          <Card className="overflow-hidden rounded-2xl border-border/80 shadow-md shadow-slate-900/4 ring-1 ring-border/40">
            <CardHeader className="border-b border-border/60 bg-linear-to-r from-primary/8 via-card to-aura-teal-soft/40 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-semibold text-aura-navy">
                  Calendário Semanal: {selectedTurma}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <div className="space-y-3">
                <h3 className="inline-block rounded-full bg-primary/12 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Período da Manhã
                </h3>
                <div className="overflow-x-auto rounded-xl border border-border/70 bg-card shadow-inner shadow-slate-900/2">
                  <TabelaPeriodo linhas={linhasManha} periodo="manha" targetKey={selectedTurma} isProf={false} />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="inline-block rounded-full bg-aura-teal-mid/35 px-3 py-1 text-xs font-bold uppercase tracking-wider text-aura-navy">
                  Período da Tarde
                </h3>
                <div className="overflow-x-auto rounded-xl border border-border/70 bg-card shadow-inner shadow-slate-900/2">
                  <TabelaPeriodo linhas={linhasTarde} periodo="tarde" targetKey={selectedTurma} isProf={false} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="professor" className="mt-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-xl border border-border/80 bg-card p-1 shadow-sm">
              <Button
                variant="ghost" size="icon" className="h-8 w-8 rounded-lg"
                onClick={() => navigateProfessor(-1)}
                disabled={professorIndex <= 0 || isLoading}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Select value={selectedProfessor} onValueChange={setSelectedProfessor} disabled={isLoading}>
                <SelectTrigger className="w-44 border-none shadow-none focus:ring-0">
                  <SelectValue placeholder="Escolha o docente" />
                </SelectTrigger>
                <SelectContent>
                  {professores.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="ghost" size="icon" className="h-8 w-8 rounded-lg"
                onClick={() => navigateProfessor(1)}
                disabled={professorIndex >= professores.length - 1 || isLoading}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            {isLoading && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
          </div>

          <Card className="overflow-hidden rounded-2xl border-border/80 shadow-md shadow-slate-900/4 ring-1 ring-border/40">
            <CardHeader className="border-b border-border/60 bg-linear-to-r from-primary/8 via-card to-aura-teal-soft/40 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-semibold text-aura-navy">
                  Calendário Semanal: {selectedProfessor}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <div className="space-y-3">
                <h3 className="inline-block rounded-full bg-primary/12 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Período da Manhã
                </h3>
                <div className="overflow-x-auto rounded-xl border border-border/70 bg-card shadow-inner shadow-slate-900/2">
                  <TabelaPeriodo linhas={linhasManha} periodo="manha" targetKey={selectedProfessor} isProf={true} />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="inline-block rounded-full bg-aura-teal-mid/35 px-3 py-1 text-xs font-bold uppercase tracking-wider text-aura-navy">
                  Período da Tarde
                </h3>
                <div className="overflow-x-auto rounded-xl border border-border/70 bg-card shadow-inner shadow-slate-900/2">
                  <TabelaPeriodo linhas={linhasTarde} periodo="tarde" targetKey={selectedProfessor} isProf={true} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}