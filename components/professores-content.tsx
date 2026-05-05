"use client"

import React, { useState, useTransition, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTable } from "@/components/data-table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Users, CalendarClock, Check, Trash2 } from "lucide-react"
import {
  criarProfessor,
  atualizarProfessor,
  apagarProfessor,
  atualizarDisponibilidade,

} from "@/app/professores/professores-action"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const DIAS_SEMANA = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
]

const DIAS_ABREV: Record<string, string> = {
  "Segunda-feira": "Seg",
  "Terça-feira": "Ter",
  "Quarta-feira": "Qua",
  "Quinta-feira": "Qui",
  "Sexta-feira": "Sex",
}

const PERIODOS = ["Manhã", "Tarde"] as const
type Periodo = (typeof PERIODOS)[number]

const TOTAL_TEMPOS = 6

const MAPA_DIAS_DB_PARA_UI: Record<string, string> = {
  "SEGUNDA": "Segunda-feira",
  "TERCA": "Terça-feira",
  "QUARTA": "Quarta-feira",
  "QUINTA": "Quinta-feira",
  "SEXTA": "Sexta-feira",
  "Segunda": "Segunda-feira",
  "Terça": "Terça-feira",
  "Quarta": "Quarta-feira",
  "Quinta": "Quinta-feira",
  "Sexta": "Sexta-feira",
}

const MAPA_UI_PARA_DIAS_DB: Record<string, string> = {
  "Segunda-feira": "Segunda",
  "Terça-feira": "Terça",
  "Quarta-feira": "Quarta",
  "Quinta-feira": "Quinta",
  "Sexta-feira": "Sexta",
}

const MAPA_PERIODO_DB_PARA_UI: Record<string, string> = {
  "MANHA": "Manhã",
  "TARDE": "Tarde",
  "Manhã": "Manhã",
  "Tarde": "Tarde",
}

const MAPA_UI_PARA_PERIODO_DB: Record<string, string> = {
  "Manhã": "Manhã",
  "Tarde": "Tarde",
}

// ---------------------------------------------------------------------------
// Data interfaces — matching Prisma schema field names
// ---------------------------------------------------------------------------

interface TurmaData {
  id_turma: number
  descricao_turma: string
  turmaDisciplinas: { disciplina: { id_disciplina: number; descricao_disciplina: string } }[]
}

interface DisponibilidadeData {
  id_disponibilidade: number
  id_dia: number
  id_periodo: number
  ordem: number
  dia: { descricao_dia: string }
  periodo: { descricao_periodo: string }
}

interface ProfTurmaDisciplinaData {
  id_atribuicao: number
  id_turma: number
  id_disciplina: number
  disciplina: { descricao_disciplina: string }
  turma: { id_turma: number; descricao_turma: string }
}

interface ProfessorData {
  id_professor: number
  nome_professor: string
  email: string | null
  telefone: string | null
  profTurmaDisciplina: ProfTurmaDisciplinaData[]
  disponibilidades: DisponibilidadeData[]
}

interface DisponibilidadeSlot {
  diaSemana: string
  periodo: string
  ordem: number
}

interface Atribuicao {
  turmaId: number
  turmaNome: string
  disciplinaId: number
  disciplinaNome: string
}

interface ProfessorRow {
  id: number
  id_professor: number
  nome: string
  email: string
  telefone: string
  disciplinas: string[]
  turmas: Atribuicao[]
  disponibilidade: DisponibilidadeSlot[]
  periodo: string
  temposByDay: Record<string, number[]>
}

