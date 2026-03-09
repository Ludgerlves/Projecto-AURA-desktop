'use server'

import { prisma } from '@/lib/prisma'
import { listarTodos } from './professores/professores-action'
import { listarTodasTurmas } from './turmas/turma-action'
import { listarTodas } from './disciplinas/disciplinas-action'
import { salaService } from '@/lib/Service/Sala'
import { gerarHorarios } from '@/lib/actions/gerarHorario'


// * Obtém estatísticas do dashboard

export async function getDashboardStats() {
  await gerarHorarios
  const [professores, turmas, disciplinas, salas] = await Promise.all([
    listarTodos(),
    listarTodasTurmas(),
    listarTodas(),
    salaService.listarTodasSalas(),
  ])

  return {
    professores: professores.length,
    turmas: turmas.length,
    disciplinas: disciplinas.length,
    salas: salas.length,
  }
}


 //* Obtém o nome do dia da semana em português
 
function getDiaSemanaHoje(): string {
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const hoje = new Date().getDay()
  return dias[hoje]
}


// * Obtém as aulas de hoje (TempoLectivo do dia atual)
 
export async function getAulasHoje() {
  const diaHoje = getDiaSemanaHoje()

  // Buscar o dia da semana no banco
  const diaSemana = await prisma.diaSemana.findUnique({
    where: { nome: diaHoje },
  })

  if (!diaSemana) {
    return []
  }

  // Buscar TempoLectivo do dia de hoje com todas as relações
  const aulas = await prisma.tempoLectivo.findMany({
    where: {
      diaSemana: diaSemana.nome,
    },
    include: {
      Disciplina: true,
      Turma: true,
      Sala: true,
      Professor: true,
      Periodo: true,
      DiaSemana: true,
    },
    orderBy: [
      { ordem: 'asc' },
      { periodoId: 'asc' },
    ],
  })

  return aulas.map((aula) => ({
    id: aula.idTempoLectivo,
    time: aula.Periodo.periodo,
    subject: aula.Disciplina.nome,
    turma: aula.Turma.nome,
    room: aula.Sala.nome,
    professor: aula.Professor.nome,
    ordem: aula.ordem,
  }))
}
