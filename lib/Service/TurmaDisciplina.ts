import { prisma } from "@/lib/prisma";
import { CreateTurmaDisciplinaData } from "@/lib/Validation/TurmaDisciplina";

export class TurmaDisciplinaCrud {

    async criarAssociacao(data: CreateTurmaDisciplinaData) {
        return await prisma.turmaDisciplina.create({ data });
    }

    async atualizarAulasPorSemana(
        id_turma: number,
        id_disciplina: number,
        aulas_por_semana: number
    ) {
        return await prisma.turmaDisciplina.update({
            where: {
                id_turma_id_disciplina: { id_turma, id_disciplina },
            },
            data: { aulas_por_semana },
        });
    }

    async apagarAssociacoesDaDisciplina(id_disciplina: number) {
        return await prisma.turmaDisciplina.deleteMany({
            where: { id_disciplina },
        });
    }

    async recriarAssociacoes(
        id_disciplina: number,
        turmas: { id_turma: number; aulas_por_semana: number }[]
    ) {
        await this.apagarAssociacoesDaDisciplina(id_disciplina);

        if (turmas.length > 0) {
            await prisma.turmaDisciplina.createMany({
                data: turmas.map(({ id_turma, aulas_por_semana }) => ({
                    id_turma,
                    id_disciplina,
                    aulas_por_semana,
                })),
            });
        }
    }

    async listarPorDisciplina(id_disciplina: number) {
        return await prisma.turmaDisciplina.findMany({
            where: { id_disciplina },
            include: { turma: true },
            orderBy: { id_turma: "asc" },
        });
    }

    async listarPorTurma(id_turma: number) {
        return await prisma.turmaDisciplina.findMany({
            where: { id_turma },
            include: { disciplina: true },
            orderBy: { id_disciplina: "asc" },
        });
    }
}

export const turmaDisciplinaService = new TurmaDisciplinaCrud();