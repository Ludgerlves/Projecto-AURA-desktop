import { z } from "zod";

export const disponibilidadeItemSchema = z.object({
    diaSemana: z.string().min(1, "Dia da semana é obrigatório"),
    periodo: z.string().min(1, "Período é obrigatório"),
    ordem: z.number().int().positive().default(1),
});

export const profTurmaDisciplinaItemSchema = z.object({
    turmaId: z.number().int().positive("Turma é obrigatória"),
    disciplinaNome: z.string().min(1, "Disciplina é obrigatória"),
});

export const baseCreateProfessorSchema = z.object({
    nome_professor: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Email inválido").optional().nullable(),
    telefone: z.string()
        .transform((v) => v.replace(/\D/g, ""))
        .refine((v) => v.length >= 8 && v.length <= 15, "Telefone inválido"),
    profTurmaDisciplina: z.array(profTurmaDisciplinaItemSchema).min(1, "O professor deve ter pelo menos uma atribuição turma-disciplina"),
    disponibilidade: z.array(disponibilidadeItemSchema).optional(),
});

export const updateProfessorSchema = z.object({
    nome_professor: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").optional(),
    email: z.string().email("Email inválido").optional(),
    telefone: z.string()
        .transform((v) => v.replace(/\D/g, ""))
        .refine((v) => v.length >= 8 && v.length <= 15, "Telefone inválido")
        .optional(),
    profTurmaDisciplina: z.array(profTurmaDisciplinaItemSchema).min(1, "O professor deve ter pelo menos uma atribuição turma-disciplina").optional(),
    disponibilidade: z.array(disponibilidadeItemSchema).optional(),
}).refine((data) => data.nome_professor || data.email || data.telefone || data.profTurmaDisciplina || data.disponibilidade, {
    message: "Informe ao menos um campo para atualizar",
    path: ["nome_professor"],
});



export type CreateProfessorData = z.infer<typeof baseCreateProfessorSchema>;
//export type CreateAdminData = z.infer<typeof createAdminSchema>;
export type UpdateProfessorData = z.infer<typeof updateProfessorSchema>;
export type DisponibilidadeItem = z.infer<typeof disponibilidadeItemSchema>;
