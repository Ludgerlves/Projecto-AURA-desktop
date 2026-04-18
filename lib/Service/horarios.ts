import {prisma} from '@/lib/prisma'
import { Tempo_Lectivo_Data } from '../Validation/horario-validation'

export class Horarios{
    async criar_horarios(tempos_lectivos: Tempo_Lectivo_Data[]):Promise<{
        success: boolean;
        conflicts: string[];
        count: number;
    }> {
        try {
        const resultado = await prisma.tempo_Lectivo.createMany({
            data: tempos_lectivos.map(t =>({
                id_atribuicao: t.id_atribuicao,
                id_professor: t.id_professor,
                id_turma: t.id_turma,
                id_sala: t.id_sala,
                ordem: t.ordem,
                id_dia: t.id_dia,
                id_disciplina: t.id_disciplina,
                ano_lectivo: t.ano_lectivo,
                id_periodo: t.id_periodo

            })),
            skipDuplicates: true,
        });
        return{success: true, count: resultado.count, conflicts:[]}
    }
    catch(err:any){
        return {success: false, count: 0,conflicts:[err.message]}
    } 

    }
    async limpar_horarios(ano_lectivo: number){
        return prisma.tempo_Lectivo.deleteMany({
            where: {ano_lectivo: ano_lectivo}
        })
    }

    async buscar_por_turma(idTurma: number, ano_lectivo:number){
        return prisma.tempo_Lectivo.findMany({
            where:{ano_lectivo: ano_lectivo, id_turma: idTurma},
            include:{
                disciplina: true,
                sala: true,
                professor: true,
                dia: true,
                periodo: true,
            }
        })
    }

    async buscar_por_professor(idProfessor: number, ano_lectivo:number){
        return prisma.tempo_Lectivo.findMany({
            where: {id_professor: idProfessor, ano_lectivo: ano_lectivo},
            include:{
                disciplina: true,
                sala: true,
                turma: true,
                dia: true,
                periodo: true,
            }
        })
        
    }
    
}