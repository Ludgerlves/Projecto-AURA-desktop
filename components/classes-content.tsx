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
import { Plus, Layers } from "lucide-react"
import { criarClasse, atualizarClasse, apagarClasse } from "@/app/classes/classe-action"
import { useRouter } from "next/navigation"

interface ClasseData {
  idClasse: number
  nome: string
}

interface ClasseRow extends ClasseData {
  id: number
}

interface ClassesContentProps {
  classes: ClasseData[]
}

export function ClassesContent({ classes }: ClassesContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const [editingClasse, setEditingClasse] = useState<ClasseRow | null>(null)
  const [formData, setFormData] = useState({ nome: "" })
  const [error, setError] = useState<string | null>(null)

  const rows: ClasseRow[] = classes.map((c) => ({
    ...c,
    id: c.idClasse,
  }))

  const columns = [
    { key: "idClasse" as const, header: "ID" },
    { key: "nome" as const, header: "Nome" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const fd = new FormData()
    fd.append("nome", formData.nome)

    startTransition(async () => {
      const result = editingClasse
        ? await atualizarClasse(editingClasse.idClasse, fd)
        : await criarClasse(fd)
      if (result.success) {
        resetForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetForm = () => {
    setFormData({ nome: "" })
    setEditingClasse(null)
    setError(null)
    setIsOpen(false)
  }

  const handleEdit = (classe: ClasseRow) => {
    setEditingClasse(classe)
    setFormData({ nome: classe.nome })
    setError(null)
    setIsOpen(true)
  }

  const handleDelete = (classe: ClasseRow) => {
    startTransition(async () => {
      const result = await apagarClasse(classe.idClasse)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar classe")
      }
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Classes</h1>
          <p className="text-muted-foreground">
            Gerir classes
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => resetForm()}>
              <Plus className="h-4 w-4" />
              Nova Classe
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingClasse ? "Editar Classe" : "Nova Classe"}
              </DialogTitle>
              <DialogDescription>
                {editingClasse
                  ? "Atualize o nome da classe"
                  : "Preencha o nome para criar uma nova classe"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="classe-nome">Nome</Label>
                  <Input
                    id="classe-nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Ex: 10ª Classe"
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
                    : editingClasse
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
          <Layers className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl font-bold">{classes.length}</p>
          <p className="text-sm text-muted-foreground">
            Classes registadas
          </p>
        </div>
      </div>

      <DataTable
        data={rows}
        columns={columns}
        searchKey="nome"
        searchPlaceholder="Pesquisar classes..."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}
