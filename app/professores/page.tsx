import { DashboardLayout } from "@/components/dashboard-layout"
import { ProfessoresContent } from "@/components/professores-content"
import { listarTodos, listarTurmas, listarDisciplinas } from "./professores-action"

export default async function ProfessoresPage() {
  const [professores, turmas, disciplinas] = await Promise.all([
    listarTodos(),
    listarTurmas(),
    listarDisciplinas(),
  ])

  return (
    <DashboardLayout>
      <ProfessoresContent
        professores={professores}
        turmas={turmas}
        disciplinas={disciplinas}
      />
    </DashboardLayout>
  )
}
