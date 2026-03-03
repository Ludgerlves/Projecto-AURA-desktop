import { DashboardLayout } from "@/components/dashboard-layout"
import { ProfessoresContent } from "@/components/professores-content"
import { listarTodos, listarDisciplinas, listarTurmas } from "./professores-action"
export default async function ProfessoresPage() {
  const [professores, disciplinas, turmas] = await Promise.all([
    listarTodos(),
    listarDisciplinas(),
    listarTurmas(),
  ])

  return (
    <DashboardLayout>
      <ProfessoresContent
        professores={professores}
        disciplinas={disciplinas}
        turmas={turmas}
      />
    </DashboardLayout>
  )
}
