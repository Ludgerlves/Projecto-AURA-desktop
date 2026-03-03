'use server'

import { professorService } from "@/lib/Service/Professores"
import { baseCreateProfessorSchema, updateProfessorSchema, disponibilidadeItemSchema } from "@/lib/Validation/Usuario"
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { prisma } from "@/lib/prisma";


export type ActionResponse<T = any> = {
    success: boolean;
    data?: T | undefined;
    errors?: Record <string, string[] | undefined> | undefined;
    message?: string;
};

function parseProfTurmaDisciplina(formData: FormData): { turmaId: number; disciplinaNome: string }[] {
    const raw = formData.get('profTurmaDisciplina') as string | null;
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function parseDisponibilidade(formData: FormData): { diaSemana: string; periodoId: string; ordem: number }[] {
    const raw = formData.get('disponibilidade') as string | null;
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

export async function criarProfessor(
    formData: FormData
): Promise<ActionResponse> {
    try {
        const nome = formData.get('nome') as string;
        const email = formData.get('email') as string;
        const telefone = formData.get('telefone') as string;
        const profTurmaDisciplina = parseProfTurmaDisciplina(formData);
        const disponibilidade = parseDisponibilidade(formData);

        const professorData = {
            nome,
            email,
            telefone,
            profTurmaDisciplina,
            disponibilidade,
        };

        const validatedData = baseCreateProfessorSchema.parse(professorData);
        const professor = await professorService.criarProfessor(validatedData);

        revalidatePath('/professores');

        return {
            success: true,
            data: professor,
            message: 'Professor criado com sucesso!'
        };

    } catch (error: any) {
        console.error('Erro ao criar professor:', error);

        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação',
            };
        }

        return {
            success: false,
            message: error.message || 'Erro inesperado',
        };
    }
}

export async function criarProfessorAction(
    prevState: ActionResponse | undefined,
    formData: FormData
): Promise<ActionResponse> {
    return await criarProfessor(formData);
}

export async function atualizarProfessor(
    id: number,
    formData: FormData
):Promise<ActionResponse>{
    try {
        const nome = formData.get('nome') as string | null;
        const email = formData.get('email') as string | null;
        const telefone = formData.get('telefone') as string | null;
        const profTurmaDisciplina = parseProfTurmaDisciplina(formData);
        const disponibilidade = parseDisponibilidade(formData);

        const validateData = updateProfessorSchema.parse({
            nome: nome || undefined,
            email: email || undefined,
            telefone: telefone || undefined,
            profTurmaDisciplina: profTurmaDisciplina.length > 0 ? profTurmaDisciplina : undefined,
            disponibilidade: disponibilidade.length > 0 ? disponibilidade : undefined,
        });
        const professor = await professorService.atualizarProfessor(id, validateData)
        revalidatePath('/professores');
        return{
            success: true, data: professor, message: 'Professor atualizado com sucesso',
        };
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação',
            };
        }

        return { success: false, message: error.message || 'Erro inesperado' };
    }
}
export async function apagarProfessor(id:number): Promise<ActionResponse> {
    try {
        await professorService.showProfessor(id);
        const result = await professorService.apagarProfessor(id);
        revalidatePath('/professores');
        return{ success: true, data: result, message: 'Professor apagado com sucesso'};


    } catch (error: any) {
        return{ success: false, message: error.message}
    }

}

export async function listarTodos() {
    return await professorService.listarTodos();
}

export async function showProfessor(id:number) {
    try {
        return await professorService.showProfessor(id);
    } catch (error) {
        return null;
    }
}

export async function listarDisciplinas() {
    return await prisma.disciplina.findMany({
        orderBy: { nome: 'asc' }
    });
}

export async function atualizarDisponibilidade(
    professorId: number,
    slots: { diaSemana: string; periodo: string; ordem: number }[]
): Promise<ActionResponse> {
    try {
        const validated = z.array(disponibilidadeItemSchema).parse(slots);
        await professorService.atualizarProfessor(professorId, {
            disponibilidade: validated,
        });
        revalidatePath('/professores');
        return { success: true, message: 'Disponibilidade atualizada com sucesso' };
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, message: 'Dados de disponibilidade inválidos' };
        }
        return { success: false, message: error.message || 'Erro inesperado' };
    }
}

export async function listarDiasSemana() {
    return await prisma.diaSemana.findMany({
        orderBy: { nome: 'asc' }
    });
}

export async function listarPeriodos() {
    return await prisma.periodo.findMany({
        orderBy: { periodo: 'asc' }
    });
}

export async function listProfTurmaDisciplina(){
    return await prisma.profTurmaDisciplina.findMany()
}

export async function listarTurmas() {
    return await prisma.turma.findMany({
        orderBy: { nome: 'asc' }
    });
}
