"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Download, Printer, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
import { Upload } from "lucide-react"
import * as XLSX from "xlsx"
import { useRouter } from "next/navigation"

// ─── Types ───────────────────────────────────────────────

interface TempoLectivo {
  id_TempoLectivo: number
  diaSemana: string
  ordem: number
  professor: { nome: string }
  periodo: { periodo: string }
  disciplina: { nome: string }
  sala: { nome: string }
  turma: { nome: string }
}

interface Props {
  tempos: TempoLectivo[]
}

interface HorariosActionResult {
  success: boolean
  message?: string
}

interface ImportTempoLectivoRow {
  diaSemana: string
  periodoId: string
  ordem: number
  professor: string
  disciplina: string
  sala: string
  turma: string
}

async function carregarHorariosActions() {
  const dynamicImport = new Function("path", "return import(path)") as (path: string) => Promise<unknown>
  const mod = (await dynamicImport("@/lib/actions/horarios")) as {
    importarTemposLectivos?: (rows: ImportTempoLectivoRow[]) => Promise<HorariosActionResult>
    apagarTemposLectivos?: () => Promise<HorariosActionResult>
  }

  return mod
}

// ─── Constants ───────────────────────────────────────────

const DIAS_SEMANA_FULL = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"]
const DIAS_SEMANA_SHORT = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

const TEMPOS_SLOTS = [
  { id: 1, inicio: "07:30", fim: "08:20" },
  { id: 2, inicio: "08:25", fim: "09:15" },
  { id: 3, inicio: "09:30", fim: "10:20" },
  { id: 4, inicio: "10:25", fim: "11:15" },
  { id: 5, inicio: "11:20", fim: "12:10" },
  { id: 6, inicio: "12:15", fim: "13:05" },
]

// Generate deterministic colours from discipline name
const DISCIPLINE_COLOURS = [
  "#ef4444", "#3b82f6", "#22c55e", "#a855f7", "#f97316",
  "#ec4899", "#eab308", "#14b8a6", "#6366f1", "#f43f5e",
  "#0ea5e9", "#84cc16", "#d946ef", "#fb923c", "#06b6d4",
]

function disciplineColor(name: string): string {
  let hash = 0
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) | 0
  return DISCIPLINE_COLOURS[Math.abs(hash) % DISCIPLINE_COLOURS.length]
}

// ─── Component ───────────────────────────────────────────

