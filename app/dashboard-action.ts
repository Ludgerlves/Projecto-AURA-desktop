'use server'

import { prisma } from '@/lib/prisma'
import { listarTodos } from './professores/professores-action'
import { listarTodasTurmas } from './turmas/turma-action'
import { listarTodas } from './disciplinas/disciplinas-action'
import { salaService } from '@/lib/Service/Sala'


// * Obtém estatísticas do dashboard

export async function getDashboardStats() {
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



function getDiaSemanaHoje(): string {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const hoje = new Date().getDay()
    return dias[hoje]
}


// * Obtém as aulas de hoje (TempoLectivo do dia)

export async function getAulasHoje() {
    const diaHoje = getDiaSemanaHoje()

    const diaSemana = await prisma.diaSemana.findFirst({
        where: { descricao_dia: diaHoje },
    })

    if (!diaSemana) {
        return []
    }

    const aulas = await prisma.tempo_Lectivo.findMany({
        where: {
            id_dia: diaSemana.id_dia,
        },
        include: {
            disciplina: true,
            turma: true,
            sala: true,
            professor: true,
            periodo: true,
            dia: true,
        },
        orderBy: [
            { ordem: 'asc' },
            { id_periodo: 'asc' },
        ],
    })

    return aulas.map((aula) => ({
        id: aula.id_tempoLectivo,
        time: aula.periodo.descricao_periodo,
        subject: aula.disciplina.descricao_disciplina,
        turma: aula.turma.descricao_turma,
        room: aula.sala.descricao_sala,
        professor: aula.professor.nome_professor,
        ordem: aula.ordem,
    }))
}
