import { DashboardLayout } from "@/components/dashboard-layout"
import { DisciplinasContent } from "@/components/disciplinas-content"
import { listarTodas, listarTurmas } from "./disciplinas-action"

export default async function DisciplinasPage() {
  const [disciplinas, turmas] = await Promise.all([
    listarTodas(),
    listarTurmas(),
  ])

  return (
    <DashboardLayout>
      <DisciplinasContent disciplinas={disciplinas} turmas={turmas} />
    </DashboardLayout>
  )
}