function mapProfessores(professores: ProfessorData[]): ProfessorRow[] {
  return professores.map((p) => {
    const byDay: Record<string, number[]> = {}
    let periodo = ""

    for (const d of (p.disponibilidades || [])) {
      const dbDay = d.dia?.descricao_dia || ""
      const day = MAPA_DIAS_DB_PARA_UI[dbDay] || dbDay
      if (day) {
        if (!byDay[day]) byDay[day] = []
        byDay[day].push(d.ordem)
      }
      if (!periodo && d.periodo?.descricao_periodo) {
        const dbPeriodo = d.periodo.descricao_periodo
        periodo = MAPA_PERIODO_DB_PARA_UI[dbPeriodo] || dbPeriodo
      }
    }
    for (const day of Object.keys(byDay)) {
      byDay[day].sort((a, b) => a - b)
    }

    return {
      id: p.id_professor,
      id_professor: p.id_professor,
      nome: p.nome_professor,
      email: p.email || "",
      telefone: p.telefone || "",
      disciplinas: (p.profTurmaDisciplina || []).map((ptd) => ptd.disciplina.descricao_disciplina),
      turmas: (p.profTurmaDisciplina || []).map((ptd) => ({
        turmaId: ptd.turma.id_turma,
        turmaNome: ptd.turma.descricao_turma,
        disciplinaId: ptd.id_disciplina,
        disciplinaNome: ptd.disciplina.descricao_disciplina,
      })),
      disponibilidade: (p.disponibilidades || []).map((d) => {
        const dbDay = d.dia?.descricao_dia || ""
        const dbPeriodo = d.periodo?.descricao_periodo || ""
        return {
          diaSemana: MAPA_DIAS_DB_PARA_UI[dbDay] || dbDay,
          periodo: MAPA_PERIODO_DB_PARA_UI[dbPeriodo] || dbPeriodo,
          ordem: d.ordem,
        }
      }),
      periodo,
      temposByDay: byDay,
    }
  })
}

