"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  CheckCircle2,
  XCircle,
  Clock,
  User,
  Calendar,
  MessageSquare,
  FileText,
  AlertCircle,
} from "lucide-react"

interface Requisicao {
  id: string
  professor: string
  tipo: "alteracao_horario" | "troca_sala" | "permuta"
  descricao: string
  detalhes: {
    turma?: string
    diaOriginal?: string
    tempoOriginal?: string
    diaDesejado?: string
    tempoDesejado?: string
    salaOriginal?: string
    salaDesejada?: string
    professorTroca?: string
  }
  status: "pendente" | "aprovado" | "rejeitado"
  dataCriacao: string
  dataAtualizacao?: string
  resposta?: string
}

const initialRequisicoes: Requisicao[] = []
const statusColors = {
  pendente: "bg-accent text-accent-foreground",
  aprovado: "bg-green-600 text-white",
  rejeitado: "bg-destructive text-destructive-foreground",
}

const statusIcons = {
  pendente: Clock,
  aprovado: CheckCircle2,
  rejeitado: XCircle,
}

const tipoLabels = {
  alteracao_horario: "Alteração de Horário",
  troca_sala: "Troca de Sala",
  permuta: "Permuta",
}

export function RequisicoesContent() {
  const [requisicoes, setRequisicoes] = useState<Requisicao[]>(initialRequisicoes)
  const [selectedRequisicao, setSelectedRequisicao] = useState<Requisicao | null>(null)
  const [actionType, setActionType] = useState<"aprovar" | "rejeitar" | null>(null)
  const [resposta, setResposta] = useState("")
  const [filter, setFilter] = useState("todas")

  const filteredRequisicoes = requisicoes.filter((r) => {
    if (filter === "todas") return true
    return r.status === filter
  })

  const pendentes = requisicoes.filter((r) => r.status === "pendente").length
  const aprovados = requisicoes.filter((r) => r.status === "aprovado").length
  const rejeitados = requisicoes.filter((r) => r.status === "rejeitado").length

  const handleAction = (requisicao: Requisicao, action: "aprovar" | "rejeitar") => {
    setSelectedRequisicao(requisicao)
    setActionType(action)
    setResposta("")
  }

  const confirmAction = () => {
    if (!selectedRequisicao || !actionType) return

    setRequisicoes((prev) =>
      prev.map((r) =>
        r.id === selectedRequisicao.id
          ? {
              ...r,
              status: actionType === "aprovar" ? "aprovado" : "rejeitado",
              dataAtualizacao: "Agora",
              resposta,
            }
          : r
      )
    )
    setSelectedRequisicao(null)
    setActionType(null)
    setResposta("")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Requisições</h1>
          <p className="text-muted-foreground">
            Gerir pedidos de alteração dos professores
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total
            </CardTitle>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{requisicoes.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pendentes
            </CardTitle>
            <Clock className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">{pendentes}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Aprovados
            </CardTitle>
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">{aprovados}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Rejeitados
            </CardTitle>
            <XCircle className="h-5 w-5 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-destructive">{rejeitados}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="todas">Todas</TabsTrigger>
          <TabsTrigger value="pendente">Pendentes</TabsTrigger>
          <TabsTrigger value="aprovado">Aprovadas</TabsTrigger>
          <TabsTrigger value="rejeitado">Rejeitadas</TabsTrigger>
        </TabsList>

        <TabsContent value={filter} className="mt-4">
          <div className="space-y-4">
            {filteredRequisicoes.length === 0 ? (
              <Card>
                <CardContent className="flex h-32 items-center justify-center">
                  <p className="text-muted-foreground">Nenhuma requisição encontrada</p>
                </CardContent>
              </Card>
            ) : (
              filteredRequisicoes.map((requisicao) => {
                const StatusIcon = statusIcons[requisicao.status]
                return (
                  <Card key={requisicao.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                              <User className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{requisicao.professor}</h3>
                                <Badge variant="outline">{tipoLabels[requisicao.tipo]}</Badge>
                                <Badge className={statusColors[requisicao.status]}>
                                  <StatusIcon className="mr-1 h-3 w-3" />
                                  {requisicao.status.charAt(0).toUpperCase() + requisicao.status.slice(1)}
                                </Badge>
                              </div>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {requisicao.dataCriacao}
                              </p>
                            </div>
                          </div>

                          <p className="text-sm">{requisicao.descricao}</p>

                          <div className="flex flex-wrap gap-4 rounded-lg bg-muted p-4 text-sm">
                            {requisicao.detalhes.turma && (
                              <div>
                                <span className="text-muted-foreground">Turma:</span>{" "}
                                <span className="font-medium">{requisicao.detalhes.turma}</span>
                              </div>
                            )}
                            {requisicao.detalhes.diaOriginal && (
                              <div>
                                <span className="text-muted-foreground">De:</span>{" "}
                                <span className="font-medium">
                                  {requisicao.detalhes.diaOriginal}, {requisicao.detalhes.tempoOriginal}
                                </span>
                              </div>
                            )}
                            {requisicao.detalhes.diaDesejado && (
                              <div>
                                <span className="text-muted-foreground">Para:</span>{" "}
                                <span className="font-medium">
                                  {requisicao.detalhes.diaDesejado}, {requisicao.detalhes.tempoDesejado}
                                </span>
                              </div>
                            )}
                            {requisicao.detalhes.salaOriginal && (
                              <div>
                                <span className="text-muted-foreground">Sala atual:</span>{" "}
                                <span className="font-medium">{requisicao.detalhes.salaOriginal}</span>
                              </div>
                            )}
                            {requisicao.detalhes.salaDesejada && (
                              <div>
                                <span className="text-muted-foreground">Sala desejada:</span>{" "}
                                <span className="font-medium">{requisicao.detalhes.salaDesejada}</span>
                              </div>
                            )}
                            {requisicao.detalhes.professorTroca && (
                              <div>
                                <span className="text-muted-foreground">Permuta com:</span>{" "}
                                <span className="font-medium">{requisicao.detalhes.professorTroca}</span>
                              </div>
                            )}
                          </div>

                          {requisicao.resposta && (
                            <div className="flex items-start gap-2 rounded-lg border border-border p-4">
                              <MessageSquare className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="text-sm font-medium">Resposta do Administrador</p>
                                <p className="text-sm text-muted-foreground">{requisicao.resposta}</p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                  {requisicao.dataAtualizacao}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {requisicao.status === "pendente" && (
                          <div className="flex flex-col gap-2">
                            <Button
                              size="sm"
                              className="gap-1"
                              onClick={() => handleAction(requisicao, "aprovar")}
                            >
                              <CheckCircle2 className="h-4 w-4" />
                              Aprovar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="gap-1 bg-transparent"
                              onClick={() => handleAction(requisicao, "rejeitar")}
                            >
                              <XCircle className="h-4 w-4" />
                              Rejeitar
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })
            )}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={!!selectedRequisicao} onOpenChange={() => setSelectedRequisicao(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === "aprovar" ? "Aprovar Requisição" : "Rejeitar Requisição"}
            </DialogTitle>
            <DialogDescription>
              {actionType === "aprovar"
                ? "Confirme a aprovação e adicione uma mensagem opcional"
                : "Indique o motivo da rejeição"}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">{selectedRequisicao?.professor}</p>
              <p className="text-sm text-muted-foreground">{selectedRequisicao?.descricao}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="resposta">
                Resposta {actionType === "rejeitar" && "(obrigatória)"}
              </Label>
              <Textarea
                id="resposta"
                placeholder={
                  actionType === "aprovar"
                    ? "Adicione informações adicionais..."
                    : "Explique o motivo da rejeição..."
                }
                value={resposta}
                onChange={(e) => setResposta(e.target.value)}
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedRequisicao(null)}>
              Cancelar
            </Button>
            <Button
              onClick={confirmAction}
              disabled={actionType === "rejeitar" && !resposta}
              className={actionType === "rejeitar" ? "bg-destructive hover:bg-destructive/90" : ""}
            >
              {actionType === "aprovar" ? "Confirmar Aprovação" : "Confirmar Rejeição"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
