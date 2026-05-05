// app/professores/professores-action.ts
'use server'

import { professorService } from "@/lib/Service/Professor"
import { baseCreateProfessorSchema, updateProfessorSchema } from "@/lib/Validation/Professor"
import { prisma } from "@/lib/prisma"
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { ActionError } from "@/lib/utils/erros"
import { Action } from "@radix-ui/react-toast"

export type ActionResponse<T = any> = {
    success: boolean
    data?: T | undefined
    errors?: Record<string, string[] | undefined> | undefined
    message?: string
}

// ══════════════════════════════════════════════════════════
// TYPES PARA DISPONIBILIDADE E PROFTURMADISCIPLINA
// ══════════════════════════════════════════════════════════

interface DisponibilidadeSlot {
    diaSemana: string   // Nome do dia (ex: "Segunda-feira")
    periodo: string     // Nome do período (ex: "Manhã")
    ordem: number       // Número do tempo (1-6)
}

interface ProfTurmaDisciplinaInput {
    turmaId: number
    disciplinaId: number
}

// ══════════════════════════════════════════════════════════
// MAPEAMENTOS UI ↔ DB
// ══════════════════════════════════════════════════════════

const MAPA_DIA_UI_PARA_DB: Record<string, string> = {
  "Segunda-feira": "Segunda-Feira",
  "Terça-feira": "Terça-Feira",
  "Quarta-feira": "Quarta-Feira",
  "Quinta-feira": "Quinta-Feira",
  "Sexta-feira": "Sexta-Feira",
  "Segunda": "Segunda-Feira",
  "Terça": "Terça-Feira",
  "Quarta": "Quarta-Feira",
  "Quinta": "Quinta-Feira",
  "Sexta": "Sexta-Feira",
}

const MAPA_PERIODO_UI_PARA_DB: Record<string, string> = {
  "Manhã": "Manhã",
  "Tarde": "Tarde",
  "MANHA": "Manhã",
  "TARDE": "Tarde",
}

// ══════════════════════════════════════════════════════════
// HELPER: CONVERTER NOME DO DIA PARA ID
// ══════════════════════════════════════════════════════════

async function getDiaId(nomeDia: string): Promise<number | null> {
    const nomeDB = MAPA_DIA_UI_PARA_DB[nomeDia] || nomeDia

    const dia = await prisma.diaSemana.findFirst({
        where: { descricao_dia: nomeDB }
    })
    if (dia) return dia.id_dia

    const diaFallback = await prisma.diaSemana.findFirst({
        where: { descricao_dia: { contains: nomeDia.split('-')[0], mode: 'insensitive' } }
    })
    if (diaFallback) return diaFallback.id_dia

    const todosDias = await prisma.diaSemana.findMany()
    console.warn(`Dia "${nomeDB}" não encontrado. Dias na DB:`, todosDias.map(d => d.descricao_dia))
    return null
}

async function getPeriodoId(nomePeriodo: string): Promise<number | null> {
    const nomeDB = MAPA_PERIODO_UI_PARA_DB[nomePeriodo] || nomePeriodo
    const periodo = await prisma.periodo.findFirst({
        where: { descricao_periodo: nomeDB }
    })
    if (periodo) return periodo.id_periodo

    const periodoFallback = await prisma.periodo.findFirst({
        where: { descricao_periodo: { contains: nomePeriodo.split('-')[0], mode: 'insensitive' } }
    })
    if (periodoFallback) return periodoFallback.id_periodo

    const todosPeriodos = await prisma.periodo.findMany()
    console.warn(`Período "${nomeDB}" não encontrado. Períodos na DB:`, todosPeriodos.map(p => p.descricao_periodo))
    return null
}

async function getDisciplinaId(disciplinaId: number): Promise<number | null> {
    const disciplina = await prisma.disciplina.findFirst({
        where: { id_disciplina: disciplinaId }
    })
    return disciplina?.id_disciplina ?? null
}

// ══════════════════════════════════════════════════════════
// CRIAR PROFESSOR
// ══════════════════════════════════════════════════════════

