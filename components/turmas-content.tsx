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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTable } from "@/components/data-table"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, GraduationCap, Layers, BookMarked, ArrowRight } from "lucide-react"
import {
  criarTurma, atualizarTurma, apagarTurma,
  criarClasse, atualizarClasse, apagarClasse,
  criarCurso, atualizarCurso, apagarCurso,
} from "@/app/turmas/turma-action"
import { useRouter } from "next/navigation"

// ==================== Types ====================

interface ClasseData {
  nome: string
}

interface CursoData {
  nome: string
}

interface TurmaData {
  idTurma: number
  nome: string
  classe: string
  curso: string
}

interface TurmasContentProps {
  turmas: TurmaData[]
  classes: ClasseData[]
  cursos: CursoData[]
}

// ==================== Row types with id for DataTable ====================

interface TurmaRow extends TurmaData {
  id: number
  classeNome: string
  cursoNome: string
}

interface ClasseRow extends ClasseData {
  id: string
}

interface CursoRow extends CursoData {
  id: string
}

// ==================== Component ====================

export function TurmasContent({ turmas, classes, cursos }: TurmasContentProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("turmas")

  // --- Turma state ---
  const [turmaOpen, setTurmaOpen] = useState(false)
  const [editingTurma, setEditingTurma] = useState<TurmaRow | null>(null)
  const [turmaForm, setTurmaForm] = useState({ nome: "", classe: "", curso: "" })

  // --- Classe state ---
  const [classeOpen, setClasseOpen] = useState(false)
  const [editingClasse, setEditingClasse] = useState<ClasseRow | null>(null)
  const [classeForm, setClasseForm] = useState({ nome: "" })

  // --- Curso state ---
  const [cursoOpen, setCursoOpen] = useState(false)
  const [editingCurso, setEditingCurso] = useState<CursoRow | null>(null)
  const [cursoForm, setCursoForm] = useState({ nome: "" })

  // ==================== Mapped rows ====================

  const classeMap = new Map(classes.map((c) => [c.nome, c.nome]))
  const cursoMap = new Map(cursos.map((c) => [c.nome, c.nome]))

  const turmaRows: TurmaRow[] = turmas.map((t) => ({
    ...t,
    id: t.idTurma,
    classeNome: classeMap.get(t.classe) || "—",
    cursoNome: cursoMap.get(t.curso) || "—",
  }))

  const classeRows: ClasseRow[] = classes.map((c) => ({ ...c, id: c.nome }))
  const cursoRows: CursoRow[] = cursos.map((c) => ({ ...c, id: c.nome }))

  // ==================== Turma helpers ====================

  const gerarNomeTurma = (classe: string, curso: string) => {
    if (classe && curso) return `${classe} - ${curso}`
    if (classe) return classe
    if (curso) return curso
    return ""
  }

  const turmaColumns = [
    { key: "nome" as const, header: "Turma" },
    { key: "classeNome" as const, header: "Classe" },
    { key: "cursoNome" as const, header: "Curso" },
  ]

  const handleTurmaSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const fd = new FormData()
    fd.append("nome", turmaForm.nome)
    fd.append("classe", turmaForm.classe)
    fd.append("curso", turmaForm.curso)

    startTransition(async () => {
      const result = editingTurma
        ? await atualizarTurma(editingTurma.idTurma, fd)
        : await criarTurma(fd)
      if (result.success) {
        resetTurmaForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetTurmaForm = () => {
    setTurmaForm({ nome: "", classe: "", curso: "" })
    setEditingTurma(null)
    setError(null)
    setTurmaOpen(false)
  }

  const handleTurmaEdit = (turma: TurmaRow) => {
    setEditingTurma(turma)
    setTurmaForm({
      nome: turma.nome,
      classe: String(turma.classe),
      curso: String(turma.curso),
    })
    setError(null)
    setTurmaOpen(true)
  }

  const handleTurmaDelete = (turma: TurmaRow) => {
    startTransition(async () => {
      const result = await apagarTurma(turma.idTurma)
      if (result.success) router.refresh()
      else setError(result.message || "Erro ao apagar turma")
    })
  }

  // ==================== Classe handlers ====================

  const classeColumns = [
    { key: "nome" as const, header: "Nome" },
  ]

  const handleClasseSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const fd = new FormData()
    fd.append("nome", classeForm.nome)

    startTransition(async () => {
      const result = editingClasse
        ? await atualizarClasse(editingClasse.nome, fd)
        : await criarClasse(fd)
      if (result.success) {
        resetClasseForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetClasseForm = () => {
    setClasseForm({ nome: "" })
    setEditingClasse(null)
    setError(null)
    setClasseOpen(false)
  }

  const handleClasseEdit = (classe: ClasseRow) => {
    setEditingClasse(classe)
    setClasseForm({ nome: classe.nome })
    setError(null)
    setClasseOpen(true)
  }

  const handleClasseDelete = (classe: ClasseRow) => {
    startTransition(async () => {
      const result = await apagarClasse(classe.nome)
      if (result.success) router.refresh()
      else setError(result.message || "Erro ao apagar classe")
    })
  }

  // ==================== Curso handlers ====================

  const cursoColumns = [
    { key: "nome" as const, header: "Nome" },
  ]

  const handleCursoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const fd = new FormData()
    fd.append("nome", cursoForm.nome)

    startTransition(async () => {
      const result = editingCurso
        ? await atualizarCurso(editingCurso.nome, fd)
        : await criarCurso(fd)
      if (result.success) {
        resetCursoForm()
        router.refresh()
      } else {
        setError(result.message || "Erro inesperado")
      }
    })
  }

  const resetCursoForm = () => {
    setCursoForm({ nome: "" })
    setEditingCurso(null)
    setError(null)
    setCursoOpen(false)
  }

  const handleCursoEdit = (curso: CursoRow) => {
    setEditingCurso(curso)
    setCursoForm({ nome: curso.nome })
    setError(null)
    setCursoOpen(true)
  }

  const handleCursoDelete = (curso: CursoRow) => {
    startTransition(async () => {
      const result = await apagarCurso(curso.nome)
      if (result.success) router.refresh()
      else setError(result.message || "Erro ao apagar curso")
    })
  }

  // ==================== Render ====================

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Turmas</h1>
        <p className="text-muted-foreground">
          Gerir turmas, classes e cursos do sistema
        </p>
      </div>

      {/* Stats Cards - Botões clicáveis */}
      <div className="grid gap-4 md:grid-cols-3">
        <button
          onClick={() => setActiveTab("turmas")}
          className="text-left transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Card className="cursor-pointer transition-all hover:border-primary hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Turmas</p>
                  <p className="text-2xl font-bold">{turmaRows.length}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
                <span>Ver turmas</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </CardContent>
          </Card>
        </button>
        <button
          onClick={() => setActiveTab("classes")}
          className="text-left transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Card className="cursor-pointer transition-all hover:border-blue-500 hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Classes</p>
                  <p className="text-2xl font-bold">{classeRows.length}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                  <Layers className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
                <span>Ver classes</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </CardContent>
          </Card>
        </button>
        <button
          onClick={() => setActiveTab("cursos")}
          className="text-left transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Card className="cursor-pointer transition-all hover:border-green-500 hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Cursos</p>
                  <p className="text-2xl font-bold">{cursoRows.length}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                  <BookMarked className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
                <span>Ver cursos</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </CardContent>
          </Card>
        </button>
      </div>

      {error && (
        <p className="text-sm text-destructive bg-destructive/10 rounded-md p-3">{error}</p>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">

        {/* ==================== Tab Turmas ==================== */}
        <TabsContent value="turmas" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Lista de Turmas</h2>
              <p className="text-sm text-muted-foreground">
                {turmaRows.length === 0 
                  ? "Nenhuma turma criada ainda" 
                  : `${turmaRows.length} turma${turmaRows.length !== 1 ? 's' : ''} registada${turmaRows.length !== 1 ? 's' : ''}`}
              </p>
            </div>
            <Dialog open={turmaOpen} onOpenChange={setTurmaOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2" onClick={() => resetTurmaForm()}>
                  <Plus className="h-4 w-4" />
                  Nova Turma
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingTurma ? "Editar Turma" : "Nova Turma"}
                  </DialogTitle>
                  <DialogDescription>
                    {editingTurma
                      ? "Atualize os dados da turma"
                      : "Preencha os dados para criar uma nova turma"}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleTurmaSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2">
                          Classe
                          <span className="text-xs text-muted-foreground font-normal">(obrigatório)</span>
                        </Label>
                        <div className="flex flex-col gap-2 rounded-md border-2 border-border bg-muted/30 p-4 max-h-48 overflow-y-auto">
                          {classes.length === 0 ? (
                            <div className="text-center py-4">
                              <p className="text-sm text-muted-foreground mb-2">Nenhuma classe criada</p>
                              <p className="text-xs text-muted-foreground">
                                Crie uma classe na aba "Classes" primeiro
                              </p>
                            </div>
                          ) : (
                            classes.map((c) => (
                              <label
                                key={c.nome}
                                className={`flex items-center gap-3 cursor-pointer p-2 rounded-md transition-colors ${
                                  turmaForm.classe === c.nome
                                    ? "bg-primary/10 border border-primary/20"
                                    : "hover:bg-muted/50"
                                }`}
                              >
                                <Checkbox
                                  checked={turmaForm.classe === c.nome}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      const newForm = { ...turmaForm, classe: c.nome }
                                      newForm.nome = gerarNomeTurma(newForm.classe, turmaForm.curso)
                                      setTurmaForm(newForm)
                                    }
                                  }}
                                />
                                <span className="text-sm font-medium flex-1">{c.nome}</span>
                              </label>
                            ))
                          )}
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2">
                          Curso
                          <span className="text-xs text-muted-foreground font-normal">(obrigatório)</span>
                        </Label>
                        <div className="flex flex-col gap-2 rounded-md border-2 border-border bg-muted/30 p-4 max-h-48 overflow-y-auto">
                          {cursos.length === 0 ? (
                            <div className="text-center py-4">
                              <p className="text-sm text-muted-foreground mb-2">Nenhum curso criado</p>
                              <p className="text-xs text-muted-foreground">
                                Crie um curso na aba "Cursos" primeiro
                              </p>
                            </div>
                          ) : (
                            cursos.map((c) => (
                              <label
                                key={c.nome}
                                className={`flex items-center gap-3 cursor-pointer p-2 rounded-md transition-colors ${
                                  turmaForm.curso === c.nome
                                    ? "bg-primary/10 border border-primary/20"
                                    : "hover:bg-muted/50"
                                }`}
                              >
                                <Checkbox
                                  checked={turmaForm.curso === c.nome}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      const newForm = { ...turmaForm, curso: c.nome }
                                      newForm.nome = gerarNomeTurma(turmaForm.classe, newForm.curso)
                                      setTurmaForm(newForm)
                                    }
                                  }}
                                />
                                <span className="text-sm font-medium flex-1">{c.nome}</span>
                              </label>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                    {turmaForm.nome && (
                      <div className="rounded-md border-2 border-primary/20 bg-primary/5 p-4">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Nome gerado automaticamente:</p>
                        <p className="text-lg font-semibold text-primary">{turmaForm.nome}</p>
                      </div>
                    )}
                    {(!turmaForm.classe || !turmaForm.curso) && (
                      <div className="rounded-md border border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900 p-3">
                        <p className="text-xs text-amber-700 dark:text-amber-300">
                          ⚠️ Selecione uma classe e um curso para gerar o nome da turma
                        </p>
                      </div>
                    )}
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={resetTurmaForm}>
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={isPending}>
                      {isPending ? "A guardar..." : editingTurma ? "Guardar" : "Criar"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <DataTable
            data={turmaRows}
            columns={turmaColumns}
            searchKey="nome"
            searchPlaceholder="Pesquisar turmas..."
            onEdit={handleTurmaEdit}
            onDelete={handleTurmaDelete}
          />
        </TabsContent>

        {/* ==================== Tab Classes ==================== */}
        <TabsContent value="classes" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Lista de Classes</h2>
              <p className="text-sm text-muted-foreground">
                {classeRows.length === 0 
                  ? "Nenhuma classe criada ainda" 
                  : `${classeRows.length} classe${classeRows.length !== 1 ? 's' : ''} registada${classeRows.length !== 1 ? 's' : ''}`}
              </p>
            </div>
            <Dialog open={classeOpen} onOpenChange={setClasseOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2" onClick={() => resetClasseForm()}>
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
                <form onSubmit={handleClasseSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="classe-nome">Nome</Label>
                      <Input
                        id="classe-nome"
                        value={classeForm.nome}
                        onChange={(e) => setClasseForm({ nome: e.target.value })}
                        placeholder="Ex: 10ª Classe"
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={resetClasseForm}>
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={isPending}>
                      {isPending ? "A guardar..." : editingClasse ? "Guardar" : "Criar"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <DataTable
            data={classeRows}
            columns={classeColumns}
            searchKey="nome"
            searchPlaceholder="Pesquisar classes..."
            onEdit={handleClasseEdit}
            onDelete={handleClasseDelete}
          />
        </TabsContent>

        {/* ==================== Tab Cursos ==================== */}
        <TabsContent value="cursos" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Lista de Cursos</h2>
              <p className="text-sm text-muted-foreground">
                {cursoRows.length === 0 
                  ? "Nenhum curso criado ainda" 
                  : `${cursoRows.length} curso${cursoRows.length !== 1 ? 's' : ''} registado${cursoRows.length !== 1 ? 's' : ''}`}
              </p>
            </div>
            <Dialog open={cursoOpen} onOpenChange={setCursoOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2" onClick={() => resetCursoForm()}>
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
                <form onSubmit={handleCursoSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="curso-nome">Nome</Label>
                      <Input
                        id="curso-nome"
                        value={cursoForm.nome}
                        onChange={(e) => setCursoForm({ nome: e.target.value })}
                        placeholder="Ex: Ciências"
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={resetCursoForm}>
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={isPending}>
                      {isPending ? "A guardar..." : editingCurso ? "Guardar" : "Criar"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <DataTable
            data={cursoRows}
            columns={cursoColumns}
            searchKey="nome"
            searchPlaceholder="Pesquisar cursos..."
            onEdit={handleCursoEdit}
            onDelete={handleCursoDelete}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
