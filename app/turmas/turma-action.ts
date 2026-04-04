'use server'

import { turmaService } from "@/lib/Service/Turma"
import { classeService } from "@/lib/Service/Classe"
import { cursoService } from "@/lib/Service/Curso"
import { createTurmaSchema, updateTurmaSchema } from "@/lib/Validation/Turma"
import { createClasseSchema, updateClasseSchema } from "@/lib/Validation/Classe"
import { createCursoSchema, updateCursoSchema } from "@/lib/Validation/Curso"
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { getActionErrorMessage, getZodFieldErrors } from '@/lib/errors'

export type ActionResponse<T = any> = {
    success: boolean;
    data?: T | undefined;
    errors?: Record<string, string[] | undefined> | undefined;
    message?: string;
};

// TURMA

export async function criarTurma(
    formData: FormData
): Promise<ActionResponse> {
    try {
        const nome = formData.get('nome') as string
        const classeId = formData.get('classeId') as string
        const cursoId = formData.get('cursoId') as string
        const quantidade_alunos = formData.get('quantidade_alunos') as string

        const validatedData = createTurmaSchema.parse({
            descricao_turma: nome,
            id_classe: classeId,
            id_curso: cursoId,
            quantidade_alunos: quantidade_alunos || "0",
        })
        const turma = await turmaService.criarTurma(validatedData)

        revalidatePath('/turmas')
        return { success: true, data: turma, message: 'Turma criada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação',
            }
        }
        return { success: false, message: getActionErrorMessage(error) }
    }
}

export async function atualizarTurma(
    id: number,
    formData: FormData
): Promise<ActionResponse> {
    try {
        const nome = formData.get('nome') as string | null
        const classeId = formData.get('classeId') as string | null
        const cursoId = formData.get('cursoId') as string | null
        const quantidade_alunos = formData.get('quantidade_alunos') as string | null

        const validatedData = updateTurmaSchema.parse({
            descricao_turma: nome || undefined,
            id_classe: classeId || undefined,
            id_curso: cursoId || undefined,
            quantidade_alunos: quantidade_alunos || undefined,
        })
        const turma = await turmaService.atualizarTurma(id, validatedData)

        revalidatePath('/turmas')
        return { success: true, data: turma, message: 'Turma atualizada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação',
            }
        }
        return { success: false, message: getActionErrorMessage(error) }
    }
}

export async function apagarTurma(id: number): Promise<ActionResponse> {
    try {
        const result = await turmaService.apagarTurma(id)
        revalidatePath('/turmas')
        return { success: true, data: result, message: 'Turma apagada com sucesso!' }
    } catch (error: any) {
        return { success: false, message: getActionErrorMessage(error) }
    }
}

export async function listarTodasTurmas() {
    return await turmaService.listarTodasTurmas()
}

// CLASSE

export async function criarClasse(
    formData: FormData
): Promise<ActionResponse> {
    try {
        const descricao = formData.get('descricao') as string
        const validatedData = createClasseSchema.parse({ descricao_classe: descricao })
        const classe = await classeService.criarClasse(validatedData)

        revalidatePath('/turmas')
        return { success: true, data: classe, message: 'Classe criada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação',
            }
        }
        return { success: false, message: getActionErrorMessage(error) }
    }
}

export async function atualizarClasse(
    id: number,
    formData: FormData
): Promise<ActionResponse> {
    try {
        const descricao = formData.get('descricao') as string
        const validatedData = updateClasseSchema.parse({ descricao_classe: descricao || undefined })
        const classe = await classeService.atualizarClasse(id, validatedData)

        revalidatePath('/turmas')
        return { success: true, data: classe, message: 'Classe atualizada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação',
            }
        }
        return { success: false, message: getActionErrorMessage(error) }
    }
}

export async function apagarClasse(id: number): Promise<ActionResponse> {
    try {
        const result = await classeService.apagarClasse(id)
        revalidatePath('/turmas')
        return { success: true, data: result, message: 'Classe apagada com sucesso!' }
    } catch (error: any) {
        return { success: false, message: getActionErrorMessage(error) }
    }
}

export async function listarClasses() {
    return await classeService.listarTodas()
}

//CURSO

export async function criarCurso(
    formData: FormData
): Promise<ActionResponse> {
    try {
        const descricao = formData.get('descricao') as string
        const validatedData = createCursoSchema.parse({ descricao_curso: descricao })
        const curso = await cursoService.criarCurso(validatedData)

        revalidatePath('/turmas')
        return { success: true, data: curso, message: 'Curso criado com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação',
            }
        }
        return { success: false, message: getActionErrorMessage(error) }
    }
}

export async function atualizarCurso(
    id: number,
    formData: FormData
): Promise<ActionResponse> {
    try {
        const descricao = formData.get('descricao') as string
        const validatedData = updateCursoSchema.parse({ descricao_curso: descricao || undefined })
        const curso = await cursoService.atualizarCurso(id, validatedData)

        revalidatePath('/turmas')
        return { success: true, data: curso, message: 'Curso atualizado com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação',
            }
        }
        return { success: false, message: getActionErrorMessage(error) }
    }
}

export async function apagarCurso(id: number): Promise<ActionResponse> {
    try {
        const result = await cursoService.apagarCurso(id)
        revalidatePath('/turmas')
        return { success: true, data: result, message: 'Curso apagado com sucesso!' }
    } catch (error: any) {
        return { success: false, message: getActionErrorMessage(error) }
    }
}

export async function listarCursos() {
    return await cursoService.listarTodosCursos()
}
