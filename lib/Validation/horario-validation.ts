import {z} from "zod";

export const tempo_lectivoItemSchema = z.object({
    id_tempoLectivo: z.number().int().positive(),
    id_dia: z.number().int().positive(),
    id_atribuicao: z.number().int().positive(),
    ordem: z.number().int().positive(),
    id_professor: z.number().int().positive(),
    id_disciplina: z.number().int().positive(),
    id_turma:z.number().int().positive(),
    id_sala: z.number().int().positive(),
    id_periodo: z.number().int().positive(),
    ano_lectivo: z.number().int().positive()
})
export type Tempo_Lectivo_Data = z.infer<typeof tempo_lectivoItemSchema>