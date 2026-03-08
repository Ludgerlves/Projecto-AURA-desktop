import { prisma } from '@/lib/prisma';
import { CreateDisciplinaData, UpdateDisciplinaData } from '@/lib/Validation/Disciplina';

export class DisciplinaCRUD {
    async criar(data: CreateDisciplinaData) {
        return await prisma.disciplina.create({ data });
    }

    async atualizar(nome: string, data: UpdateDisciplinaData) {
        return await prisma.disciplina.update({
            where: { nome },
            data,
        });
    }

    async mostrar(nome: string) {
        return await prisma.disciplina.findUnique({
            where: { nome },
        });
    }

    async listarTodas() {
        return await prisma.disciplina.findMany({
            orderBy: { nome: 'asc' },
        });
    }

    async apagar(nome: string) {
        // Delete TurmaDisciplina associations first
        await prisma.turmaDisciplina.deleteMany({
            where: { Disciplina: nome },
        });
        await prisma.disciplina.delete({
            where: { nome },
        });
        return { message: "Disciplina eliminada com sucesso" };
    }
}

export const disciplinaService = new DisciplinaCRUD();
