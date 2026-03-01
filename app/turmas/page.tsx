import { DashboardLayout } from "@/components/dashboard-layout"
import { TurmasContent } from "@/components/turmas-content"
import { listarTodasTurmas, listarClasses, listarCursos } from "./turma-action"
import {getProfessoresDisponibilidade} from "@/lib/actions/horarios"
import { getTemposLectivos } from "@/lib/actions/tempoLectivo"



export default async function TurmasPage() {
  
  const Profs = await getProfessoresDisponibilidade().then(console.log)
  console.log(Profs)

  const tempos = await getTemposLectivos()
  console.log(tempos)

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
