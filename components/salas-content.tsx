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
import { Plus, DoorOpen } from "lucide-react"
import { useRouter } from "next/navigation"
import { criarSala, atualizarSala, apagarSala } from "@/app/salas/salas-action"

interface SalaData {
  id: number
  descricao: string
  capacidade: number
  tipo_sala: string
}

interface SalaRow extends SalaData {
}

interface SalasContentProps {
  salas: SalaData[]
}

export function SalasContent({ salas }: SalasContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const [editingSala, setEditingSala] = useState<SalaRow | null>(null)
  const [formData, setFormData] = useState({ descricao: "", capacidade: "", tipo_sala: "" })
  const [error, setError] = useState<string | null>(null)

  const rows: SalaRow[] = salas.map((s) => ({ ...s }))

  const columns = [
    { key: "descricao" as const, header: "Sala" },
    { key: "capacidade" as const, header: "Capacidade" },
    { key: "tipo_sala" as const, header: "Tipo" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const fd = new FormData()
    fd.append("descricao", formData.descricao)
    fd.append("capacidade", formData.capacidade)
    fd.append("tipo_sala", formData.tipo_sala)

    startTransition(async () => {
      const result = editingSala
        ? await atualizarSala(editingSala.id, fd)
        : await criarSala(fd)

      if (result.success) {
        resetForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetForm = () => {
    setFormData({ descricao: "", capacidade: "", tipo_sala: "" })
    setEditingSala(null)
    setError(null)
    setIsOpen(false)
  }

  const handleEdit = (sala: SalaRow) => {
    setEditingSala(sala)
    setFormData({
      descricao: sala.descricao,
      capacidade: String(sala.capacidade),
      tipo_sala: sala.tipo_sala,
    })
    setError(null)
    setIsOpen(true)
  }

  const handleDelete = (sala: SalaRow) => {
    startTransition(async () => {
      const result = await apagarSala(sala.id)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.message || "Erro ao apagar sala")
      }
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Salas</h1>
          <p className="text-muted-foreground">
            Gerir salas e espacos disponiveis
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => resetForm()}>
              <Plus className="h-4 w-4" />
              Nova Sala
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingSala ? "Editar Sala" : "Nova Sala"}
              </DialogTitle>
              <DialogDescription>
                {editingSala
                  ? "Atualize os dados da sala"
                  : "Preencha os dados para adicionar uma nova sala"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="descricao">Nome da Sala</Label>
                  <Input
                    id="descricao"
                    value={formData.descricao}
                    onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                    placeholder="Ex: Sala 101"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="capacidade">Capacidade</Label>
                    <Input
                      id="capacidade"
                      type="number"
                      value={formData.capacidade}
                      onChange={(e) => setFormData({ ...formData, capacidade: e.target.value })}
                      placeholder="Ex: 30"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tipo_sala">Tipo de Sala</Label>
                    <Input
                      id="tipo_sala"
                      value={formData.tipo_sala}
                      onChange={(e) => setFormData({ ...formData, tipo_sala: e.target.value })}
                      placeholder="Ex: Normal, Laboratório"
                      required
                    />
                  </div>
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={isPending}>
                  {editingSala ? "Guardar" : "Adicionar"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <DoorOpen className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl font-bold">{rows.length}</p>
          <p className="text-sm text-muted-foreground">
            Salas registadas
          </p>
        </div>
      </div>

      <DataTable
        data={rows}
        columns={columns}
        searchKey="descricao"
        searchPlaceholder="Pesquisar salas..."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}
