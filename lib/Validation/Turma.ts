import { z } from "zod";

export const createTurmaSchema = z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    classe: z.coerce.string().min(1, "Classe é obrigatória"),
    curso: z.coerce.string().min(1, "Curso é obrigatório"),
});

export const updateTurmaSchema = z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").optional(),
    classe: z.coerce.string().min(1, "Classe é obrigatória").optional(),
    curso: z.coerce.string().min(1, "Curso é obrigatório").optional(),
}).refine((data) => data.nome || data.classe || data.curso, {
    message: "Informe ao menos um campo para atualizar",
    path: ["nome"],
});

export type CreateTurmaData = z.infer<typeof createTurmaSchema>;
export type UpdateTurmaData = z.infer<typeof updateTurmaSchema>;
