import { DashboardLayout } from "@/components/dashboard-layout"
import { TurmasContent } from "@/components/turmas-content"
import { listarTodasTurmas, listarClasses, listarCursos } from "./turma-action"
import {getProfessoresDisponibilidade} from "@/lib/actions/horarios"



export default async function TurmasPage() {
  
  const Profs = await getProfessoresDisponibilidade()
  console.log(Profs)

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
