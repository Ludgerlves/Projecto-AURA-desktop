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
  id: number
  descricao: string
}

interface CursoData {
  id: number
  descricao: string
}

interface TurmaData {
  id: number
  nome: string
  classeId: number
  cursoId: number
}

interface TurmasContentProps {
  turmas: TurmaData[]
  classes: ClasseData[]
  cursos: CursoData[]
}

// ==================== Row types with id for DataTable ====================

interface TurmaRow extends TurmaData {
  classeNome: string
  cursoNome: string
}

interface ClasseRow extends ClasseData {
}

interface CursoRow extends CursoData {
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
  const [turmaForm, setTurmaForm] = useState({ nome: "", classeId: 0, cursoId: 0 })

  // --- Classe state ---
  const [classeOpen, setClasseOpen] = useState(false)
  const [editingClasse, setEditingClasse] = useState<ClasseRow | null>(null)
  const [classeForm, setClasseForm] = useState({ descricao: "" })

  // --- Curso state ---
  const [cursoOpen, setCursoOpen] = useState(false)
  const [editingCurso, setEditingCurso] = useState<CursoRow | null>(null)
  const [cursoForm, setCursoForm] = useState({ descricao: "" })

  // ==================== Mapped rows ====================

  const classeMap = new Map(classes.map((c) => [c.id, c.descricao]))
  const cursoMap = new Map(cursos.map((c) => [c.id, c.descricao]))

  const turmaRows: TurmaRow[] = turmas.map((t) => ({
    ...t,
    classeNome: classeMap.get(t.classeId) || "—",
    cursoNome: cursoMap.get(t.cursoId) || "—",
  }))

  const classeRows: ClasseRow[] = classes.map((c) => ({ ...c }))
  const cursoRows: CursoRow[] = cursos.map((c) => ({ ...c }))

  // ==================== Turma helpers ====================

  const gerarNomeTurma = (classeId: number, cursoId: number) => {
    const classeNome = classeMap.get(classeId) || ""
    const cursoNome = cursoMap.get(cursoId) || ""
    if (classeNome && cursoNome) return `${classeNome} - ${cursoNome}`
    if (classeNome) return classeNome
    if (cursoNome) return cursoNome
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
    fd.append("classeId", String(turmaForm.classeId))
    fd.append("cursoId", String(turmaForm.cursoId))

    startTransition(async () => {
      const result = editingTurma
        ? await atualizarTurma(editingTurma.id, fd)
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
    setTurmaForm({ nome: "", classeId: 0, cursoId: 0 })
    setEditingTurma(null)
    setError(null)
    setTurmaOpen(false)
  }

  const handleTurmaEdit = (turma: TurmaRow) => {
    setEditingTurma(turma)
    setTurmaForm({
      nome: turma.nome,
      classeId: turma.classeId,
      cursoId: turma.cursoId,
    })
    setError(null)
    setTurmaOpen(true)
  }

  const handleTurmaDelete = (turma: TurmaRow) => {
    startTransition(async () => {
      const result = await apagarTurma(turma.id)
      if (result.success) router.refresh()
      else setError(result.message || "Erro ao apagar turma")
    })
  }

  // ==================== Classe handlers ====================

  const classeColumns = [
    { key: "descricao" as const, header: "Nome" },
  ]

  const handleClasseSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const fd = new FormData()
    fd.append("descricao", classeForm.descricao)

    startTransition(async () => {
      const result = editingClasse
        ? await atualizarClasse(editingClasse.id, fd)
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
    setClasseForm({ descricao: "" })
    setEditingClasse(null)
    setError(null)
    setClasseOpen(false)
  }

  const handleClasseEdit = (classe: ClasseRow) => {
    setEditingClasse(classe)
    setClasseForm({ descricao: classe.descricao })
    setError(null)
    setClasseOpen(true)
  }

  const handleClasseDelete = (classe: ClasseRow) => {
    startTransition(async () => {
      const result = await apagarClasse(classe.id)
      if (result.success) router.refresh()
      else setError(result.message || "Erro ao apagar classe")
    })
  }

  // ==================== Curso handlers ====================

  const cursoColumns = [
    { key: "descricao" as const, header: "Nome" },
  ]

  const handleCursoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const fd = new FormData()
    fd.append("descricao", cursoForm.descricao)

    startTransition(async () => {
      const result = editingCurso
        ? await atualizarCurso(editingCurso.id, fd)
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
    setCursoForm({ descricao: "" })
    setEditingCurso(null)
    setError(null)
    setCursoOpen(false)
  }

  const handleCursoEdit = (curso: CursoRow) => {
    setEditingCurso(curso)
    setCursoForm({ descricao: curso.descricao })
    setError(null)
    setCursoOpen(true)
  }

  const handleCursoDelete = (curso: CursoRow) => {
    startTransition(async () => {
      const result = await apagarCurso(curso.id)
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
                                key={c.id}
                                className={`flex items-center gap-3 cursor-pointer p-2 rounded-md transition-colors ${
                                  turmaForm.classeId === c.id
                                    ? "bg-primary/10 border border-primary/20"
                                    : "hover:bg-muted/50"
                                }`}
                              >
                                <Checkbox
                                  checked={turmaForm.classeId === c.id}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      const newForm = { ...turmaForm, classeId: c.id }
                                      newForm.nome = gerarNomeTurma(newForm.classeId, turmaForm.cursoId)
                                      setTurmaForm(newForm)
                                    }
                                  }}
                                />
                                <span className="text-sm font-medium flex-1">{c.descricao}</span>
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
                                key={c.id}
                                className={`flex items-center gap-3 cursor-pointer p-2 rounded-md transition-colors ${
                                  turmaForm.cursoId === c.id
                                    ? "bg-primary/10 border border-primary/20"
                                    : "hover:bg-muted/50"
                                }`}
                              >
                                <Checkbox
                                  checked={turmaForm.cursoId === c.id}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      const newForm = { ...turmaForm, cursoId: c.id }
                                      newForm.nome = gerarNomeTurma(turmaForm.classeId, newForm.cursoId)
                                      setTurmaForm(newForm)
                                    }
                                  }}
                                />
                                <span className="text-sm font-medium flex-1">{c.descricao}</span>
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
                    {(!turmaForm.classeId || !turmaForm.cursoId) && (
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
                      <Label htmlFor="classe-descricao">Nome</Label>
                      <Input
                        id="classe-descricao"
                        value={classeForm.descricao}
                        onChange={(e) => setClasseForm({ descricao: e.target.value })}
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
            searchKey="descricao"
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
                      <Label htmlFor="curso-descricao">Nome</Label>
                      <Input
                        id="curso-descricao"
                        value={cursoForm.descricao}
                        onChange={(e) => setCursoForm({ descricao: e.target.value })}
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
            searchKey="descricao"
            searchPlaceholder="Pesquisar cursos..."
            onEdit={handleCursoEdit}
            onDelete={handleCursoDelete}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
