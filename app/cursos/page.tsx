import { DashboardLayout } from "@/components/dashboard-layout"
import { CursosContent } from "@/components/cursos-content"
import { listarCursos } from "@/app/curso/curso"

export default async function CursosPage() {
  const cursos = await listarCursos()

  return (
    <DashboardLayout>
      <CursosContent cursos={cursos} />
    </DashboardLayout>
  )
}
