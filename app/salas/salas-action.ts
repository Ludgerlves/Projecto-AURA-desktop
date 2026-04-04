'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { salaService } from '@/lib/Service/Sala'
import { createSalaSchema, updateSalaSchema } from '@/lib/Validation/Sala'

export type ActionResponse<T = any> = {
  success: boolean
  data?: T
  errors?: Record<string, string[] | undefined>
  message?: string
}

export async function criarSala(formData: FormData): Promise<ActionResponse> {
  try {
    const descricao = formData.get('descricao') as string
    const capacidade = formData.get('capacidade') as string
    const tipo_sala = formData.get('tipo_sala') as string
    const validatedData = createSalaSchema.parse({ descricao_sala: descricao, capacidade, tipo_sala })
    const sala = await salaService.criarSala(validatedData)
    revalidatePath('/salas')
    return { success: true, data: sala, message: 'Sala criada com sucesso!' }
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors || undefined,
        message: 'Erro de validação',
      }
    }
    return { success: false, message: error.message || 'Erro inesperado' }
  }
}

export async function atualizarSala(
  id: number,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const descricao = formData.get('descricao') as string
    const capacidade = formData.get('capacidade') as string
    const tipo_sala = formData.get('tipo_sala') as string
    const validatedData = updateSalaSchema.parse({
      descricao_sala: descricao || undefined,
      capacidade: capacidade || undefined,
      tipo_sala: tipo_sala || undefined,
    })
    const sala = await salaService.atualizarSala(id, validatedData)
    revalidatePath('/salas')
    return { success: true, data: sala, message: 'Sala atualizada com sucesso!' }
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors || undefined,
        message: 'Erro de validação',
      }
    }
    return { success: false, message: error.message || 'Erro inesperado' }
  }
}

export async function apagarSala(id: number): Promise<ActionResponse> {
  try {
    const result = await salaService.apagarSala(id)
    revalidatePath('/salas')
    return { success: true, data: result, message: 'Sala apagada com sucesso!' }
  } catch (error: any) {
    return { success: false, message: error.message || 'Erro inesperado' }
  }
}

export async function listarSalas() {
  return await salaService.listarTodasSalas()
}
