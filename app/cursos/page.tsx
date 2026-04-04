import { DashboardLayout } from "@/components/dashboard-layout"
import { CursosContent } from "@/components/cursos-content"
import { listarCursos } from "@/app/turmas/turma-action"

export default async function CursosPage() {
  const cursos = await listarCursos()

  return (
    <DashboardLayout>
      <CursosContent cursos={cursos} />
    </DashboardLayout>
  )
}
