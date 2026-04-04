import { DashboardLayout } from "@/components/dashboard-layout"
import { SalasContent } from "@/components/salas-content"
import { listarSalas } from "./salas-action"

export default async function SalasPage() {
  const salas = await listarSalas()
  return (
    <DashboardLayout>
      <SalasContent salas={salas} />
    </DashboardLayout>
  )
}
