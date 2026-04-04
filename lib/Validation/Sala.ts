import { z } from "zod";

export const createSalaSchema = z.object({
    descricao_sala: z.string().min(1, "Descrição da sala é obrigatória"),
    capacidade: z.number().int().positive("Capacidade deve ser um número positivo"),
    tipo_sala: z.string().min(1, "Tipo de sala é obrigatório"),
});

export const updateSalaSchema = z.object({
    descricao_sala: z.string().min(1, "Descrição da sala é obrigatória").optional(),
    capacidade: z.number().int().positive("Capacidade deve ser um número positivo").optional(),
    tipo_sala: z.string().min(1, "Tipo de sala é obrigatório").optional(),
});

export type CreateSalaData = z.infer<typeof createSalaSchema>;
export type UpdateSalaData = z.infer<typeof updateSalaSchema>;