import { DashboardLayout } from "@/components/dashboard-layout"
import { HorariosContent } from "@/components/horarios-content"
import { getTemposLectivos } from "@/lib/actions/tempoLectivo"

export default async function HorariosPage() {
  const tempos = await getTemposLectivos()

  return (
    <DashboardLayout>
      <HorariosContent tempos={tempos} />
    </DashboardLayout>
  )
}
