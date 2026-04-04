// app/turmas/turma-action.ts
'use server'

import { turmaService }  from "@/lib/Service/Turma"
import { classeService } from "@/lib/Service/Classe"
import { cursoService }  from "@/lib/Service/Curso"
import { createTurmaSchema, updateTurmaSchema } from "@/lib/Validation/Turma"
import { createClasseSchema, updateClasseSchema } from "@/lib/Validation/Classe"
import { createCursoSchema, updateCursoSchema } from "@/lib/Validation/Curso"
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

export type ActionResponse<T = any> = {
    success: boolean
    data?: T | undefined
    errors?: Record<string, string[] | undefined> | undefined
    message?: string
}

// ══════════════════════════════════════════════════════════
// TURMA
// ══════════════════════════════════════════════════════════

export async function criarTurma(formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_turma   = formData.get('descricao_turma') as string
        const id_curso          = Number(formData.get('id_curso'))
        const id_classe         = Number(formData.get('id_classe'))
        const id_sala           = formData.get('id_sala') ? Number(formData.get('id_sala')) : undefined
        const quantidade_alunos = Number(formData.get('quantidade_alunos'))

        const validatedData = createTurmaSchema.parse({ 
            descricao_turma, 
            id_curso, 
            id_classe, 
            id_sala, 
            quantidade_alunos 
        })
        
        const turma = await turmaService.criarTurma(validatedData)

        revalidatePath('/turmas')
        return { success: true, data: turma, message: 'Turma criada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { 
                success: false, 
                errors: error.flatten().fieldErrors || undefined, 
                message: 'Erro de validação' 
            }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function atualizarTurma(id_turma: number, formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_turma   = formData.get('descricao_turma') as string | null
        const id_curso          = formData.get('id_curso')  ? Number(formData.get('id_curso'))  : undefined
        const id_classe         = formData.get('id_classe') ? Number(formData.get('id_classe')) : undefined
        const id_sala           = formData.get('id_sala')   ? Number(formData.get('id_sala'))   : undefined
        const quantidade_alunos = formData.get('quantidade_alunos') ? Number(formData.get('quantidade_alunos')) : undefined

        const validatedData = updateTurmaSchema.parse({
            descricao_turma: descricao_turma || undefined,
            id_curso, 
            id_classe, 
            id_sala, 
            quantidade_alunos,
        })
        
        const turma = await turmaService.atualizarTurma(id_turma, validatedData)

        revalidatePath('/turmas')
        return { success: true, data: turma, message: 'Turma atualizada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { 
                success: false, 
                errors: error.flatten().fieldErrors || undefined, 
                message: 'Erro de validação' 
            }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function apagarTurma(id_turma: number): Promise<ActionResponse> {
    try {
        const result = await turmaService.apagarTurma(id_turma)
        revalidatePath('/turmas')
        return { success: true, data: result, message: 'Turma apagada com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarTodasTurmas() {
    return await turmaService.listarTodas()
}

// ══════════════════════════════════════════════════════════
// CLASSE
// ══════════════════════════════════════════════════════════

export async function criarClasse(formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_classe = formData.get('descricao_classe') as string
        const validatedData    = createClasseSchema.parse({ descricao_classe })
        const classe           = await classeService.criarClasse(validatedData)

        revalidatePath('/turmas')
        return { success: true, data: classe, message: 'Classe criada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { 
                success: false, 
                errors: error.flatten().fieldErrors || undefined, 
                message: 'Erro de validação' 
            }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function atualizarClasse(id_classe: number, formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_classe = formData.get('descricao_classe') as string | null
        const validatedData    = updateClasseSchema.parse({ 
            descricao_classe: descricao_classe || undefined 
        })
        const classe = await classeService.atualizarClasse(id_classe, validatedData)

        revalidatePath('/turmas')
        return { success: true, data: classe, message: 'Classe atualizada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { 
                success: false, 
                errors: error.flatten().fieldErrors || undefined, 
                message: 'Erro de validação' 
            }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function apagarClasse(id_classe: number): Promise<ActionResponse> {
    try {
        const result = await classeService.apagarClasse(id_classe)
        revalidatePath('/turmas')
        return { success: true, data: result, message: 'Classe apagada com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarClasses() {
    return await classeService.listarTodas()
}

// ══════════════════════════════════════════════════════════
// CURSO
// ══════════════════════════════════════════════════════════

export async function criarCurso(formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_curso = formData.get('descricao_curso') as string
        const validatedData   = createCursoSchema.parse({ descricao_curso })
        const curso           = await cursoService.criarCurso(validatedData)

        revalidatePath('/turmas')
        return { success: true, data: curso, message: 'Curso criado com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { 
                success: false, 
                errors: error.flatten().fieldErrors || undefined, 
                message: 'Erro de validação' 
            }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function atualizarCurso(id_curso: number, formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_curso = formData.get('descricao_curso') as string | null
        const validatedData   = updateCursoSchema.parse({ 
            descricao_curso: descricao_curso || undefined 
        })
        const curso = await cursoService.atualizarCurso(id_curso, validatedData)

        revalidatePath('/turmas')
        return { success: true, data: curso, message: 'Curso atualizado com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { 
                success: false, 
                errors: error.flatten().fieldErrors || undefined, 
                message: 'Erro de validação' 
            }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function apagarCurso(id_curso: number): Promise<ActionResponse> {
    try {
        const result = await cursoService.apagarCurso(id_curso)
        revalidatePath('/turmas')
        return { success: true, data: result, message: 'Curso apagado com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarCursos() {
    return await cursoService.listarTodos()
}