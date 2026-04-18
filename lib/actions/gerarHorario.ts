import { prisma } from "@/lib/prisma";

interface Slot {
    dia: number;
    periodo: number;
    ordem: number;
}

interface Aula {
    id_professor: number;
    id_turma: number;
    id_disciplina: number;
    id_atribuicao: number;
    tipo_sala: string;
    id_sala_preferencial: number;
    dominio: Slot[];
}

interface Horario {
    aula: Aula;
    slot: Slot;
    id_sala: number;
}

async function carregarDados() {
    const profs = await prisma.profTurmaDisciplina.findMany({
        include: {
            professor: {
                include: {
                    disponibilidades: true,
                },
            },
            turma: true,
            disciplina: {
                include: {
                    turmaDisciplina : true,
                }
            },
        }
    });
}

export default async function gerarHoririo(id_turmas: number[]) {
    
}
