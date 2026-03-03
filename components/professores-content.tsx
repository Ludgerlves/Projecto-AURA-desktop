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
import { Plus, Users, CalendarClock, Check } from "lucide-react"
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

interface Disciplina {
  nome: string
}

interface TurmaData {
  idTurma: number
  nome: string
  classe: string
  curso: string
}

interface DisponibilidadeData {
  idDisponibilidade: number
  diaSemana: string
  periodo: string
  ordem: number
  DiaSemana: { nome: string }
  Periodo: { periodo: string }
}

interface ProfTurmaDisciplinaData {
  idProfTurma: number
  turmaId: number
  disciplinaNome: string
  disciplina: { nome: string }
  Turma: { idTurma: number; nome: string }
}

interface ProfessorData {
  id_professor: number
  nome: string
  email: string | null
  telefone: string | null
  ProfTurmaDisciplina: ProfTurmaDisciplinaData[]
  Disponibilidade: DisponibilidadeData[]
}

interface DisponibilidadeSlot {
  diaSemana: string
  periodo: string
  ordem: number
}

interface ProfessorRow {
  id: number
  id_professor: number
  nome: string
  email: string
  telefone: string
  disciplinas: string[]
  turmas: { turmaId: number; turmaNome: string; disciplinaNome: string }[]
  disponibilidade: DisponibilidadeSlot[]
  periodo: string
  temposByDay: Record<string, number[]>
}

