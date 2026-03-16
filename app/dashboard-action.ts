'use server'

import { prisma } from '@/lib/prisma'
import { listarTodos } from './professores/professores-action'
import { listarTodasTurmas } from './turmas/turma-action'
import { listarTodas } from './disciplinas/disciplinas-action'
import { salaService } from '@/lib/Service/Sala'
import { gerarTemposLectivos } from '@/lib/actions/horarios'


// * Obtém estatísticas do dashboard

export async function getDashboardStats() {
    const retorno = await prisma.tempoLectivo.findMany();
    console.log()
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
    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const hoje = new Date().getDay()
    return dias[hoje]
}


// * Obtém as aulas de hoje (TempoLectivo do di

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
