import { prisma } from "@/lib/prisma";
import { CreateProfessorData, UpdateProfessorData } from "@/lib/Validation/Professor";

export class ProfessorCRUD {

    async criarProfessor(data: CreateProfessorData) {
        return await prisma.professor.create({
            data: {
                nome_professor: data.nome_professor,
                email:          data.email,
                telefone:       data.telefone,
            },
        });
    }

    async atualizarProfessor(id_professor: number, data: UpdateProfessorData) {
        const existente = await prisma.professor.findUnique({
            where: { id_professor },
        });
        if (!existente) throw new Error("Professor não encontrado");

        return await prisma.professor.update({
            where: { id_professor },
            data: {
                nome_professor: data.nome_professor ?? undefined,
                email:          data.email          ?? undefined,
                telefone:       data.telefone        ?? undefined,
            },
        });
    }

    async showProfessor(id_professor: number) {
        return await prisma.professor.findUnique({
            where: { id_professor },
            include: {
                profTurmaDisciplina: {
                    include: {
                        turma:      true,
                        disciplina: true,
                    },
                },
                disponibilidades: {
                    include: {
                        dia:    true,
                        periodo: true,
                    },
                },
            },
        });
    }

    async listarTodos() {
        return await prisma.professor.findMany({
            orderBy: { nome_professor: "asc" },
            include: {
                profTurmaDisciplina: {
                    include: {
                        turma:      true,
                        disciplina: true,
                    },
                },
                disponibilidades: {
                    include: {
                        dia:    true,
                        periodo: true,
                    },
                },
            },
        });
    }

    async apagarProfessor(id_professor: number) {
        const professor = await prisma.professor.findUnique({
            where: { id_professor },
        });
        if (!professor) throw new Error("Professor não encontrado");

        await prisma.tempo_Lectivo.deleteMany({ where: { id_professor } });
        await prisma.profTurmaDisciplina.deleteMany({ where: { id_professor } });
        await prisma.disponibilidade.deleteMany({ where: { id_professor } });
        await prisma.professor.delete({ where: { id_professor } });

        return { message: "Professor eliminado com sucesso" };
    }
}

export const professorService = new ProfessorCRUD();