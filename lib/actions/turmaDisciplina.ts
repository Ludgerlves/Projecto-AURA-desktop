'use server'

import { turmaDisciplinaService } from "@/lib/Service/TurmaDisciplina"
import { createTurmaDisciplinaSchema } from "@/lib/Validation/Disciplina"
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

export type ActionResponse<T = any> = {
    success: boolean
    data?: T | undefined
    errors?: Record<string, string[] | undefined> | undefined
    message?: string
}

// Schema para validar o array de turmas que vem do componente
const turmasArraySchema = z.array(
    z.object({
        nome_turma:       z.string().min(1, "Turma obrigatória"),
        aulas_por_semana: z.number().int().min(1, "Mínimo 1 aula por semana"),
    })
)

export async function atualizarTurmasDaDisciplina(
    nome_disciplina: string,
    turmas: { nome_turma: string; aulas_por_semana: number }[]
): Promise<ActionResponse> {
    try {
        // Valida o nome da disciplina
        z.string().min(1).parse(nome_disciplina)

        // Valida o array de turmas
        const turmasValidadas = turmasArraySchema.parse(turmas)

        await turmaDisciplinaService.recriarAssociacoes(nome_disciplina, turmasValidadas)

        revalidatePath('/disciplinas')
        return { success: true, message: 'Turmas da disciplina atualizadas com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarTurmasDaDisciplina(nome_disciplina: string) {
    return await turmaDisciplinaService.listarPorDisciplina(nome_disciplina)
}
