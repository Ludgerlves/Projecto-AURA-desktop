'use server'

import { salaService } from "@/lib/Service/Sala"
import { createSalaSchema, updateSalaSchema } from "@/lib/Validation/Sala"
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

export type ActionResponse<T = any> = {
    success: boolean
    data?: T | undefined
    errors?: Record<string, string[] | undefined> | undefined
    message?: string
}

export async function criarSala(formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_sala = formData.get('descricao_sala') as string
        const capacidade     = Number(formData.get('capacidade'))
        const tipo_sala      = formData.get('tipo_sala') as string

        const validatedData = createSalaSchema.parse({ descricao_sala, capacidade, tipo_sala })
        const sala          = await salaService.criarSala(validatedData)

        revalidatePath('/salas')
        return { success: true, data: sala, message: 'Sala criada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function atualizarSala(id_sala: number, formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_sala = formData.get('descricao_sala') as string | null
        const capacidade     = formData.get('capacidade') ? Number(formData.get('capacidade')) : undefined
        const tipo_sala      = formData.get('tipo_sala') as string | null

        const validatedData = updateSalaSchema.parse({
            descricao_sala: descricao_sala || undefined,
            capacidade,
            tipo_sala:      tipo_sala      || undefined,
        })
        const sala = await salaService.atualizarSala(id_sala, validatedData)

        revalidatePath('/salas')
        return { success: true, data: sala, message: 'Sala actualizada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function apagarSala(id_sala: number): Promise<ActionResponse> {
    try {
        const result = await salaService.apagarSala(id_sala)
        revalidatePath('/salas')
        return { success: true, data: result, message: 'Sala eliminada com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarTodasSalas() {
    return await salaService.listarTodas()
}