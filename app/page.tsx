import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardContent } from "@/components/dashboard-content"
import { getDashboardStats, getAulasHoje } from "./dashboard-action"

export default async function DashboardPage() {
  const [stats, aulasHoje] = await Promise.all([
    getDashboardStats(),
    getAulasHoje(),
  ])

  return (
    <DashboardLayout>
      <DashboardContent stats={stats} aulasHoje={aulasHoje} />
    </DashboardLayout>
  )
}
