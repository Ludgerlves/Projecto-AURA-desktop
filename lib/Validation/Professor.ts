import { z } from "zod";

export const disponibilidadeItemSchema = z.object({
    id_dia:     z.number().int().positive("Dia é obrigatório"),
    id_periodo: z.number().int().positive("Período é obrigatório"),
    ordem:      z.number().int().positive("Ordem é obrigatória"),
});

export const baseCreateProfessorSchema = z.object({
    nome_professor: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Email inválido"),
    telefone: z.string()
        .transform((v) => v.replace(/\D/g, ""))
        .refine((v) => v.length >= 8 && v.length <= 15, "Telefone inválido"),
    disponibilidade: z.array(disponibilidadeItemSchema).optional(),
});

export const updateProfessorSchema = z.object({
    nome_professor: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").optional(),
    email: z.string().email("Email inválido").optional(),
    telefone: z.string()
        .transform((v) => v.replace(/\D/g, ""))
        .refine((v) => v.length >= 8 && v.length <= 15, "Telefone inválido")
        .optional(),
    disponibilidade: z.array(disponibilidadeItemSchema).optional(),
}).refine(
    (data) => Object.values(data).some((v) => v !== undefined),
    { message: "Informe ao menos um campo para atualizar", path: ["nome_professor"] }
);

export type CreateProfessorData  = z.infer<typeof baseCreateProfessorSchema>;
export type UpdateProfessorData  = z.infer<typeof updateProfessorSchema>;
export type DisponibilidadeItem  = z.infer<typeof disponibilidadeItemSchema>;