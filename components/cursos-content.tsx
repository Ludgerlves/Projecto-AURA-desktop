"use client"

import React, { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
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
import { Plus, BookMarked } from "lucide-react"
import { criarCurso, atualizarCurso, apagarCurso } from "@/app/turmas/turma-action"
import { useRouter } from "next/navigation"

interface CursoData {
  id: number
  descricao: string
}

interface CursoRow extends CursoData {
}

interface CursosContentProps {
  cursos: CursoData[]
}

export function CursosContent({ cursos }: CursosContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const [editingCurso, setEditingCurso] = useState<CursoRow | null>(null)
  const [formData, setFormData] = useState({ descricao: "" })
  const [error, setError] = useState<string | null>(null)

  const rows: CursoRow[] = cursos.map((c) => ({
    ...c,
  }))

  const columns = [
    { key: "descricao" as const, header: "Nome" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const fd = new FormData()
    fd.append("descricao", formData.descricao)

    startTransition(async () => {
      const result = editingCurso
        ? await atualizarCurso(editingCurso.id, fd)
        : await criarCurso(fd)
      if (result.success) {
        resetForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetForm = () => {
    setFormData({ descricao: "" })
    setEditingCurso(null)
    setError(null)
    setIsOpen(false)
  }

  const handleEdit = (curso: CursoRow) => {
    setEditingCurso(curso)
    setFormData({ descricao: curso.descricao })
    setError(null)
    setIsOpen(true)
  }

  const handleDelete = (curso: CursoRow) => {
    startTransition(async () => {
      const result = await apagarCurso(curso.id)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar curso")
      }
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cursos</h1>
          <p className="text-muted-foreground">
            Gerir cursos
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => resetForm()}>
              <Plus className="h-4 w-4" />
              Novo Curso
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingCurso ? "Editar Curso" : "Novo Curso"}
              </DialogTitle>
              <DialogDescription>
                {editingCurso
                  ? "Atualize o nome do curso"
                  : "Preencha o nome para criar um novo curso"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="curso-descricao">Nome</Label>
                  <Input
                    id="curso-descricao"
                    value={formData.descricao}
                    onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                    placeholder="Ex: Informática"
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
                    : editingCurso
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
          <BookMarked className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl font-bold">{cursos.length}</p>
          <p className="text-sm text-muted-foreground">
            Cursos registados
          </p>
        </div>
      </div>

      <DataTable
        data={rows}
        columns={columns}
        searchKey="descricao"
        searchPlaceholder="Pesquisar cursos..."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}
