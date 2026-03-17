'use server'
import { tempoLectivoService } from "@/lib/Service/TempoLectivo"

export async function listarAulasPorTurma(nome_turma: string) {
  return tempoLectivoService.listarTemposLectivosporTurma(nome_turma)
}