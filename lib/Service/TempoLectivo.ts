import { prisma } from "@/lib/prisma";
import { Prisma } from "../generated/prisma";

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
                professor:  true,
                disciplina: true,
                sala:       true,
                turma:      true,
                dia:        true,
                periodo:    true,
            },
        });
    }

    async listarTodos() {
        return await prisma.tempo_Lectivo.findMany({
            orderBy: [
                { id_dia:    "asc" },
                { id_periodo: "asc" },
                { ordem:     "asc" },
            ],
            include: {
                professor:  true,
                disciplina: true,
                sala:       true,
                turma:      true,
                dia:        true,
                periodo:    true,
            },
        });
    }

    async listarPorTurma(descricao_turma: string) {
        const turma = await prisma.turma.findFirst({ where: { descricao_turma } });
        if (!turma) return [];
        return await prisma.tempo_Lectivo.findMany({
            where: { id_turma: turma.id_turma },
            include: {
                professor:  true,
                disciplina: true,
                sala:       true,
                turma:      true,
                dia:        true,
                periodo:    true,
            },
            orderBy: [
                { id_dia:    "asc" },
                { id_periodo: "asc" },
                { ordem:     "asc" },
            ],
        });
    }

    async listarPorProfessor(nome_professor: string) {
        const professor = await prisma.professor.findFirst({ where: { nome_professor } });
        if (!professor) return [];
        return await prisma.tempo_Lectivo.findMany({
            where: { id_professor: professor.id_professor },
            include: {
                professor:  true,
                disciplina: true,
                sala:       true,
                turma:      true,
                dia:        true,
                periodo:    true,
            },
            orderBy: [
                { id_dia:    "asc" },
                { id_periodo: "asc" },
                { ordem:     "asc" },
            ],
        });
    }

    async listarPorDia(id_dia: number) {
        return await prisma.tempo_Lectivo.findMany({
            where: { id_dia },
            include: {
                professor:  true,
                disciplina: true,
                sala:       true,
                turma:      true,
                dia:        true,
                periodo:    true,
            },
            orderBy: [
                { id_periodo: "asc" },
                { ordem:      "asc" },
            ],
        });
    }

    async listarPorPeriodo(id_periodo: number) {
        return await prisma.tempo_Lectivo.findMany({
            where: { id_periodo },
            include: {
                professor:  true,
                disciplina: true,
                sala:       true,
                turma:      true,
                dia:        true,
                periodo:    true,
            },
            orderBy: [
                { id_dia:  "asc" },
                { ordem:   "asc" },
            ],
        });
    }

    async apagarTempoLectivo(id: number) {
        await prisma.tempo_Lectivo.delete({
            where: { id_tempoLectivo: id },
        });
        return { message: "Tempo Lectivo eliminado com sucesso" };
    }

    async apagarTodosPorAno(ano_lectivo: number) {
        await prisma.tempo_Lectivo.deleteMany({
            where: { ano_lectivo },
        });
        return { message: "Horário eliminado com sucesso" };
    }
}

export const tempoLectivoService = new TempoLectivoCrud();