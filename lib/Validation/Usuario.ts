import { z } from "zod";

export const baseCreateProfessorSchema = z.object({
    nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Email inválido").optional().nullable(),
    telefone: z.string()
        .transform((v) => v.replace(/\D/g, ""))
        .refine((v) => v.length >= 8 && v.length <= 15, "Telefone inválido"),
    disciplinaIds: z.array(z.number().int().positive()).min(1, "O professor deve ter pelo menos uma disciplina"),
    
});

export const createProfessorFormSchema = z.object({
    nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Email inválido"),
    disciplinaIds: z.array(z.number().int().positive()).min(1, "O professor deve ter pelo menos uma disciplina"),
    telefone: z.string()
        .transform((v) => v.replace(/\D/g, ""))
        .refine((v) => v.length >= 8 && v.length <= 15, "Telefone inválido"),
});

export const updateProfessorSchema = z.object({
    nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").optional(),
    email: z.string().email("Email inválido").optional(),
    telefone: z.string()
        .transform((v) => v.replace(/\D/g, ""))
        .refine((v) => v.length >= 8 && v.length <= 15, "Telefone inválido")
        .optional(),
    disciplinaIds: z.array(z.number().int().positive()).min(1, "O professor deve ter pelo menos uma disciplina").optional(),
}).refine((data) => data.nome || data.email || data.telefone || data.disciplinaIds, {
    message: "Informe ao menos um campo para atualizar",
    path: ["nome"],
});



export type CreateProfessorData = z.infer<typeof baseCreateProfessorSchema>;
//export type CreateAdminData = z.infer<typeof createAdminSchema>;
export type UpdateProfessorData = z.infer<typeof updateProfessorSchema>;
