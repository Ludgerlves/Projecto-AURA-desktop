import { prisma } from "@/lib/prisma"
import { CreateProfTurmaDisciplinaData } from "@/lib/Validation/ProfTurmaDisciplina"

export class ProfTurmaDisciplinaCrud {

    async criarAtribuicao(data: CreateProfTurmaDisciplinaData) {
        return await prisma.profTurmaDisciplina.create({ data })
    }

    async listarPorProfessor(id_professor: number) {
        return await prisma.profTurmaDisciplina.findMany({
            where: { id_professor },
            include: {
                turma:      true,
                disciplina: true,
            },
            orderBy: { id_turma: "asc" },
        })
    }

    async listarPorTurma(id_turma: number) {
        return await prisma.profTurmaDisciplina.findMany({
            where: { id_turma },
            include: {
                professor:  true,
                disciplina: true,
            },
        })
    }

    async apagarAtribuicao(id_atribuicao: number) {
        await prisma.profTurmaDisciplina.delete({
            where: { id_atribuicao },
        })
        return { message: "Atribuição eliminada com sucesso" }
    }

    async apagarPorProfessor(id_professor: number) {
        await prisma.profTurmaDisciplina.deleteMany({
            where: { id_professor },
        })
    }
}

export const profTurmaDisciplinaService = new ProfTurmaDisciplinaCrud()