export function HorariosContent({ tempos }: Props) {
  const router = useRouter()
  const [viewType, setViewType] = useState("turma")
  const [importando, setImportando] = useState(false)
  const [apagando, setApagando] = useState(false)
  const [importMsg, setImportMsg] = useState<string | null>(null)

  // Extract unique turmas and professors
  const turmaNames = useMemo(() => {
    const names = [...new Set(tempos.map((t) => t.turma.nome))].sort()
    return names
  }, [tempos])

  const profNames = useMemo(() => {
    return [...new Set(tempos.map((t) => t.professor.nome))].sort()
  }, [tempos])

  const disciplinaNames = useMemo(() => {
    return [...new Set(tempos.map((t) => t.disciplina.nome))].sort()
  }, [tempos])

  const [selectedTurma, setSelectedTurma] = useState(turmaNames[0] ?? "")
  const [selectedProfessor, setSelectedProfessor] = useState("")

  const turmaIndex = turmaNames.indexOf(selectedTurma)

  const navigateTurma = (direction: number) => {
    const newIndex = turmaIndex + direction
    if (newIndex >= 0 && newIndex < turmaNames.length) {
      setSelectedTurma(turmaNames[newIndex])
    }
  }

  // Build lookup: turma -> dia -> ordem -> tempo
  const turmaGrid = useMemo(() => {
    const grid: Record<string, Record<string, Record<number, TempoLectivo>>> = {}
    for (const t of tempos) {
      if (!grid[t.turma.nome]) grid[t.turma.nome] = {}
      if (!grid[t.turma.nome][t.diaSemana]) grid[t.turma.nome][t.diaSemana] = {}
      grid[t.turma.nome][t.diaSemana][t.ordem] = t
    }
    return grid
  }, [tempos])

  // Build lookup: professor -> dia -> ordem -> tempo
  const profGrid = useMemo(() => {
    const grid: Record<string, Record<string, Record<number, TempoLectivo>>> = {}
    for (const t of tempos) {
      if (!grid[t.professor.nome]) grid[t.professor.nome] = {}
      if (!grid[t.professor.nome][t.diaSemana]) grid[t.professor.nome][t.diaSemana] = {}
      grid[t.professor.nome][t.diaSemana][t.ordem] = t
    }
    return grid
  }, [tempos])

  const isEmpty = tempos.length === 0

  const normalizar = (v: unknown) =>
    String(v ?? "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

  const handleExcelImport = async (file: File) => {
    setImportMsg(null)
    setImportando(true)
    try {
      const buffer = await file.arrayBuffer()
      const wb = XLSX.read(buffer, { type: "array" })
      const ws = wb.Sheets[wb.SheetNames[0]]
      const data = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, {
        defval: "",
      })

      const rows = data.map((row) => {
        const entries = Object.entries(row)
        const pick = (...keys: string[]) => {
          const found = entries.find(([k]) => keys.includes(normalizar(k)))
          return found?.[1]
        }
        return {
          diaSemana: String(pick("diasemana", "dia", "dia_semana") ?? ""),
          periodoId: String(pick("periodo", "periodoid", "periodo_id") ?? ""),
          ordem: Number(pick("ordem", "tempo")),
          professor: String(pick("professor", "professornome", "docente") ?? ""),
          disciplina: String(pick("disciplina", "disciplinanome") ?? ""),
          sala: String(pick("sala", "salanome") ?? ""),
          turma: String(pick("turma", "turmanome") ?? ""),
        }
      })

      const { importarTemposLectivos } = await carregarHorariosActions()
      if (!importarTemposLectivos) {
        throw new Error("A action de importação de horários não está disponível.")
      }

      const result = await importarTemposLectivos(rows)
      if (result.success) {
        setImportMsg(result.message || "Importação concluída.")
        router.refresh()
      } else {
        setImportMsg(result.message || "Falha ao importar ficheiro.")
      }
    } catch {
      setImportMsg("Erro ao ler o ficheiro Excel.")
    } finally {
      setImportando(false)
    }
  }

  const handleApagarHorarios = async () => {
    if (!tempos.length) return
    const ok = window.confirm("Tem certeza que deseja apagar todos os horários?")
    if (!ok) return

    setImportMsg(null)
    setApagando(true)
    try {
      const { apagarTemposLectivos } = await carregarHorariosActions()
      if (!apagarTemposLectivos) {
        throw new Error("A action para apagar horários não está disponível.")
      }

      const result = await apagarTemposLectivos()
      setImportMsg(result.message || "Horários apagados com sucesso.")
      router.refresh()
    } catch {
      setImportMsg("Erro ao apagar horários.")
    } finally {
      setApagando(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Horários</h1>
          <p className="text-muted-foreground">
            Visualizar e gerir horários de turmas e professores
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="destructive"
            size="sm"
            onClick={handleApagarHorarios}
            disabled={apagando || !tempos.length}
          >
            {apagando ? "A apagar..." : "Apagar Horários"}
          </Button>
          <label className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm cursor-pointer hover:bg-muted/60 transition-colors">
            <Upload className="h-4 w-4" />
            {importando ? "A importar..." : "Importar Excel"}
            <input
              type="file"
              accept=".xlsx,.xls"
              className="hidden"
              disabled={importando}
              onChange={async (e) => {
                const file = e.target.files?.[0]
                if (!file) return
                await handleExcelImport(file)
                e.currentTarget.value = ""
              }}
            />
          </label>
          <Badge variant="outline" className="text-sm">
            {tempos.length} tempo{tempos.length !== 1 ? 's' : ''} lectivo{tempos.length !== 1 ? 's' : ''}
          </Badge>
        </div>
      </div>
      {importMsg && (
        <p className="text-sm text-muted-foreground">{importMsg}</p>
      )}

      {isEmpty ? (
        <Card>
          <CardContent className="flex flex-col h-64 items-center justify-center gap-3">
            <AlertCircle className="h-10 w-10 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground font-medium">Nenhum horário gerado ainda</p>
            <p className="text-sm text-muted-foreground">
              Vá à página <strong>Gerar Horários</strong> para criar os horários automaticamente.
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <Tabs value={viewType} onValueChange={setViewType}>
            <TabsList>
              <TabsTrigger value="turma">Por Turma</TabsTrigger>
              <TabsTrigger value="professor">Por Professor</TabsTrigger>
            </TabsList>

            {/* ── Por Turma ── */}
            <TabsContent value="turma" className="space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigateTurma(-1)}
                  disabled={turmaIndex <= 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Select value={selectedTurma} onValueChange={setSelectedTurma}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Selecionar turma" />
                  </SelectTrigger>
                  <SelectContent>
                    {turmaNames.map((t) => (
                      <SelectItem key={t} value={t}>
                        Turma {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigateTurma(1)}
                  disabled={turmaIndex >= turmaNames.length - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {selectedTurma && (
                <Card>
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle>Horário da Turma {selectedTurma}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScheduleTable
                      grid={turmaGrid[selectedTurma] ?? {}}
                      renderCell={(tempo) => (
                        <>
                          <div className="font-medium text-sm">{tempo.disciplina.nome}</div>
                          <div className="text-xs opacity-90">{tempo.professor.nome}</div>
                          <div className="text-xs opacity-75">{tempo.sala.nome}</div>
                        </>
                      )}
                    />
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* ── Por Professor ── */}
            <TabsContent value="professor" className="space-y-4">
              <Select value={selectedProfessor} onValueChange={setSelectedProfessor}>
                <SelectTrigger className="w-60">
                  <SelectValue placeholder="Selecionar professor" />
                </SelectTrigger>
                <SelectContent>
                  {profNames.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedProfessor ? (
                <Card>
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle>Horário de {selectedProfessor}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScheduleTable
                      grid={profGrid[selectedProfessor] ?? {}}
                      renderCell={(tempo) => (
                        <>
                          <div className="font-medium text-sm">{tempo.disciplina.nome}</div>
                          <div className="text-xs opacity-90">Turma {tempo.turma.nome}</div>
                          <div className="text-xs opacity-75">{tempo.sala.nome}</div>
                        </>
                      )}
                    />
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="flex h-64 items-center justify-center">
                    <p className="text-muted-foreground">
                      Selecione um professor para visualizar o horário
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* ── Legenda ── */}
          <Card>
            <CardHeader>
              <CardTitle>Legenda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {disciplinaNames.map((nome) => (
                  <div key={nome} className="flex items-center gap-2">
                    <div
                      className="h-4 w-4 rounded"
                      style={{ backgroundColor: disciplineColor(nome) }}
                    />
                    <span className="text-sm">{nome}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}

// ─── Reusable Schedule Table ─────────────────────────────

function ScheduleTable({
  grid,
  renderCell,
}: {
  grid: Record<string, Record<number, TempoLectivo>>
  renderCell: (tempo: TempoLectivo) => React.ReactNode
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-border bg-muted p-3 text-left text-sm font-medium">
              Tempo
            </th>
            {DIAS_SEMANA_SHORT.map((dia) => (
              <th
                key={dia}
                className="border border-border bg-muted p-3 text-center text-sm font-medium"
              >
                {dia}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TEMPOS_SLOTS.map((slot) => (
            <tr key={slot.id}>
              <td className="border border-border bg-muted/50 p-3 text-sm">
                <div className="font-medium">{slot.inicio}</div>
                <div className="text-xs text-muted-foreground">{slot.fim}</div>
              </td>
              {DIAS_SEMANA_FULL.map((diaFull, idx) => {
                const tempo = grid[diaFull]?.[slot.id]
                return (
                  <td key={diaFull} className="border border-border p-1">
                    {tempo ? (
                      <div
                        className="flex h-full min-h-16 flex-col justify-center rounded-md p-2 text-white"
                        style={{ backgroundColor: disciplineColor(tempo.disciplina.nome) }}
                      >
                        {renderCell(tempo)}
                      </div>
                    ) : (
                      <div className="flex h-full min-h-16 items-center justify-center text-muted-foreground">
                        -
                      </div>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
