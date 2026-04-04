import { DashboardLayout } from "@/components/dashboard-layout"
import { TurmasContent } from "@/components/turmas-content"
import { listarTodasTurmas, listarClasses, listarCursos } from "./turma-action"




export default async function TurmasPage() {

  const [turmas, classes, cursos] = await Promise.all([
    listarTodasTurmas(),
    listarClasses(),
    listarCursos(),
  ])

  return (
    <DashboardLayout>
      <TurmasContent turmas={turmas} classes={classes} cursos={cursos} />
    </DashboardLayout>
  )
}
