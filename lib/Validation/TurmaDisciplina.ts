import { z } from "zod";

export const createTurmaDisciplinaSchema = z.object({
    id_turma:         z.number().int().positive("Turma é obrigatória"),
    id_disciplina:    z.number().int().positive("Disciplina é obrigatória"),
    aulas_por_semana: z.number().int().positive("Aulas por semana deve ser positivo"),
});

export const updateTurmaDisciplinaSchema = z.object({
    aulas_por_semana: z.number().int().positive("Aulas por semana deve ser positivo").optional(),
});

export type CreateTurmaDisciplinaData = z.infer<typeof createTurmaDisciplinaSchema>;
export type UpdateTurmaDisciplinaData = z.infer<typeof updateTurmaDisciplinaSchema>;