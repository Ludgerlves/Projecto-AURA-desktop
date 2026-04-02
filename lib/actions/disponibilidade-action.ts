'use server'

import { profTurmaDisciplinaService } from "@/lib/Service/ProfTurmaDisciplina"
import { createProfTurmaDisciplinaSchema } from "@/lib/Validation/ProfTurmaDisciplina"
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

export type ActionResponse<T = any> = {
    success: boolean
    data?: T | undefined
    errors?: Record<string, string[] | undefined> | undefined
    message?: string
}

export async function criarAtribuicao(
    id_professor: number,
    id_turma: number,
    id_disciplina: number
): Promise<ActionResponse> {
    try {
        const validatedData = createProfTurmaDisciplinaSchema.parse({
            id_professor, id_turma, id_disciplina,
        })
        const atribuicao = await profTurmaDisciplinaService.criarAtribuicao(validatedData)
        revalidatePath('/professores')
        return { success: true, data: atribuicao, message: 'Atribuição criada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarAtribuicoesPorProfessor(id_professor: number) {
    return await profTurmaDisciplinaService.listarPorProfessor(id_professor)
}

export async function apagarAtribuicao(id_atribuicao: number): Promise<ActionResponse> {
    try {
        const result = await profTurmaDisciplinaService.apagarAtribuicao(id_atribuicao)
        revalidatePath('/professores')
        return { success: true, data: result, message: 'Atribuição eliminada com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}