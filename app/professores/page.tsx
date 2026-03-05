import { DashboardLayout } from "@/components/dashboard-layout"
import { ProfessoresContent } from "@/components/professores-content"
import { listarTodos, listarTurmas } from "./professores-action"
export default async function ProfessoresPage() {
  const [professores, turmas] = await Promise.all([
    listarTodos(),
    listarTurmas(),
  ])

  return (
    <DashboardLayout>
      <ProfessoresContent
        professores={professores}
        turmas={turmas}
      />
    </DashboardLayout>
  )
}
