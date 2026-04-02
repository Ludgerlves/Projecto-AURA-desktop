import { prisma } from "@/lib/prisma";
import { CreateCursoData, UpdateCursoData } from "@/lib/Validation/Curso";

export class CursoCRUD {
    async criarCurso(data: CreateCursoData) {
        return await prisma.curso.create({ data });
    }

    async atualizarCurso(id_curso: number, data: UpdateCursoData) {
        return await prisma.curso.update({
            where: { id_curso },
            data,
        });
    }

    async showCurso(id_curso: number) {
        return await prisma.curso.findUnique({
            where: { id_curso },
        });
    }

    async listarTodos() {
        return await prisma.curso.findMany({
            orderBy: { id_curso: "asc" },
        });
    }

    async apagarCurso(id_curso: number) {
        await prisma.curso.delete({
            where: { id_curso },
        });
        return { message: "Curso eliminado com sucesso" };
    }
}

export const cursoService = new CursoCRUD();