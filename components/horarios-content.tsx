"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Download, Printer, ChevronLeft, ChevronRight } from "lucide-react"

// ── DADOS FIXOS ───────────────────────────────────────────────
// Estes virão da DB no futuro — por agora são fixos para montar a estrutura

const diasSemana = ["2ª FEIRA", "3ª FEIRA", "4ª FEIRA", "5ª FEIRA", "6ª FEIRA"]

// Cada entrada é uma linha da tabela — pode ser aula ou intervalo
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

const turmas = ["10A", "10B", "11A", "11B", "12A", "12B"]
const professores = ["Maria Silva", "João Santos", "Ana Costa", "Pedro Oliveira"]

// ── TIPOS ─────────────────────────────────────────────────────

interface Aula {
  disciplina: string
  professor:  string
  sala:       string
  cor:        string
}

// horario[turma][periodo][dia][ordem] → Aula | null
// periodo: "manha" | "tarde"
type HorarioData = {
  [turma: string]: {
    [periodo: string]: {
      [dia: string]: {
        [ordem: number]: Aula | null
      }
    }
  }
}

// ── COMPONENTE ────────────────────────────────────────────────

export function HorariosContent() {
  const [selectedTurma,    setSelectedTurma]    = useState(turmas[0])
  const [selectedProfessor, setSelectedProfessor] = useState("")
  const [viewType,          setViewType]          = useState("turma")

  const turmaIndex = turmas.indexOf(selectedTurma)

  const navigateTurma = (direction: number) => {
    const newIndex = turmaIndex + direction
    if (newIndex >= 0 && newIndex < turmas.length) {
      setSelectedTurma(turmas[newIndex])
    }
  }

  // Futuramente este horario virá da API
  // Por agora é null em todo o lado — células vazias
  const horario: HorarioData = {}

  const getAula = (
    turma: string,
    periodo: string,
    dia: string,
    ordem: number
  ): Aula | null => {
    return horario[turma]?.[periodo]?.[dia]?.[ordem] ?? null
  }

  // ── CÉLULA DE AULA ──────────────────────────────────────────

  const CelulaAula = ({ aula }: { aula: Aula | null }) => {
    if (aula) {
      return (
        <div
          className="flex h-full min-h-16 flex-col justify-center rounded-sm p-1 text-white text-xs"
          style={{ backgroundColor: aula.cor }}
        >
          <div className="font-semibold">Disc. {aula.disciplina}</div>
          <div>Prof. {aula.professor}</div>
          <div className="opacity-80">Sala {aula.sala}</div>
        </div>
      )
    }
    // célula vazia — mostra a estrutura mas sem dados
    return (
      <div className="flex h-full min-h-16 flex-col justify-center p-1 text-xs text-muted-foreground">
        <div>Disc.</div>
        <div>Prof.</div>
        <div>Sala</div>
      </div>
    )
  }

  // ── TABELA (manhã ou tarde) ──────────────────────────────────

  const TabelaPeriodo = ({
    linhas,
    periodo,
    turma,
  }: {
    linhas: LinhaTabela[]
    periodo: string  // "manha" | "tarde"
    turma: string
  }) => (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr>
          <th className="border border-border bg-muted p-2 text-left text-xs font-medium w-16">
            TEMPO
          </th>
          <th className="border border-border bg-muted p-2 text-left text-xs font-medium w-16">
            HORA
          </th>
          {diasSemana.map((dia) => (
            <th
              key={dia}
              className="border border-border bg-muted p-2 text-center text-xs font-medium"
            >
              {dia}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {linhas.map((linha, i) => {

          // ── LINHA DE INTERVALO ───────────────────────────────
          if (linha.tipo === "intervalo") {
            return (
              <tr key={`interv-${i}`} className="bg-muted/30">
                <td className="border border-border p-1 text-xs font-medium text-center">
                  INTERV.
                </td>
                <td className="border border-border p-1 text-xs text-center">
                  <div>{linha.horaInicio}</div>
                  <div>{linha.horaFim}</div>
                </td>
                {/* células do intervalo — vazias e cinzentas */}

                <td
                  className="border border-border bg-muted/20 p-1"
                  colSpan={diasSemana.length}
                />
              </tr>
            )
          }

          // ── LINHA DE AULA ────────────────────────────────────
          return (
            <tr key={`aula-${linha.ordem}`}>
              <td className="border border-border bg-muted/50 p-2 text-xs font-medium">
                {linha.tempo}
              </td>
              <td className="border border-border bg-muted/50 p-1 text-xs text-center">
                <div className="font-medium">{linha.horaInicio}</div>
                <div className="text-muted-foreground">{linha.horaFim}</div>
              </td>
              {diasSemana.map((dia) => {
                const aula = getAula(turma, periodo, dia, linha.ordem)
                return (
                  <td key={dia} className="border border-border p-1">
                    <CelulaAula aula={aula} />
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  // ── TABELA DO PROFESSOR ──────────────────────────────────────

  const TabelaProfessor = ({ professor }: { professor: string }) => (
    <>
      {[
        { linhas: linhasManha, periodo: "manha", titulo: "Manhã" },
        { linhas: linhasTarde, periodo: "tarde", titulo: "Tarde" },
      ].map(({ linhas, periodo, titulo }) => (
        <div key={periodo} className="space-y-1">
          <h3 className="text-sm font-semibold text-muted-foreground">{titulo}</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-border bg-muted p-2 text-left text-xs font-medium w-16">TEMPO</th>
                  <th className="border border-border bg-muted p-2 text-left text-xs font-medium w-16">HORA</th>
                  {diasSemana.map((dia) => (
                    <th key={dia} className="border border-border bg-muted p-2 text-center text-xs font-medium">
                      {dia}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {linhas.map((linha, i) => {
                  if (linha.tipo === "intervalo") {
                    return (
                      <tr key={`interv-${i}`} className="bg-muted/30">
                        <td className="border border-border p-1 text-xs font-medium text-center">INTERV.</td>
                        <td className="border border-border p-1 text-xs text-center">
                          <div>{linha.horaInicio}</div>
                          <div>{linha.horaFim}</div>
                        </td>
                        {diasSemana.map((dia) => (
                          <td key={dia} className="border border-border bg-muted/20 p-1" />
                        ))}
                      </tr>
                    )
                  }

                  return (
                    <tr key={`aula-${linha.ordem}`}>
                      <td className="border border-border bg-muted/50 p-2 text-xs font-medium">{linha.tempo}</td>
                      <td className="border border-border bg-muted/50 p-1 text-xs text-center">
                        <div className="font-medium">{linha.horaInicio}</div>
                        <div className="text-muted-foreground">{linha.horaFim}</div>
                      </td>
                      {diasSemana.map((dia) => {
                        // procura em todas as turmas se este professor tem aula neste slot
                        let aulaProf: { turma: string; aula: Aula } | null = null
                        for (const t of turmas) {
                          const aula = getAula(t, periodo, dia, linha.ordem)
                          if (aula?.professor === professor) {
                            aulaProf = { turma: t, aula }
                            break
                          }
                        }
                        return (
                          <td key={dia} className="border border-border p-1">
                            {aulaProf ? (
                              <div
                                className="flex h-full min-h-16 flex-col justify-center rounded-sm p-1 text-white text-xs"
                                style={{ backgroundColor: aulaProf.aula.cor }}
                              >
                                <div className="font-semibold">Disc. {aulaProf.aula.disciplina}</div>
                                <div>Turma {aulaProf.turma}</div>
                                <div className="opacity-80">Sala {aulaProf.aula.sala}</div>
                              </div>
                            ) : (
                              <div className="flex h-full min-h-16 flex-col justify-center p-1 text-xs text-muted-foreground">
                                <div>Disc.</div>
                                <div>Turma</div>
                                <div>Sala</div>
                              </div>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  )

  // ── RENDER PRINCIPAL ─────────────────────────────────────────

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Horários</h1>
          <p className="text-muted-foreground">Visualizar e gerir horários de turmas e professores</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" /> Exportar
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Printer className="h-4 w-4" /> Imprimir
          </Button>
        </div>
      </div>

      <Tabs value={viewType} onValueChange={setViewType}>
        <TabsList>
          <TabsTrigger value="turma">Por Turma</TabsTrigger>
          <TabsTrigger value="professor">Por Professor</TabsTrigger>
        </TabsList>

        {/* ── TAB TURMA ───────────────────────────────────────── */}
        <TabsContent value="turma" className="space-y-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline" size="icon"
              onClick={() => navigateTurma(-1)}
              disabled={turmaIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Select value={selectedTurma} onValueChange={setSelectedTurma}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Selecionar turma" />
              </SelectTrigger>
              <SelectContent>
                {turmas.map((t) => (
                  <SelectItem key={t} value={t}>Turma {t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="outline" size="icon"
              onClick={() => navigateTurma(1)}
              disabled={turmaIndex === turmas.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle>Horário da Turma {selectedTurma}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              {/* MANHÃ */}
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-muted-foreground">Manhã</h3>
                <div className="overflow-x-auto">
                  <TabelaPeriodo
                    linhas={linhasManha}
                    periodo="manha"
                    turma={selectedTurma}
                  />
                </div>
              </div>

              {/* TARDE */}
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-muted-foreground">Tarde</h3>
                <div className="overflow-x-auto">
                  <TabelaPeriodo
                    linhas={linhasTarde}
                    periodo="tarde"
                    turma={selectedTurma}
                  />
                </div>
              </div>

            </CardContent>
          </Card>
        </TabsContent>

        {/* ── TAB PROFESSOR ────────────────────────────────────── */}
        <TabsContent value="professor" className="space-y-4">
          <Select value={selectedProfessor} onValueChange={setSelectedProfessor}>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Selecionar professor" />
            </SelectTrigger>
            <SelectContent>
              {professores.map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedProfessor ? (
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>Horário de {selectedProfessor}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <TabelaProfessor professor={selectedProfessor} />
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex h-64 items-center justify-center">
                <p className="text-muted-foreground">Selecione um professor para visualizar o horário</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}