import { prisma } from "../prisma";
import { CreateProfessorData, UpdateProfessorData } from "@/lib/Validation/Usuario";

const professorInclude = {
    Professor: {
        include: {
            ProfDisciplinas: {
                include: { Disciplina: true }
            }
        }
    }
} as const;

export class ProfessorCRUD{
    async criarProfessor(data: CreateProfessorData){
        return await prisma.professor.create({
            data:{
                nome: data.nome,
                email: data.email,
                updated_at: new Date(),
                telefone: data.telefone,
                        ProfDisciplinas: {
                            create: data.disciplinaIds.map(id => ({
                                disciplinaId: id,
                            })),
                        },
                    },
                
           // include: professorInclude,
        })

    }

    async atualizarProfessor(id_professor: number, data: UpdateProfessorData){
        const existente = await prisma.professor.findUnique({
            where: {id_professor},
            //include:{Professor: true},
        })
        if(!existente){
            throw new Error("Professor não encontrado");
        }

        if (data.disciplinaIds) {
            await prisma.profDisciplinas.deleteMany({
                where: { professorId: existente.id_professor }
            });
            await prisma.profDisciplinas.createMany({
                data: data.disciplinaIds.map(id => ({
                    professorId: existente.id_professor!,
                    disciplinaId: id,
                })),
            });
        }

        return await prisma.professor.update({
            where:{id_professor},
            data:{
                nome: data.nome ?? undefined,
                email: data.email ?? undefined,
                telefone: data.telefone ?? undefined,
                updated_at: new Date(),
            },
            //include: professorInclude,
        })
    }

    async showProfessor (id_professor: number){
        return await prisma.professor.findUnique({
            where: {id_professor},
            //include: professorInclude,
        })
    }

    async listarTodos(){
        return prisma.professor.findMany({
            select: {
                id_professor: true,
                nome: true,
                email: true,
                telefone: true,
                ProfDisciplinas: {
                    include: { Disciplina: true }
                }
            }
        })
    }

    async apagarProfessor(id_professor: number){
        const professor = await prisma.professor.findUnique({
            where: {id_professor},
            include: {ProfDisciplinas: true}
        })
        if(!professor){
            throw new Error("Professor não encontrado");
        }

        await prisma.profDisciplinas.deleteMany({
            where: { professorId: professor.id_professor }
        })
        await prisma.professor.delete({where: {id_professor: professor.id_professor}})

        return {message: "Professor eliminado com sucesso"}
    }

}
export const professorService = new ProfessorCRUD()
