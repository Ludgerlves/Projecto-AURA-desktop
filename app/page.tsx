import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardContent } from "@/components/dashboard-content"
import { getDashboardStats, getAulasHoje } from "./dashboard-action"
import { getProfessoresDisponibilidade } from "@/lib/actions/horarios"

export default async function DashboardPage() {
  const [stats, aulasHoje] = await Promise.all([
    getDashboardStats(),
    getAulasHoje(),
  ])

  const professoresDisponibilidade = await getProfessoresDisponibilidade()
  console.log(professoresDisponibilidade)

  return (
    <DashboardLayout>
      <DashboardContent stats={stats} aulasHoje={aulasHoje} />
    </DashboardLayout>
  )
}
