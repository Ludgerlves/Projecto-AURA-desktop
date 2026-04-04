'use server'
import { tempoLectivoService } from "@/lib/Service/TempoLectivo"

export async function listarAulasPorTurma(descricao_turma: string) {
  return tempoLectivoService.listarPorTurma(descricao_turma)
}

export async function listarAulasPorProfessor(nome_professor: string) {
  return tempoLectivoService.listarPorProfessor(nome_professor)
}