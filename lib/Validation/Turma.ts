import { z } from "zod";

export const createTurmaSchema = z.object({
    descricao_turma:  z.string().min(2, "Descrição deve ter pelo menos 2 caracteres"),
    id_curso:         z.number().int().positive("Curso é obrigatório"),
    id_classe:        z.number().int().positive("Classe é obrigatória"),
    id_sala:          z.number().int().positive("Sala é obrigatória").optional(),
    quantidade_alunos: z.number().int().positive("Quantidade de alunos deve ser positiva"),
});

export const updateTurmaSchema = z.object({
    descricao_turma:  z.string().min(2, "Descrição deve ter pelo menos 2 caracteres").optional(),
    id_curso:         z.number().int().positive("Curso é obrigatório").optional(),
    id_classe:        z.number().int().positive("Classe é obrigatória").optional(),
    id_sala:          z.number().int().positive("Sala preferencial é obrigatória").optional(),
    quantidade_alunos: z.number().int().positive("Quantidade de alunos deve ser positiva").optional(),
}).refine(
    (data) => Object.values(data).some((v) => v !== undefined),
    { message: "Informe ao menos um campo para atualizar", path: ["descricao_turma"] }
);

export type CreateTurmaData = z.infer<typeof createTurmaSchema>;
export type UpdateTurmaData = z.infer<typeof updateTurmaSchema>;