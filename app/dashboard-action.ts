'use server'

import { prisma } from '@/lib/prisma'
import { listarTodos }        from './professores/professores-action'
import { listarTodasTurmas }  from './turmas/turma-action'
import { listarTodas }        from './disciplinas/disciplinas-action'
import { salaService }        from '@/lib/Service/Sala'

export async function getDashboardStats() {
    const [professores, turmas, disciplinas, salas] = await Promise.all([
        listarTodos(),
        listarTodasTurmas(),
        listarTodas(),
        salaService.listarTodas(),
    ])

    return {
        professores: professores.length,
        turmas:      turmas.length,
        disciplinas: disciplinas.length,
        salas:       salas.length,
    }
}

function getDiaSemanaHoje(): string {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return dias[new Date().getDay()]
}

export async function getAulasHoje() {
    const descricao_dia = getDiaSemanaHoje()

    const diaSemana = await prisma.diaSemana.findUnique({
        where: { descricao_dia },
    })

    if (!diaSemana) return []

    const aulas = await prisma.tempo_Lectivo.findMany({
        where: { id_dia: diaSemana.id_dia },
        include: {
            disciplina: true,
            turma:      true,
            sala:       true,
            professor:  true,
            periodo:    true,
            dia:        true,
        },
        orderBy: [
            { id_periodo: 'asc' },
            { ordem:      'asc' },
        ],
    })

    return aulas.map((aula) => ({
        id:        aula.id_tempoLectivo,
        periodo:   aula.periodo.descricao_periodo,
        disciplina: aula.disciplina.descricao_disciplina,
        turma:     aula.turma.descricao_turma,
        sala:      aula.sala.descricao_sala,
        professor: aula.professor.nome_professor,
        ordem:     aula.ordem,
    }))
}