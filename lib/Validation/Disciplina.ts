import { z } from "zod";

export const createDisciplinaSchema = z.object({
    descricao_disciplina: z.string().min(2, "Descrição deve ter pelo menos 2 caracteres"),
    tipo_sala: z.string().min(1, "Tipo de sala é obrigatório"),
});

export const updateDisciplinaSchema = z.object({
    descricao_disciplina: z.string().min(2, "Descrição deve ter pelo menos 2 caracteres").optional(),
    tipo_sala: z.string().min(1, "Tipo de sala é obrigatório").optional(),
});

export type CreateDisciplinaData = z.infer<typeof createDisciplinaSchema>;
export type UpdateDisciplinaData = z.infer<typeof updateDisciplinaSchema>;