function mapProfessores(professores: ProfessorData[]): ProfessorRow[] {
  return professores.map((p) => {
    const byDay: Record<string, number[]> = {}
    let periodo = ""

    for (const d of p.Disponibilidade) {
      const day = d.DiaSemana.nome
      if (!byDay[day]) byDay[day] = []
      byDay[day].push(d.ordem)
      if (!periodo) periodo = d.Periodo.periodo
    }
    for (const day of Object.keys(byDay)) {
      byDay[day].sort((a, b) => a - b)
    }

    return {
      id: p.id_professor,
      id_professor: p.id_professor,
      nome: p.nome,
      email: p.email || "",
      telefone: p.telefone || "",
      disciplinas: p.ProfTurmaDisciplina.map((ptd) => ptd.disciplinaNome),
      turmas: p.ProfTurmaDisciplina.map((ptd) => ({
        turmaId: ptd.Turma.idTurma,
        turmaNome: ptd.Turma.nome,
        disciplinaNome: ptd.disciplinaNome,
      })),
      disponibilidade: p.Disponibilidade.map((d) => ({
        diaSemana: d.diaSemana,
        periodo: d.periodo,
        ordem: d.ordem,
      })),
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
  disciplinas: Disciplina[]
  turmas: TurmaData[]
}

export function ProfessoresContent({ professores, disciplinas, turmas }: ProfessoresContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const [editingProfessor, setEditingProfessor] = useState<ProfessorRow | null>(null)
  const [turmaSelecionada, setTurmaSelecionada] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    disciplina: [] as string[],
    periodo: "Manhã" as Periodo,
    selectedTempos: {} as Record<string, number[]>,
  })
  const [error, setError] = useState<string | null>(null)

  // Sheet state for dedicated availability management
  const [sheetOpen, setSheetOpen] = useState(false)
  const [sheetProfessor, setSheetProfessor] = useState<ProfessorRow | null>(null)
  const [sheetPeriodo, setSheetPeriodo] = useState<Periodo>("Manhã")
  const [sheetTempos, setSheetTempos] = useState<Record<string, number[]>>({})
  const [sheetError, setSheetError] = useState<string | null>(null)

  const rows = mapProfessores(professores)
  const tempoNumbers = Array.from({ length: TOTAL_TEMPOS }, (_, i) => i + 1)

  // -- Grid toggle helpers (shared logic) --
  const toggleTempo = useCallback(
    (
      setter: React.Dispatch<React.SetStateAction<Record<string, number[]>>>,
      dia: string,
      tempo: number
    ) => {
      setter((prev) => {
        const dayTempos = prev[dia] || []
        const exists = dayTempos.includes(tempo)
        return {
          ...prev,
          [dia]: exists
            ? dayTempos.filter((t) => t !== tempo)
            : [...dayTempos, tempo].sort((a, b) => a - b),
        }
      })
    },
    []
  )

  const toggleRow = useCallback(
    (setter: React.Dispatch<React.SetStateAction<Record<string, number[]>>>, dia: string) => {
      setter((prev) => {
        const dayTempos = prev[dia] || []
        const isFull = tempoNumbers.every((t) => dayTempos.includes(t))
        return {
          ...prev,
          [dia]: isFull ? [] : [...tempoNumbers],
        }
      })
    },
    [tempoNumbers]
  )

  const toggleColumn = useCallback(
    (setter: React.Dispatch<React.SetStateAction<Record<string, number[]>>>, tempo: number) => {
      setter((prev) => {
        const isFull = DIAS_SEMANA.every((d) => (prev[d] || []).includes(tempo))
        const next = { ...prev }
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
        return next
      })
    },
    []
  )

  // -- Form grid handlers --
  const handleFormToggle = (dia: string, tempo: number) => {
    setFormData((prev) => {
      const dayTempos = prev.selectedTempos[dia] || []
      const exists = dayTempos.includes(tempo)
      return {
        ...prev,
        selectedTempos: {
          ...prev.selectedTempos,
          [dia]: exists
            ? dayTempos.filter((t) => t !== tempo)
            : [...dayTempos, tempo].sort((a, b) => a - b),
        },
      }
    })
  }

  const handleFormToggleRow = (dia: string) => {
    setFormData((prev) => {
      const dayTempos = prev.selectedTempos[dia] || []
      const isFull = tempoNumbers.every((t) => dayTempos.includes(t))
      return {
        ...prev,
        selectedTempos: {
          ...prev.selectedTempos,
          [dia]: isFull ? [] : [...tempoNumbers],
        },
      }
    })
  }

  const handleFormToggleColumn = (tempo: number) => {
    setFormData((prev) => {
      const isFull = DIAS_SEMANA.every((d) =>
        (prev.selectedTempos[d] || []).includes(tempo)
      )
      const next = { ...prev.selectedTempos }
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
      return { ...prev, selectedTempos: next }
    })
  }

  // -- Build disponibilidade slots --
  const buildDisponibilidade = (
    tempos: Record<string, number[]>,
    Periodo: string
  ): DisponibilidadeSlot[] => {
    const slots: DisponibilidadeSlot[] = []
    for (const [dia, ordens] of Object.entries(tempos)) {
      for (const ordem of ordens) {
        slots.push({ diaSemana: dia, periodo: Periodo, ordem })
      }
    }
    return slots
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
          {professor.disciplinas.map((d) => (
            <Badge key={d} variant="outline" className="text-xs">
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
  const toggleDisciplina = (nome: string) => {
    setFormData((prev) => ({
      ...prev,
      disciplinas: prev.disciplina.includes(nome)
        ? prev.disciplina.filter((d) => d !== nome)
        : [...prev.disciplina, nome],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const disponibilidade = buildDisponibilidade(formData.selectedTempos, formData.periodo)

    // Build profTurmaDisciplina from selected turma + disciplines
    const profTurmaDisciplina = turmaSelecionada
      ? formData.disciplina.map((nome) => ({
          turmaId: turmaSelecionada,
          disciplinaNome: nome,
        }))
      : []

    const fd = new FormData()
    fd.append("nome", formData.nome)
    fd.append("email", formData.email)
    fd.append("telefone", formData.telefone)
    fd.append("profTurmaDisciplina", JSON.stringify(profTurmaDisciplina))
    fd.append("disponibilidade", JSON.stringify(disponibilidade))

    startTransition(async () => {
      let result
      if (editingProfessor) {
        result = await atualizarProfessor(editingProfessor.id_professor, fd)
      } else {
        result = await criarProfessor(fd)
      }

      if (result.success) {
        resetForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetForm = () => {
    setFormData({
      nome: "",
      email: "",
      disciplina: [],
      telefone: "",
      periodo: "Manhã",
      selectedTempos: {},
    })
    setTurmaSelecionada(null)
    setEditingProfessor(null)
    setError(null)
    setIsOpen(false)
  }

  const handleEdit = (professor: ProfessorRow) => {
    setEditingProfessor(professor)

    const selectedTempos: Record<string, number[]> = {}
    for (const d of professor.disponibilidade) {
      if (!selectedTempos[d.diaSemana]) selectedTempos[d.diaSemana] = []
      selectedTempos[d.diaSemana].push(d.ordem)
    }
    for (const day of Object.keys(selectedTempos)) {
      selectedTempos[day].sort((a, b) => a - b)
    }

    setFormData({
      nome: professor.nome,
      telefone: professor.telefone,
      email: professor.email,
      disciplina: professor.disciplinas   ,
      periodo: (professor.periodo as Periodo) || "Manhã",
      selectedTempos,
    })
    setError(null)
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

    const tempos: Record<string, number[]> = {}
    for (const d of professor.disponibilidade) {
      if (!tempos[d.diaSemana]) tempos[d.diaSemana] = []
      tempos[d.diaSemana].push(d.ordem)
    }
    for (const day of Object.keys(tempos)) {
      tempos[day].sort((a, b) => a - b)
    }

    setSheetTempos(tempos)
    setSheetPeriodo((professor.periodo as Periodo) || "Manhã")
    setSheetError(null)
    setSheetOpen(true)
  }

  const handleSheetSave = () => {
    if (!sheetProfessor) return
    setSheetError(null)

    const slots = buildDisponibilidade(sheetTempos, sheetPeriodo)

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

  // Count availability summary
  const filledSlots = Object.values(formData.selectedTempos).reduce(
    (sum, arr) => sum + arr.length,
    0
  )
  const totalSlots = DIAS_SEMANA.length * TOTAL_TEMPOS

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
                  <TabsTrigger value="disponibilidade" className="flex-1">
                    Disponibilidade
                    {filledSlots > 0 && (
                      <Badge variant="secondary" className="ml-2 text-[10px] px-1.5 py-0">
                        {filledSlots}
                      </Badge>
                    )}
                  </TabsTrigger>
                </TabsList>

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
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="Turma">Turma</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            {turmaSelecionada
                              ? turmas.find(t => t.idTurma === turmaSelecionada)?.nome ?? "Selecionar turma"
                              : "Selecionar turma"}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56">
                          {turmas.map((t) => (
                            <DropdownMenuItem key={t.idTurma} onClick={() => setTurmaSelecionada(t.idTurma)}>
                              {t.nome}
                            </DropdownMenuItem>
                          ))}
                          {turmas.length === 0 && (
                            <DropdownMenuItem disabled>Nenhuma turma registada</DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
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
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label>Disciplinas</Label>
                      <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto rounded-md border p-3">
                        {disciplinas.map((d) => {
                          const disciplina = d.nome
                          return (
                            <div key={d.nome} className="flex items-center gap-2">
                              <Checkbox
                                id={`disc-${d.nome}`}
                                checked={
                                  disciplina
                                    ? formData.disciplina.includes(disciplina)
                                    : false
                                }
                                onCheckedChange={() => {
                                  if (disciplina) toggleDisciplina(disciplina)
                                }}
                                disabled={!disciplina}
                              />
                              <Label
                                htmlFor={`disc-${d.nome}`}
                                className="text-sm font-normal cursor-pointer"
                              >
                                {d.nome}
                              </Label>
                            </div>
                          )
                        })}
                        {disciplinas.length === 0 && (
                          <p className="text-sm text-muted-foreground col-span-2">
                            Nenhuma disciplina registada.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

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
                      selectedTempos={formData.selectedTempos}
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
                            setFormData({ ...formData, selectedTempos: {} })
                          }
                        >
                          Limpar tudo
                        </Button>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {error && <p className="text-sm text-destructive mt-2">{error}</p>}

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
                selectedTempos={sheetTempos}
                onToggle={(dia, tempo) =>
                  toggleTempo(setSheetTempos, dia, tempo)
                }
                onToggleRow={(dia) => toggleRow(setSheetTempos, dia)}
                onToggleColumn={(tempo) => toggleColumn(setSheetTempos, tempo)}
              />

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  {Object.values(sheetTempos).reduce(
                    (sum, arr) => sum + arr.length,
                    0
                  )}{" "}
                  de {totalSlots} tempos selecionados
                </span>
                {Object.values(sheetTempos).reduce(
                  (sum, arr) => sum + arr.length,
                  0
                ) > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-xs h-7"
                    onClick={() => setSheetTempos({})}
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
