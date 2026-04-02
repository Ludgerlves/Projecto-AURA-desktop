import { z } from "zod";

export const createClasseSchema = z.object({
    descricao_classe: z.string().min(2, "Descrição deve ter pelo menos 2 caracteres"),
});

export const updateClasseSchema = z.object({
    descricao_classe: z.string().min(2, "Descrição deve ter pelo menos 2 caracteres").optional(),
});

export type CreateClasseData = z.infer<typeof createClasseSchema>;
export type UpdateClasseData = z.infer<typeof updateClasseSchema>;