export async function criarProfessor(formData: FormData): Promise<ActionResponse> {
    try {
        const nome_professor = formData.get('nome') as string
        const email          = formData.get('email') as string
        const telefone       = formData.get('telefone') as string
        
        // Parse dos arrays JSON
        const profTurmaDisciplinaJson = formData.get('profTurmaDisciplina') as string
        const disponibilidadeJson     = formData.get('disponibilidade') as string
        
        const profTurmaDisciplina: ProfTurmaDisciplinaInput[] = profTurmaDisciplinaJson 
            ? JSON.parse(profTurmaDisciplinaJson) 
            : []
        const disponibilidadeSlots: DisponibilidadeSlot[] = disponibilidadeJson 
            ? JSON.parse(disponibilidadeJson) 
            : []

        // Validar dados básicos
        const validatedData = baseCreateProfessorSchema.parse({ 
            nome_professor, 
            email, 
            telefone 
        })

        // 1. Criar Professor
        const professor = await professorService.criarProfessor(validatedData)

// 2. Criar ProfTurmaDisciplina
if (profTurmaDisciplina.length > 0) {
console.log('🔍 [DEBUG] Verificando duplicações...', { 
  profTurmaDisciplina, 
  qtd: profTurmaDisciplina.length 
});

const existentes = await prisma.profTurmaDisciplina.findFirst({
where:{
OR: profTurmaDisciplina.map(ptd=>({
id_turma: ptd.turmaId,
id_disciplina: ptd.disciplinaId,
}))
},
include: {professor: true}
});

console.log('🔍 [DEBUG] Resultado da verificação:', { 
  encontrou: !!existentes, 
  professor: existentes?.professor?.nome_professor 
});

if(existentes){
console.log('❌ [DEBUG] Duplicação detetada! Lançando ActionError...');
throw new ActionError(
`A turma já tem o Professor ${existentes.professor.nome_professor} para esta disciplina.`,
"DUPLICATE_ASSIGNMENT"
);
}

console.log('✅ [DEBUG] Sem duplicação. Criando associações...');
const data = profTurmaDisciplina.map(ptd=>({
id_turma: ptd.turmaId,
id_disciplina: ptd.disciplinaId,
id_professor: professor.id_professor
}));

console.log('💾 [DEBUG] Dados para createMany:', data);
await prisma.profTurmaDisciplina.createMany({data})
console.log('✅ [DEBUG] Criação bem-sucedida!');
        return {success: true}

        }

        // 3. Criar Disponibilidades
        if (disponibilidadeSlots.length > 0) {
            const disponibilidadesData = []
            
            for (const slot of disponibilidadeSlots) {
                const diaId = await getDiaId(slot.diaSemana)
                const periodoId = await getPeriodoId(slot.periodo)
                
                if (!diaId || !periodoId) {
                    console.warn(`Dia/Período não encontrado: ${slot.diaSemana} - ${slot.periodo}`)
                    continue
                }

                disponibilidadesData.push({
                    id_professor: professor.id_professor,
                    id_dia: diaId,
                    id_periodo: periodoId,
                    ordem: slot.ordem
                })
            }

            if (disponibilidadesData.length > 0) {
                await prisma.disponibilidade.createMany({
                    data: disponibilidadesData
                })
            }
        }

        revalidatePath('/professores')
        return { success: true, data: professor, message: 'Professor criado com sucesso!' }
} catch (error: any) {
console.log('❗ [DEBUG CATCH] Erro capturado:', {
type: error?.constructor?.name,
name: error?.name,
message: error?.message,
code: error?.code,
stack: error?.stack?.split('\n')?.[0]
});

if (error instanceof z.ZodError) {
console.log('❗ [DEBUG CATCH] ZodError detetado');
return {
success: false,
errors: error.flatten().fieldErrors || undefined,
message: 'Verifique os erros nos campos abaixo.'
}
}

if (error instanceof ActionError) {
console.log('✅ [DEBUG CATCH] ActionError detetado! Mensagem:', error.message);
return { success: false, message: error.message }
}

if (error?.code === 'P2002') {
console.log('❗ [DEBUG CATCH] P2002 (unique constraint) detetado');
return { success: false, message: 'Já existe um professor registado com estes dados (Email).' }
}

console.log('⚠️ [DEBUG CATCH] Erro genérico, message:', error?.message);
return { success: false, message: error.message || 'Erro inesperado ao criar professor.' }
}
}

// ══════════════════════════════════════════════════════════
// ATUALIZAR PROFESSOR
// ══════════════════════════════════════════════════════════

