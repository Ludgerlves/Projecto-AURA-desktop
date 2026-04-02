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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DataTable } from "@/components/data-table"
import { Plus, DoorOpen } from "lucide-react"

import { criarSala, atualizarSala, apagarSala } from "@/app/salas/salas-action"
import { useRouter } from "next/navigation"

interface SalaData {
  id_sala: number
  descricao_sala: string
  capacidade: number
  tipo_sala: string
}

interface SalasContentProps {
  salas: SalaData[]
}

const tipoColors: Record<string, string> = {
  normal: "bg-blue-600 text-white",
  "Laboratório de Informática": "bg-indigo-600 text-white",
  Campo: "bg-green-600 text-white",
}

export function SalasContent({ salas }: SalasContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  
  const [isOpen, setIsOpen] = useState(false)
  const [editingSala, setEditingSala] = useState<SalaData | null>(null)
  
  const [formData, setFormData] = useState({
    nome: "",
    capacidade: "",
    tipo: "normal",
  })

  // Format array for DataTable
  const dataTableRows = salas.map(s => ({
    ...s,
    id: s.id_sala
  }))

  const columns = [
    { key: "descricao_sala" as const, header: "Sala" },
    {
      key: "capacidade" as const,
      header: "Capacidade",
      render: (sala: any) => `${sala.capacidade} lugares`,
    },
    {
      key: "tipo_sala",
      header: "Tipo",
      render: (sala: any) => (
        <Badge className={tipoColors[sala.tipo_sala] || "bg-gray-600 text-white"}>
          {sala.tipo_sala}
        </Badge>
      ),
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const fd = new FormData()
    fd.append("descricao_sala", formData.nome)
    fd.append("capacidade", formData.capacidade)
    fd.append("tipo_sala", formData.tipo)

    startTransition(async () => {
      let result;
      if (editingSala) {
        result = await atualizarSala(editingSala.id_sala, fd)
      } else {
        result = await criarSala(fd)
      }

      if (result.success) {
        resetForm()
        router.refresh()
      } else {
        alert(result.message)
      }
    })
  }

  const resetForm = () => {
    setFormData({ nome: "", capacidade: "", tipo: "normal" })
    setEditingSala(null)
    setIsOpen(false)
  }

  const handleEdit = (sala: any) => {
    setEditingSala(sala)
    setFormData({
      nome: sala.descricao_sala,
      capacidade: String(sala.capacidade),
      tipo: sala.tipo_sala,
    })
    setIsOpen(true)
  }

  const handleDelete = (sala: any) => {
    if (!confirm(`Tem certeza que deseja apagar a sala "${sala.descricao_sala}"?`)) return;

    startTransition(async () => {
      const result = await apagarSala(sala.id_sala)
      if (result.success) {
        router.refresh()
      } else {
        alert(result.message)
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
                  <Label htmlFor="nome">Nome da Sala</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
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
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tipo">Tipo</Label>
                    <Select
                      value={formData.tipo}
                      onValueChange={(value) => setFormData({ ...formData, tipo: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="Laboratório de Informática">Laboratório de Informática</SelectItem>
                        <SelectItem value="Campo">Campo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={resetForm} disabled={isPending}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "A processar..." : editingSala ? "Guardar" : "Adicionar"}
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
          <p className="text-2xl font-bold">{salas.length}</p>
          <p className="text-sm text-muted-foreground">
            Salas registadas
          </p>
        </div>
      </div>

      <DataTable
        data={dataTableRows}
        columns={columns}
        searchKey="descricao_sala"
        searchPlaceholder="Pesquisar salas..."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}