// ---------------------------------------------------------------------------
// Interactive availability grid (used in both Dialog and Sheet)
// ---------------------------------------------------------------------------
function DisponibilidadeGrid({
  selectedTempos,
  onToggle,
  onToggleRow,
  onToggleColumn,
}: {
  selectedTempos: Record<string, number[]>
  onToggle: (dia: string, tempo: number) => void
  onToggleRow: (dia: string) => void
  onToggleColumn: (tempo: number) => void
}) {
  const tempoNumbers = Array.from({ length: TOTAL_TEMPOS }, (_, i) => i + 1)

  const isChecked = (dia: string, tempo: number) =>
    (selectedTempos[dia] || []).includes(tempo)

  const isRowFull = (dia: string) =>
    tempoNumbers.every((t) => isChecked(dia, t))

  const isColFull = (tempo: number) =>
    DIAS_SEMANA.every((d) => isChecked(d, tempo))

  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pl-4 pr-2 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Dia
              </th>
              {tempoNumbers.map((num) => (
                <th key={num} className="py-3 px-1 text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        onClick={() => onToggleColumn(num)}
                        className={cn(
                          "text-xs font-semibold px-2 py-1 rounded-md transition-colors",
                          isColFull(num)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {num}º
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {isColFull(num) ? "Desmarcar" : "Selecionar"} {num}º tempo para todos os dias
                    </TooltipContent>
                  </Tooltip>
                </th>
              ))}
              <th className="py-3 px-2"></th>
            </tr>
          </thead>
          <tbody>
            {DIAS_SEMANA.map((dia, idx) => (
              <tr
                key={dia}
                className={cn(
                  "transition-colors",
                  idx < DIAS_SEMANA.length - 1 && "border-b border-border/50"
                )}
              >
                <td className="py-2.5 pl-4 pr-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    {dia}
                  </span>
                </td>
                {tempoNumbers.map((num) => {
                  const checked = isChecked(dia, num)
                  return (
                    <td key={`${dia}-${num}`} className="py-2.5 px-1 text-center">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            onClick={() => onToggle(dia, num)}
                            className={cn(
                              "w-9 h-9 rounded-lg border-2 transition-all duration-150 flex items-center justify-center mx-auto",
                              checked
                                ? "bg-primary border-primary text-primary-foreground shadow-sm scale-105"
                                : "border-border hover:border-primary/40 hover:bg-primary/5"
                            )}
                          >
                            {checked && <Check className="h-4 w-4" />}
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {DIAS_ABREV[dia]} - {num}º Tempo
                        </TooltipContent>
                      </Tooltip>
                    </td>
                  )
                })}
                <td className="py-2.5 px-2 text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        onClick={() => onToggleRow(dia)}
                        className={cn(
                          "text-xs px-2 py-1.5 rounded-md font-medium transition-colors",
                          isRowFull(dia)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        Todos
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {isRowFull(dia) ? "Desmarcar" : "Selecionar"} todos os tempos de {dia}
                    </TooltipContent>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Mini grid preview for the table column
// ---------------------------------------------------------------------------
function MiniDisponibilidadeGrid({
  temposByDay,
  periodo,
  onClick,
}: {
  temposByDay: Record<string, number[]>
  periodo: string
  onClick?: () => void
}) {
  const tempoNumbers = Array.from({ length: TOTAL_TEMPOS }, (_, i) => i + 1)
  const hasData = Object.keys(temposByDay).length > 0

  if (!hasData) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors group"
      >
        <CalendarClock className="h-4 w-4 group-hover:text-primary transition-colors" />
        <span>Definir disponibilidade</span>
      </button>
    )
  }

  const totalSlots = DIAS_SEMANA.length * TOTAL_TEMPOS
  const filledSlots = Object.values(temposByDay).reduce((sum, arr) => sum + arr.length, 0)

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={onClick}
          className="group flex flex-col gap-1.5 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
        >
          {periodo && (
            <Badge variant="secondary" className="text-[10px] w-fit px-1.5 py-0">
              {periodo}
            </Badge>
          )}
          <div className="flex flex-col gap-[3px]">
            {DIAS_SEMANA.map((dia) => (
              <div key={dia} className="flex items-center gap-[3px]">
                <span className="text-[9px] text-muted-foreground w-5 text-right font-medium leading-none">
                  {DIAS_ABREV[dia]}
                </span>
                <div className="flex gap-[2px]">
                  {tempoNumbers.map((num) => {
                    const isAvailable = (temposByDay[dia] || []).includes(num)
                    return (
                      <div
                        key={`${dia}-${num}`}
                        className={cn(
                          "w-[10px] h-[10px] rounded-[2px] transition-colors",
                          isAvailable
                            ? "bg-primary group-hover:bg-primary/80"
                            : "bg-muted-foreground/10"
                        )}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground">
            {filledSlots}/{totalSlots} tempos
          </span>
        </button>
      </TooltipTrigger>
      <TooltipContent>Clique para gerir disponibilidade</TooltipContent>
    </Tooltip>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
interface ProfessoresContentProps {
  professores: ProfessorData[]
  turmas: TurmaData[]
}

export function ProfessoresContent({ professores, turmas }: ProfessoresContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const [editingProfessor, setEditingProfessor] = useState<ProfessorRow | null>(null)
  const emptyTemposByPeriodo = (): Record<Periodo, Record<string, number[]>> => ({
    "Manhã": {},
    "Tarde": {},
  })
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    periodo: "Manhã" as Periodo,
    selectedTempos: emptyTemposByPeriodo(),
  })
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  // -- Atribuições turma-disciplina (only used in edit mode) --
  const [atribuicoes, setAtribuicoes] = useState<Atribuicao[]>([])
  const [addTurmaId, setAddTurmaId] = useState<number | null>(null)
  const [addDisciplinas, setAddDisciplinas] = useState<string[]>([])

  // Sheet state for dedicated availability management
  const [sheetOpen, setSheetOpen] = useState(false)
  const [sheetProfessor, setSheetProfessor] = useState<ProfessorRow | null>(null)
  const [sheetPeriodo, setSheetPeriodo] = useState<Periodo>("Manhã")
  const [sheetTempos, setSheetTempos] = useState<Record<Periodo, Record<string, number[]>>>(emptyTemposByPeriodo())
  const [sheetError, setSheetError] = useState<string | null>(null)

  const rows = mapProfessores(professores)
  const tempoNumbers = Array.from({ length: TOTAL_TEMPOS }, (_, i) => i + 1)

  // -- Grid toggle helpers (shared logic, period-aware) --
  const toggleTempo = useCallback(
    (
      setter: React.Dispatch<React.SetStateAction<Record<Periodo, Record<string, number[]>>>>,
      periodo: Periodo,
      dia: string,
      tempo: number
    ) => {
      setter((prev) => {
        const periodoTempos = prev[periodo] || {}
        const dayTempos = periodoTempos[dia] || []
        const exists = dayTempos.includes(tempo)
        return {
          ...prev,
          [periodo]: {
            ...periodoTempos,
            [dia]: exists
              ? dayTempos.filter((t) => t !== tempo)
              : [...dayTempos, tempo].sort((a, b) => a - b),
          },
        }
      })
    },
    []
  )

  const toggleRow = useCallback(
    (
      setter: React.Dispatch<React.SetStateAction<Record<Periodo, Record<string, number[]>>>>,
      periodo: Periodo,
      dia: string
    ) => {
      setter((prev) => {
        const periodoTempos = prev[periodo] || {}
        const dayTempos = periodoTempos[dia] || []
        const isFull = tempoNumbers.every((t) => dayTempos.includes(t))
        return {
          ...prev,
          [periodo]: {
            ...periodoTempos,
            [dia]: isFull ? [] : [...tempoNumbers],
          },
        }
      })
    },
    [tempoNumbers]
  )

  const toggleColumn = useCallback(
    (
      setter: React.Dispatch<React.SetStateAction<Record<Periodo, Record<string, number[]>>>>,
      periodo: Periodo,
      tempo: number
    ) => {
      setter((prev) => {
        const periodoTempos = prev[periodo] || {}
        const isFull = DIAS_SEMANA.every((d) => (periodoTempos[d] || []).includes(tempo))
        const next = { ...periodoTempos }
        for (const dia of DIAS_SEMANA) {
          const dayTempos = next[dia] || []
          if (isFull) {
            next[dia] = dayTempos.filter((t) => t !== tempo)
          } else {
            if (!dayTempos.includes(tempo)) {
              next[dia] = [...dayTempos, tempo].sort((a, b) => a - b)
            }
          }
        }
        return { ...prev, [periodo]: next }
      })
    },
    []
  )

  // -- Form grid handlers (period-aware) --
  const handleFormToggle = (dia: string, tempo: number) => {
    setFormData((prev) => {
      const periodoTempos = prev.selectedTempos[prev.periodo] || {}
      const dayTempos = periodoTempos[dia] || []
      const exists = dayTempos.includes(tempo)
      return {
        ...prev,
        selectedTempos: {
          ...prev.selectedTempos,
          [prev.periodo]: {
            ...periodoTempos,
            [dia]: exists
              ? dayTempos.filter((t) => t !== tempo)
              : [...dayTempos, tempo].sort((a, b) => a - b),
          },
        },
      }
    })
  }

  const handleFormToggleRow = (dia: string) => {
    setFormData((prev) => {
      const periodoTempos = prev.selectedTempos[prev.periodo] || {}
      const dayTempos = periodoTempos[dia] || []
      const isFull = tempoNumbers.every((t) => dayTempos.includes(t))
      return {
        ...prev,
        selectedTempos: {
          ...prev.selectedTempos,
          [prev.periodo]: {
            ...periodoTempos,
            [dia]: isFull ? [] : [...tempoNumbers],
          },
        },
      }
    })
  }

  const handleFormToggleColumn = (tempo: number) => {
    setFormData((prev) => {
      const periodoTempos = prev.selectedTempos[prev.periodo] || {}
      const isFull = DIAS_SEMANA.every((d) =>
        (periodoTempos[d] || []).includes(tempo)
      )
      const next = { ...periodoTempos }
      for (const dia of DIAS_SEMANA) {
        const dayTempos = next[dia] || []
        if (isFull) {
          next[dia] = dayTempos.filter((t) => t !== tempo)
        } else {
          if (!dayTempos.includes(tempo)) {
            next[dia] = [...dayTempos, tempo].sort((a, b) => a - b)
          }
        }
      }
      return {
        ...prev,
        selectedTempos: { ...prev.selectedTempos, [prev.periodo]: next },
      }
    })
  }

  // -- Build disponibilidade slots from per-period state --
  const buildDisponibilidadeFromAll = (
    temposByPeriodo: Record<Periodo, Record<string, number[]>>
  ): DisponibilidadeSlot[] => {
    const slots: DisponibilidadeSlot[] = []
    for (const periodo of PERIODOS) {
      const tempos = temposByPeriodo[periodo] || {}
      for (const [dia, ordens] of Object.entries(tempos)) {
        for (const ordem of ordens) {
          slots.push({
            diaSemana: MAPA_UI_PARA_DIAS_DB[dia] || dia,
            periodo: MAPA_UI_PARA_PERIODO_DB[periodo] || periodo,
            ordem,
          })
        }
      }
    }
    return slots
  }

  // -- Atribuição helpers --
  const handleAddAtribuicao = () => {
    if (!addTurmaId || addDisciplinas.length === 0) return
    const turma = turmas.find((t) => t.id_turma === addTurmaId)
    if (!turma) return

    const newAtribuicoes = turma.turmaDisciplinas
      .filter((td) => addDisciplinas.includes(td.disciplina.descricao_disciplina))
      .filter((td) => !atribuicoes.some(
        (a) => a.turmaId === addTurmaId && a.disciplinaId === td.disciplina.id_disciplina
      ))
      .map((td) => ({
        turmaId: addTurmaId,
        turmaNome: turma.descricao_turma,
        disciplinaId: td.disciplina.id_disciplina,
        disciplinaNome: td.disciplina.descricao_disciplina,
      }))

    setAtribuicoes((prev) => [...prev, ...newAtribuicoes])
    setAddTurmaId(null)
    setAddDisciplinas([])
  }

  const handleRemoveAtribuicao = (index: number) => {
    setAtribuicoes((prev) => prev.filter((_, i) => i !== index))
  }

  const toggleAddDisciplina = (nome: string, checked: boolean) => {
    setAddDisciplinas((prev) =>
      checked ? [...prev, nome] : prev.filter((d) => d !== nome)
    )
  }

  // -- Columns --
  const columns = [
    { key: "nome" as const, header: "Nome" },
    { key: "email" as const, header: "Email" },
    { key: "telefone" as const, header: "Telefone" },
    {
      key: "disciplinas",
      header: "Disciplinas",
      render: (professor: ProfessorRow) => (
        <div className="flex flex-wrap gap-1">
          {professor.disciplinas.map((d, i) => (
            <Badge key={`${d}-${i}`} variant="outline" className="text-xs">
              {d}
            </Badge>
          ))}
        </div>
      ),
    },
    {
      key: "temposByDay",
      header: "Disponibilidade",
      render: (professor: ProfessorRow) => (
        <MiniDisponibilidadeGrid
          temposByDay={professor.temposByDay}
          periodo={professor.periodo}
          onClick={() => openDisponibilidadeSheet(professor)}
        />
      ),
    },
  ]

  // -- Dialog handlers --
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const disponibilidade = buildDisponibilidadeFromAll(formData.selectedTempos)

    const profTurmaDisciplina = atribuicoes.map((a) => ({
      turmaId: a.turmaId,
      disciplinaId: a.disciplinaId,
    }))

    const fd = new FormData()
    fd.append("nome", formData.nome)
    fd.append("email", formData.email)
    fd.append("telefone", formData.telefone)
    fd.append("profTurmaDisciplina", JSON.stringify(profTurmaDisciplina))
    fd.append("disponibilidade", JSON.stringify(disponibilidade))

startTransition(async () => {
console.log('📤 [UI DEBUG] Enviando formulário...');
let result
if (editingProfessor) {
result = await atualizarProfessor(editingProfessor.id_professor, fd)
} else {
result = await criarProfessor(fd)
}

console.log('📥 [UI DEBUG] Resultado recebido:', {
success: result.success,
message: result.message,
errors: result.errors
});

if (result.success) {
console.log('✅ [UI DEBUG] Sucesso!');
resetForm()
router.refresh()
} else {
if (result.errors) {
console.log('⚠️ [UI DEBUG] Erros de campo:', result.errors);
setFieldErrors(result.errors as Record<string, string[]>)
}
console.log('⚠️ [UI DEBUG] Erro definido:', result.message);
setError(result.message || "Erro inesperado")
}
})
  }

  const resetForm = () => {
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      periodo: "Manhã",
      selectedTempos: emptyTemposByPeriodo(),
    })
    setAtribuicoes([])
    setAddTurmaId(null)
    setAddDisciplinas([])
    setEditingProfessor(null)
    setError(null)
    setFieldErrors({})
    setIsOpen(false)
  }

  const handleEdit = (professor: ProfessorRow) => {
    setEditingProfessor(professor)

    const selectedTempos = emptyTemposByPeriodo()
    for (const d of professor.disponibilidade) {
      const periodo = (d.periodo as Periodo) || "Manhã"
      if (!selectedTempos[periodo]) selectedTempos[periodo] = {}
      if (!selectedTempos[periodo][d.diaSemana]) selectedTempos[periodo][d.diaSemana] = []
      selectedTempos[periodo][d.diaSemana].push(d.ordem)
    }
    for (const periodo of PERIODOS) {
      for (const day of Object.keys(selectedTempos[periodo])) {
        selectedTempos[periodo][day].sort((a, b) => a - b)
      }
    }

    setFormData({
      nome: professor.nome,
      telefone: professor.telefone,
      email: professor.email,
      periodo: (professor.periodo as Periodo) || "Manhã",
      selectedTempos,
    })
    setAtribuicoes(professor.turmas)
    setAddTurmaId(null)
    setAddDisciplinas([])
    setError(null)
    setFieldErrors({})
    setIsOpen(true)
  }

  const handleDelete = (professor: ProfessorRow) => {
    startTransition(async () => {
      const result = await apagarProfessor(professor.id_professor)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar professor")
      }
    })
  }

  // -- Sheet handlers --
  const openDisponibilidadeSheet = (professor: ProfessorRow) => {
    setSheetProfessor(professor)

    const tempos = emptyTemposByPeriodo()
    for (const d of professor.disponibilidade) {
      const periodo = (d.periodo as Periodo) || "Manhã"
      if (!tempos[periodo]) tempos[periodo] = {}
      if (!tempos[periodo][d.diaSemana]) tempos[periodo][d.diaSemana] = []
      tempos[periodo][d.diaSemana].push(d.ordem)
    }
    for (const periodo of PERIODOS) {
      for (const day of Object.keys(tempos[periodo])) {
        tempos[periodo][day].sort((a, b) => a - b)
      }
    }

    setSheetTempos(tempos)
    setSheetPeriodo((professor.periodo as Periodo) || "Manhã")
    setSheetError(null)
    setSheetOpen(true)
  }

  const handleSheetSave = () => {
    if (!sheetProfessor) return
    setSheetError(null)

    const slots = buildDisponibilidadeFromAll(sheetTempos)

    startTransition(async () => {
      const result = await atualizarDisponibilidade(sheetProfessor.id_professor, slots)
      if (result.success) {
        setSheetOpen(false)
        router.refresh()
      } else {
        setSheetError(result.message || "Erro ao atualizar disponibilidade")
      }
    })
  }

  // Count availability summary for the current period
  const currentFormTempos = formData.selectedTempos[formData.periodo] || {}
  const filledSlots = Object.values(currentFormTempos).reduce(
    (sum, arr) => sum + arr.length,
    0
  )
  const totalSlots = DIAS_SEMANA.length * TOTAL_TEMPOS

  // Disciplines available for the selected addTurmaId
  const addTurmaDiscs = addTurmaId
    ? (turmas.find((t) => t.id_turma === addTurmaId)?.turmaDisciplinas || []).map(
        (td) => td.disciplina.descricao_disciplina
      )
    : []

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Professores</h1>
          <p className="text-muted-foreground">
            Gerir professores e suas atribuições
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => resetForm()}>
              <Plus className="h-4 w-4" />
              Adicionar Professor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProfessor ? "Editar Professor" : "Novo Professor"}
              </DialogTitle>
              <DialogDescription>
                {editingProfessor
                  ? "Atualize os dados do professor"
                  : "Preencha os dados para adicionar um novo professor"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <Tabs defaultValue="dados" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="dados" className="flex-1">
                    Informações
                  </TabsTrigger>
                  {editingProfessor && (
                    <TabsTrigger value="turmas" className="flex-1">
                      Turmas & Disciplinas
                      {atribuicoes.length > 0 && (
                        <Badge variant="secondary" className="ml-2 text-[10px] px-1.5 py-0">
                          {atribuicoes.length}
                        </Badge>
                      )}
                    </TabsTrigger>
                  )}
                  <TabsTrigger value="disponibilidade" className="flex-1">
                    Disponibilidade
                    {filledSlots > 0 && (
                      <Badge variant="secondary" className="ml-2 text-[10px] px-1.5 py-0">
                        {filledSlots}
                      </Badge>
                    )}
                  </TabsTrigger>
                </TabsList>

                {/* ── Tab: Informações ── */}
                <TabsContent value="dados">
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="nome">Nome</Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        required
                      />
                      {fieldErrors.nome_professor && (
                        <p className="text-[13px] font-medium text-destructive">
                          {fieldErrors.nome_professor[0]}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                        {fieldErrors.email && (
                          <p className="text-[13px] font-medium text-destructive">
                            {fieldErrors.email[0]}
                          </p>
                        )}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          value={formData.telefone}
                          onChange={(e) =>
                            setFormData({ ...formData, telefone: e.target.value })
                          }
                          required
                        />
                        {fieldErrors.telefone && (
                          <p className="text-[13px] font-medium text-destructive">
                            {fieldErrors.telefone[0]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* ── Tab: Turmas & Disciplinas (only in edit mode) ── */}
                {editingProfessor && (
                  <TabsContent value="turmas">
                    <div className="grid gap-4 py-4">
                      {/* Current assignments */}
                      <div className="grid gap-2">
                        <Label>Atribuições actuais</Label>
                        {atribuicoes.length === 0 ? (
                          <div className="rounded-md border border-dashed border-border p-4 text-center">
                            <p className="text-sm text-muted-foreground">
                              Nenhuma turma/disciplina atribuída.
                            </p>
                          </div>
                        ) : (
                          <div className="rounded-md border p-3 space-y-2 max-h-48 overflow-y-auto">
                            {atribuicoes.map((a, idx) => (
                              <div
                                key={`${a.turmaId}-${a.disciplinaNome}-${idx}`}
                                className="flex items-center justify-between gap-2 text-sm"
                              >
                                <div className="flex items-center gap-2">
                                  <Badge variant="secondary" className="text-xs">
                                    {a.turmaNome}
                                  </Badge>
                                  <span>{a.disciplinaNome}</span>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                                  onClick={() => handleRemoveAtribuicao(idx)}
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Add new assignment */}
                      <div className="grid gap-3 rounded-md border border-dashed border-border p-3">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wider">
                          Adicionar atribuição
                        </Label>
                        <div className="grid gap-2">
                          <Label htmlFor="add-turma">Turma</Label>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" className="w-full justify-between">
                                {addTurmaId
                                  ? turmas.find((t) => t.id_turma === addTurmaId)?.descricao_turma ?? "Selecionar turma"
                                  : "Selecionar turma"}
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-56">
                              {turmas.map((t, idx) => (
                                <DropdownMenuItem
                                  key={`${t.id_turma}-${idx}`}
                                  onClick={() => {
                                    setAddTurmaId(t.id_turma)
                                    setAddDisciplinas([])
                                  }}
                                >
                                  {t.descricao_turma}
                                </DropdownMenuItem>
                              ))}
                              {turmas.length === 0 && (
                                <DropdownMenuItem key="empty" disabled>
                                  Nenhuma turma registada
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {addTurmaId && (
                          <div className="grid gap-2">
                            <Label>Disciplinas</Label>
                            {addTurmaDiscs.length === 0 ? (
                              <p className="text-sm text-muted-foreground">
                                Nenhuma disciplina associada a esta turma.
                              </p>
                            ) : (
                              <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto rounded-md border p-3">
                                {addTurmaDiscs.map((discNome) => (
                                  <div key={discNome} className="flex items-center gap-2">
                                    <Checkbox
                                      id={`add-disc-${discNome}`}
                                      checked={addDisciplinas.includes(discNome)}
                                      onCheckedChange={(checked) =>
                                        toggleAddDisciplina(discNome, checked === true)
                                      }
                                    />
                                    <Label
                                      htmlFor={`add-disc-${discNome}`}
                                      className="text-sm font-normal cursor-pointer"
                                    >
                                      {discNome}
                                    </Label>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          className="w-fit gap-1"
                          disabled={!addTurmaId || addDisciplinas.length === 0}
                          onClick={handleAddAtribuicao}
                        >
                          <Plus className="h-3.5 w-3.5" />
                          Adicionar
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                )}

                {/* ── Tab: Disponibilidade ── */}
                <TabsContent value="disponibilidade">
                  <div className="grid gap-4 py-4">
                    <div className="flex items-center justify-between">
                      <div className="grid gap-1">
                        <Label>Período</Label>
                        <p className="text-xs text-muted-foreground">
                          Selecione o período e marque os tempos disponíveis
                        </p>
                      </div>
                      <Select
                        value={formData.periodo}
                        onValueChange={(v) =>
                          setFormData({ ...formData, periodo: v as Periodo })
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {PERIODOS.map((p) => (
                            <SelectItem key={p} value={p}>
                              {p}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <DisponibilidadeGrid
                      selectedTempos={currentFormTempos}
                      onToggle={handleFormToggle}
                      onToggleRow={handleFormToggleRow}
                      onToggleColumn={handleFormToggleColumn}
                    />

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>
                        {filledSlots} de {totalSlots} tempos selecionados
                      </span>
                      {filledSlots > 0 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="text-xs h-7"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              selectedTempos: {
                                ...formData.selectedTempos,
                                [formData.periodo]: {},
                              },
                            })
                          }
                        >
                          Limpar tudo
                        </Button>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

                {error && (
                  <div className="rounded-md bg-destructive/15 p-3 mt-2">
                    <p className="text-sm font-medium text-destructive">{error}</p>
                  </div>
                )}

              <DialogFooter className="mt-4">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending
                    ? "A guardar..."
                    : editingProfessor
                      ? "Guardar"
                      : "Adicionar"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl font-bold">{rows.length}</p>
          <p className="text-sm text-muted-foreground">
            Professores registados
          </p>
        </div>
      </div>

      <DataTable
        data={rows}
        columns={columns}
        searchKey="nome"
        searchPlaceholder="Pesquisar professores..."
        onEdit={handleEdit}
        onDelete={handleDelete}
        extraActions={[
          {
            label: "Disponibilidade",
            icon: <CalendarClock className="mr-2 h-4 w-4" />,
            onClick: openDisponibilidadeSheet,
          },
        ]}
      />

      {/* Disponibilidade Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="sm:max-w-xl w-full overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <CalendarClock className="h-5 w-5 text-primary" />
              Disponibilidade
            </SheetTitle>
            <SheetDescription>
              {sheetProfessor && (
                <>
                  Gerir disponibilidade de{" "}
                  <span className="font-semibold text-foreground">
                    {sheetProfessor.nome}
                  </span>
                </>
              )}
            </SheetDescription>
          </SheetHeader>

          {sheetProfessor && (
            <div className="flex flex-col gap-4 px-4 pb-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Período</Label>
                <Select
                  value={sheetPeriodo}
                  onValueChange={(v) => setSheetPeriodo(v as Periodo)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PERIODOS.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <DisponibilidadeGrid
                selectedTempos={sheetTempos[sheetPeriodo] || {}}
                onToggle={(dia, tempo) =>
                  toggleTempo(setSheetTempos, sheetPeriodo, dia, tempo)
                }
                onToggleRow={(dia) => toggleRow(setSheetTempos, sheetPeriodo, dia)}
                onToggleColumn={(tempo) => toggleColumn(setSheetTempos, sheetPeriodo, tempo)}
              />

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  {Object.values(sheetTempos[sheetPeriodo] || {}).reduce(
                    (sum, arr) => sum + arr.length,
                    0
                  )}{" "}
                  de {totalSlots} tempos selecionados
                </span>
                {Object.values(sheetTempos[sheetPeriodo] || {}).reduce(
                  (sum, arr) => sum + arr.length,
                  0
                ) > 0 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="text-xs h-7"
                      onClick={() => setSheetTempos((prev) => ({
                        ...prev,
                        [sheetPeriodo]: {},
                      }))}
                    >
                      Limpar tudo
                    </Button>
                  )}
              </div>

              {sheetError && (
                <p className="text-sm text-destructive">{sheetError}</p>
              )}
            </div>
          )}

          <SheetFooter className="px-4">
            <Button
              variant="outline"
              onClick={() => setSheetOpen(false)}
            >
              Cancelar
            </Button>
            <Button onClick={handleSheetSave} disabled={isPending}>
              {isPending ? "A guardar..." : "Guardar Disponibilidade"}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
