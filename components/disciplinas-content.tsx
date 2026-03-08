"use client"

import React, { useState, useTransition } from "react"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTable } from "@/components/data-table"
import { Plus, BookOpen, GraduationCap } from "lucide-react"
import {
  criarDisciplina,
  atualizarDisciplina,
  apagarDisciplina,
  atualizarTurmasDaDisciplina,
} from "@/app/disciplinas/disciplinas-action"
import { useRouter } from "next/navigation"

interface TurmaDisciplinaData {
  id_Turma: number
  Disciplina: string
}

interface TurmaData {
  idTurma: number
  nome: string
  classe: string
  curso: string
  TurmaDisciplina: TurmaDisciplinaData[]
}

interface DisciplinaData {
  nome: string
}

interface DisciplinaRow {
  id: string
  nome: string
  turmas: string[]
}

interface DisciplinasContentProps {
  disciplinas: DisciplinaData[]
  turmas: TurmaData[]
}

export function DisciplinasContent({ disciplinas, turmas }: DisciplinasContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const [editingDisciplina, setEditingDisciplina] = useState<DisciplinaRow | null>(null)
  const [formData, setFormData] = useState({ nome: "", turmaIds: [] as number[] })
  const [error, setError] = useState<string | null>(null)

  // Build rows with turma associations
  const rows: DisciplinaRow[] = disciplinas.map((d) => {
    const associatedTurmas = turmas
      .filter((t) => t.TurmaDisciplina.some((td) => td.Disciplina === d.nome))
      .map((t) => t.nome)
    return {
      id: d.nome,
      nome: d.nome,
      turmas: associatedTurmas,
    }
  })

  const columns = [
    { key: "nome" as const, header: "Nome" },
    {
      key: "turmas",
      header: "Turmas Associadas",
      render: (row: DisciplinaRow) => (
        <div className="flex flex-wrap gap-1">
          {row.turmas.length > 0 ? (
            row.turmas.map((t) => (
              <Badge key={t} variant="outline" className="text-xs">
                {t}
              </Badge>
            ))
          ) : (
            <span className="text-xs text-muted-foreground italic">
              Nenhuma turma
            </span>
          )}
        </div>
      ),
    },
  ]

  const toggleTurma = (turmaId: number) => {
    setFormData((prev) => ({
      ...prev,
      turmaIds: prev.turmaIds.includes(turmaId)
        ? prev.turmaIds.filter((id) => id !== turmaId)
        : [...prev.turmaIds, turmaId],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const fd = new FormData()
    fd.append("nome", formData.nome)

    startTransition(async () => {
      let result
      if (editingDisciplina) {
        // When editing, first update the discipline name, then turma associations
        result = await atualizarDisciplina(editingDisciplina.nome as any, fd)
        if (result.success) {
          // Update turma associations using the (possibly new) name
          const nomeFinal = formData.nome || editingDisciplina.nome
          await atualizarTurmasDaDisciplina(nomeFinal, formData.turmaIds)
        }
      } else {
        result = await criarDisciplina(fd)
        if (result.success) {
          // Create turma associations for the new discipline
          await atualizarTurmasDaDisciplina(formData.nome, formData.turmaIds)
        }
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
    setFormData({ nome: "", turmaIds: [] })
    setEditingDisciplina(null)
    setError(null)
    setIsOpen(false)
  }

  const handleEdit = (disciplina: DisciplinaRow) => {
    const associatedTurmaIds = turmas
      .filter((t) => t.TurmaDisciplina.some((td) => td.Disciplina === disciplina.nome))
      .map((t) => t.idTurma)

    setEditingDisciplina(disciplina)
    setFormData({ nome: disciplina.nome, turmaIds: associatedTurmaIds })
    setError(null)
    setIsOpen(true)
  }

  const handleDelete = (disciplina: DisciplinaRow) => {
    startTransition(async () => {
      const result = await apagarDisciplina(disciplina.nome as any)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar disciplina")
      }
    })
  }

  // Group turmas by curso for better visual organization
  const turmasByCurso = turmas.reduce<Record<string, TurmaData[]>>((acc, t) => {
    if (!acc[t.curso]) acc[t.curso] = []
    acc[t.curso].push(t)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Disciplinas</h1>
          <p className="text-muted-foreground">
            Gerir disciplinas e suas associações com turmas
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => resetForm()}>
              <Plus className="h-4 w-4" />
              Nova Disciplina
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingDisciplina ? "Editar Disciplina" : "Nova Disciplina"}
              </DialogTitle>
              <DialogDescription>
                {editingDisciplina
                  ? "Atualize os dados da disciplina"
                  : "Preencha os dados para criar uma nova disciplina"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="nome">Nome da Disciplina</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Ex: Matemática, Física..."
                    required
                  />
                </div>

                {/* Turma checkboxes */}
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <Label className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      Turmas Associadas
                    </Label>
                    {formData.turmaIds.length > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {formData.turmaIds.length} selecionada{formData.turmaIds.length !== 1 ? "s" : ""}
                      </Badge>
                    )}
                  </div>

                  {turmas.length > 0 ? (
                    <div className="rounded-lg border border-border bg-card max-h-56 overflow-y-auto">
                      {Object.entries(turmasByCurso).map(([curso, cursoTurmas], idx) => (
                        <div key={curso}>
                          {idx > 0 && <div className="border-t border-border/50" />}
                          <div className="px-3 py-2 bg-muted/30">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                              {curso}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-1 p-2">
                            {cursoTurmas.map((t) => {
                              const isChecked = formData.turmaIds.includes(t.idTurma)
                              return (
                                <label
                                  key={t.idTurma}
                                  htmlFor={`turma-${t.idTurma}`}
                                  className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 cursor-pointer transition-all duration-150 ${isChecked
                                      ? "bg-primary/10 border border-primary/30"
                                      : "hover:bg-muted/50 border border-transparent"
                                    }`}
                                >
                                  <Checkbox
                                    id={`turma-${t.idTurma}`}
                                    checked={isChecked}
                                    onCheckedChange={() => toggleTurma(t.idTurma)}
                                  />
                                  <div className="flex flex-col">
                                    <span className="text-sm font-medium leading-tight">
                                      {t.nome}
                                    </span>
                                    <span className="text-[10px] text-muted-foreground leading-tight">
                                      {t.classe}
                                    </span>
                                  </div>
                                </label>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-md border border-dashed border-border p-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        Nenhuma turma registada.
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Registe turmas na página de Turmas.
                      </p>
                    </div>
                  )}
                </div>

                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending
                    ? "A guardar..."
                    : editingDisciplina
                      ? "Guardar"
                      : "Criar"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <BookOpen className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl font-bold">{disciplinas.length}</p>
          <p className="text-sm text-muted-foreground">
            Disciplinas registadas
          </p>
        </div>
      </div>

      <DataTable
        data={rows}
        columns={columns}
        searchKey="nome"
        searchPlaceholder="Pesquisar disciplinas..."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}
