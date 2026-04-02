import { z } from "zod";

export const createProfTurmaDisciplinaSchema = z.object({
    id_professor:  z.number().int().positive("Professor é obrigatório"),
    id_turma:      z.number().int().positive("Turma é obrigatória"),
    id_disciplina: z.number().int().positive("Disciplina é obrigatória"),
});

export type CreateProfTurmaDisciplinaData = z.infer<typeof createProfTurmaDisciplinaSchema>;