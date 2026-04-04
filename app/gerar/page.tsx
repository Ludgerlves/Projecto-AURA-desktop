import { DashboardLayout } from "@/components/dashboard-layout"
import { GerarContent } from "@/components/gerar-content"
import { getTurmasParaGeracao } from "@/lib/actions/gerarHorario"

export default async function GerarPage() {
  const turmas = await getTurmasParaGeracao()

  return (
    <DashboardLayout>
      <GerarContent turmas={turmas} />
    </DashboardLayout>
  )
}
