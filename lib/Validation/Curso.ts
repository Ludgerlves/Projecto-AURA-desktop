import { z } from "zod";

export const createCursoSchema = z.object({
    descricao_curso: z.string().min(2, "Descrição deve ter pelo menos 2 caracteres"),
});

export const updateCursoSchema = z.object({
    descricao_curso: z.string().min(2, "Descrição deve ter pelo menos 2 caracteres").optional(),
});

export type CreateCursoData = z.infer<typeof createCursoSchema>;
export type UpdateCursoData = z.infer<typeof updateCursoSchema>;