export async function atualizarProfessor(id_professor: number, formData: FormData): Promise<ActionResponse> {
    try {
        const nome_professor = formData.get('nome') as string | null
        const email          = formData.get('email') as string | null
        const telefone       = formData.get('telefone') as string | null

        const profTurmaDisciplinaJson = formData.get('profTurmaDisciplina') as string
        const disponibilidadeJson     = formData.get('disponibilidade') as string
        
        const profTurmaDisciplina: ProfTurmaDisciplinaInput[] = profTurmaDisciplinaJson 
            ? JSON.parse(profTurmaDisciplinaJson) 
            : []
        const disponibilidadeSlots: DisponibilidadeSlot[] = disponibilidadeJson 
            ? JSON.parse(disponibilidadeJson) 
            : []

        // Validar dados
        const validatedData = updateProfessorSchema.parse({
            nome_professor: nome_professor || undefined,
            email:          email          || undefined,
            telefone:       telefone       || undefined,
        })

        // 1. Atualizar Professor
        const professor = await professorService.atualizarProfessor(id_professor, validatedData)

        // 2. Atualizar ProfTurmaDisciplina (deletar e recriar)
        await prisma.profTurmaDisciplina.deleteMany({
            where: { id_professor }
        })

        if (profTurmaDisciplina.length > 0) {
            for (const ptd of profTurmaDisciplina) {
                const disciplinaId = await getDisciplinaId(ptd.disciplinaId)
                
                if (!disciplinaId) continue

                await prisma.profTurmaDisciplina.create({
                    data: {
                        id_professor,
                        id_turma: ptd.turmaId,
                        id_disciplina: disciplinaId
                    }
                })
            }
        }

        // 3. Atualizar Disponibilidades (deletar e recriar)
        await prisma.disponibilidade.deleteMany({
            where: { id_professor }
        })

        if (disponibilidadeSlots.length > 0) {
            const disponibilidadesData = []
            
            for (const slot of disponibilidadeSlots) {
                const diaId = await getDiaId(slot.diaSemana)
                const periodoId = await getPeriodoId(slot.periodo)
                
                if (!diaId || !periodoId) continue

                disponibilidadesData.push({
                    id_professor,
                    id_dia: diaId,
                    id_periodo: periodoId,
                    ordem: slot.ordem
                })
            }

            if (disponibilidadesData.length > 0) {
                await prisma.disponibilidade.createMany({
                    data: disponibilidadesData
                })
            }
        }

        revalidatePath('/professores')
        return { success: true, data: professor, message: 'Professor atualizado com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { 
                success: false, 
                errors: error.flatten().fieldErrors || undefined, 
                message: 'Verifique os erros nos campos abaixo.' 
            }
        }
        if (error?.code === 'P2002') {
            return { success: false, message: 'Já existe um professor registado com este dado.' }
        }
        return { success: false, message: error.message || 'Erro inesperado ao atualizar professor.' }
    }
}

// ══════════════════════════════════════════════════════════
// ATUALIZAR APENAS DISPONIBILIDADE (NOVA FUNÇÃO!)
// ══════════════════════════════════════════════════════════

export async function atualizarDisponibilidade(
    id_professor: number, 
    disponibilidadeSlots: DisponibilidadeSlot[]
): Promise<ActionResponse> {
    try {
        console.log(`Atualizando disponibilidade para Prof ${id_professor}: ${disponibilidadeSlots.length} slots`)

        // 1. Deletar disponibilidades antigas
        await prisma.disponibilidade.deleteMany({
            where: { id_professor }
        })

        // 2. Criar novas disponibilidades
        if (disponibilidadeSlots.length > 0) {
            const disponibilidadesData = []
            
            for (const slot of disponibilidadeSlots) {
                const diaId = await getDiaId(slot.diaSemana)
                const periodoId = await getPeriodoId(slot.periodo)
                
                if (!diaId || !periodoId) {
                    console.warn(`Dia/Período não encontrado: ${slot.diaSemana} (${slot.diaSemana}) - ${slot.periodo} → diaId=${diaId}, periodoId=${periodoId}`)
                    continue
                }

                disponibilidadesData.push({
                    id_professor,
                    id_dia: diaId,
                    id_periodo: periodoId,
                    ordem: slot.ordem
                })
            }

            if (disponibilidadesData.length > 0) {
                await prisma.disponibilidade.createMany({
                    data: disponibilidadesData
                })
                console.log(`Disponibilidade criada: ${disponibilidadesData.length} registos`)
            } else {
                console.warn("Nenhuma disponibilidade válida para criar")
            }
        }

        revalidatePath('/professores')
        return { success: true, message: 'Disponibilidade atualizada com sucesso!' }
    } catch (error: any) {
        console.error("Erro ao atualizar disponibilidade:", error)
        return { success: false, message: error.message || 'Erro ao atualizar disponibilidade' }
    }
}

// ══════════════════════════════════════════════════════════
// APAGAR PROFESSOR
// ══════════════════════════════════════════════════════════

export async function apagarProfessor(id_professor: number): Promise<ActionResponse> {
    try {
        const result = await professorService.apagarProfessor(id_professor)
        revalidatePath('/professores')
        return { success: true, data: result, message: 'Professor apagado com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

// ══════════════════════════════════════════════════════════
// LISTAR
// ══════════════════════════════════════════════════════════

export async function listarTodos() {
    return await professorService.listarTodos()
}

export async function showProfessor(id_professor: number) {
    return await professorService.showProfessor(id_professor)
}

export async function listarDisciplinas() {
    return await prisma.disciplina.findMany({
        orderBy: { descricao_disciplina: 'asc' }
    })
}

export async function listarDiasSemana() {
    return await prisma.diaSemana.findMany({
        orderBy: { id_dia: 'asc' }
    })
}

export async function listarPeriodos() {
    return await prisma.periodo.findMany({
        orderBy: { id_periodo: 'asc' }
    })
}

export async function listarTurmas() {
    return await prisma.turma.findMany({
        orderBy: { descricao_turma: 'asc' },
        include: { 
            turmaDisciplinas: {
                include: {
                    disciplina: true
                }
            } 
        },
    })
}