import { DashboardLayout } from "@/components/dashboard-layout"
import { TurmasContent } from "@/components/turmas-content"
import { listarTodasTurmas, listarClasses, listarCursos } from "./turma-action"
import { listarTodasSalas } from "@/app/salas/sala-action"

export default async function TurmasPage() {
  const [turmas, classes, cursos, salas] = await Promise.all([
    listarTodasTurmas(),
    listarClasses(),
    listarCursos(),
    listarTodasSalas(),
  ])

  return (
    <DashboardLayout>
      <TurmasContent turmas={turmas} classes={classes} cursos={cursos} salas={salas} />
    </DashboardLayout>
  )
}
