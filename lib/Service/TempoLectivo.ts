import { prisma } from "@/lib/prisma";
import { DiaSemana, Periodo, Prisma } from "../generated/prisma";

export class TempoLectivoCrud {
    async criarTempoLectivo(data: Prisma.Tempo_LectivoCreateInput) {
        return await prisma.tempo_Lectivo.create({ data });
    }

    async atualizarTempoLectivo(id: number, data: Prisma.Tempo_LectivoUpdateInput) {
        return await prisma.tempo_Lectivo.update({
            where: { id_tempoLectivo: id },
            data,
        });
    }

    async showTempoLectivo(id: number) {
        return await prisma.tempo_Lectivo.findUnique({
            where: { id_tempoLectivo: id },
            include: { 
                professor: true,
                disciplina: true,
                sala: true,
                turma: true 
            },
        });
    }

    async listarTodosTemposLectivos() {
        return await prisma.tempo_Lectivo.findMany({
            orderBy: [
                { nome_dia: "asc" },
                { nome_periodo: "asc" },
                { ordem: "asc" },
             ],
            include: { 
                professor: true,
                disciplina: true,
                sala: true,
                turma: true 
            },
        });
    }

    async listarTemposLectivosporDia(nome_dia: DiaSemana) {
        return await prisma.tempo_Lectivo.findMany({
            where: { nome_dia: nome_dia },
            include: { 
                professor: true,
                disciplina: true,
                sala: true,
                turma: true 
            },
            orderBy: [
                { nome_periodo: "asc" },
                { ordem: "asc" },
            ]
        });
    }

    async listarTemposLectivosporPeriodo(nome_periodo: Periodo) {
        return await prisma.tempo_Lectivo.findMany({
            where: { nome_periodo: nome_periodo },
            include: { 
                professor: true,
                disciplina: true,
                sala: true,
                turma: true 
            },
            orderBy: [
                { nome_dia: "asc" },
                { nome_periodo: "asc" },
                { ordem: "asc" },
            ]
        });
    }

    async listarTemposLectivosporTurma(nome_turma: string) {
        return await prisma.tempo_Lectivo.findMany({
            where: { nome_turma },
            include: { 
                professor: true,
                disciplina: true,
                sala: true,
                turma: true 
            },
            orderBy: [
                { nome_dia: "asc" },
                { nome_periodo: "asc" },
                { ordem: "asc" },
            ]
        });
    }

    async apagarTempoLectivo(id: number) {
        await prisma.tempo_Lectivo.delete({
            where: { id_tempoLectivo: id },
        });
        return { message: "Tempo Lectivo eliminado com sucesso" };
    }
}

export const tempoLectivoService = new TempoLectivoCrud()