import { prisma } from "../prisma";
import { CreateProfessorData, UpdateProfessorData } from "@/lib/Validation/Usuario";

const DIAS_SEMANA = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
];

const PERIODOS = ["Manhã", "Tarde"];

async function ensureDisponibilidadeRefsExist() {
    await Promise.all([
        ...DIAS_SEMANA.map((nome) =>
            prisma.diaSemana.upsert({
                where: { nome },
                update: {},
                create: { nome },
            })
        ),
        ...PERIODOS.map((periodo) =>
            prisma.periodo.upsert({
                where: { periodo },
                update: {},
                create: { periodo },
            })
        ),
    ]);
}

export class ProfessorCRUD{
    async criarProfessor(data: CreateProfessorData){
        if (data.disponibilidade && data.disponibilidade.length > 0) {
            await ensureDisponibilidadeRefsExist();
        }
        return await prisma.professor.create({
            data:{
                nome: data.nome,
                email: data.email,
                updated_at: new Date(),
                telefone: data.telefone,
                ProfTurmaDisciplina: {
                    create: data.profTurmaDisciplina.map(id => ({
                        turmaId: id.turmaId,
                        disciplinaNome: id.disciplinaNome,
                    })),
                },
                ...(data.disponibilidade && data.disponibilidade.length > 0 ? {
                    Disponibilidade: {
                        create: data.disponibilidade.map(d => ({
                            diaSemana: d.diaSemana,
                            periodo: d.periodo,
                            ordem: d.ordem,
                        })),
                    },
                } : {}),
            },
        })
    }

    async atualizarProfessor(id_professor: number, data: UpdateProfessorData){
        const existente = await prisma.professor.findUnique({
            where: {id_professor},
        })
        if(!existente){
            throw new Error("Professor não encontrado");
        }

        if (data.profTurmaDisciplina) {
            await prisma.profTurmaDisciplina.deleteMany({
                where: { professorId: existente.id_professor }
            });
            await prisma.profTurmaDisciplina.createMany({
                data: data.profTurmaDisciplina.map(id => ({
                    professorId: existente.id_professor!,
                    disciplinaNome: id.disciplinaNome,
                    turmaId: id.turmaId,
                })),
            });
        }

        if (data.disponibilidade) {
            await ensureDisponibilidadeRefsExist();
            await prisma.disponibilidade.deleteMany({
                where: { professorId: existente.id_professor }
            });
            if (data.disponibilidade.length > 0) {
                await prisma.disponibilidade.createMany({
                    data: data.disponibilidade.map(d => ({
                        professorId: existente.id_professor,
                        diaSemana: d.diaSemana,
                        periodo: d.periodo,
                        ordem: d.ordem,
                    })),
                });
            }
        }

        return await prisma.professor.update({
            where:{id_professor},
            data:{
                nome: data.nome ?? undefined,
                email: data.email ?? undefined,
                telefone: data.telefone ?? undefined,
                updated_at: new Date(),
            },
        })
    }

    async showProfessor (id_professor: number){
        return await prisma.professor.findUnique({
            where: {id_professor},
        })
    }

    async listarTodos(){
        return prisma.professor.findMany({
            select: {
                id_professor: true,
                nome: true,
                email: true,
                telefone: true,
                ProfTurmaDisciplina: {
                    select: {
                        idProfTurma: true,
                        turmaId: true,
                        disciplinaNome: true,
                        disciplina: { select: { nome: true } },
                        Turma: { select: { idTurma: true, nome: true } },
                    },
                },
                Disponibilidade: {
                    select: {
                        idDisponibilidade: true,
                        diaSemana: true,
                        periodo: true,
                        ordem: true,
                        DiaSemana: { select: { nome: true } },
                        Periodo: { select: { periodo: true } },
                    }
                }
            }
        })
    }

    async apagarProfessor(id_professor: number){
        const professor = await prisma.professor.findUnique({
            where: {id_professor},
            include: {ProfTurmaDisciplina: true}
        })
        if(!professor){
            throw new Error("Professor não encontrado");
        }

        await prisma.profTurmaDisciplina.deleteMany({where: { professorId: professor.id_professor }})
        await prisma.disponibilidade.deleteMany({where:{professorId:id_professor}})
        await prisma.tempoLectivo.deleteMany({where:{professorId: id_professor}})
        await prisma.professor.delete({where: {id_professor: professor.id_professor}})
        
        return {message: "Professor eliminado com sucesso"}
    }

}
export const professorService = new ProfessorCRUD()
