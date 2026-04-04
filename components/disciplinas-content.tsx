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
import { DataTable } from "@/components/data-table"
import { Plus, BookOpen } from "lucide-react"
import {
  criarDisciplina,
  atualizarDisciplina,
  apagarDisciplina,
} from "@/app/disciplinas/disciplinas-action"
import { useRouter } from "next/navigation"

interface DisciplinaData {
  id: number
  descricao: string
  tipo_sala: string
}

interface DisciplinaRow {
  id: number
  descricao: string
  tipo_sala: string
}

interface DisciplinasContentProps {
  disciplinas: DisciplinaData[]
}

export function DisciplinasContent({ disciplinas }: DisciplinasContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const [editingDisciplina, setEditingDisciplina] = useState<DisciplinaRow | null>(null)
  const [formData, setFormData] = useState({ descricao: "", tipo_sala: "" })
  const [error, setError] = useState<string | null>(null)

  const rows: DisciplinaRow[] = disciplinas.map((d) => ({
    id: d.id,
    descricao: d.descricao,
    tipo_sala: d.tipo_sala,
  }))

  const columns = [
    { key: "descricao" as const, header: "Nome" },
    { key: "tipo_sala" as const, header: "Tipo de Sala" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const fd = new FormData()
    fd.append("descricao", formData.descricao)
    fd.append("tipo_sala", formData.tipo_sala)

    startTransition(async () => {
      let result
      if (editingDisciplina) {
        result = await atualizarDisciplina(editingDisciplina.id, fd)
      } else {
        result = await criarDisciplina(fd)
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
    setFormData({ descricao: "", tipo_sala: "" })
    setEditingDisciplina(null)
    setError(null)
    setIsOpen(false)
  }

  const handleEdit = (disciplina: DisciplinaRow) => {
    setEditingDisciplina(disciplina)
    setFormData({ descricao: disciplina.descricao, tipo_sala: disciplina.tipo_sala })
    setError(null)
    setIsOpen(true)
  }

  const handleDelete = (disciplina: DisciplinaRow) => {
    startTransition(async () => {
      const result = await apagarDisciplina(disciplina.id)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar disciplina")
      }
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Disciplinas</h1>
          <p className="text-muted-foreground">
            Gerir disciplinas do sistema
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
                  <Label htmlFor="descricao">Nome da Disciplina</Label>
                  <Input
                    id="descricao"
                    value={formData.descricao}
                    onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                    placeholder="Ex: Matemática, Física..."
                    required
                  />
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
        searchKey="descricao"
        searchPlaceholder="Pesquisar disciplinas..."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}
