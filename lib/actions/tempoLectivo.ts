import {prisma} from '@/lib/prisma'

export async function getTemposLectivos(){
    const temposLectivos = await prisma.tempoLectivo.findMany({
        select:{
            idTempoLectivo: true,
            diaSemana: true,
            ordem: true,
            Periodo:{
                select:{periodo:true}
            },
            Disciplina:{
                select:{nome:true}
            },
            Sala:{
                select:{nome: true}
            },
            Professor:{
                select:{nome: true}
            },
            Turma:{
                select:{
                    nome: true
                }
            },
        }
    })
    return temposLectivos.map((tempoLectivo)=>({
        id_TempoLectivo: tempoLectivo.idTempoLectivo,
        professor: tempoLectivo.Professor,
        diaSemana: tempoLectivo.diaSemana,
        ordem:tempoLectivo.ordem,
        periodo: tempoLectivo.Periodo,
        disciplina:tempoLectivo.Disciplina,
        sala:tempoLectivo.Sala,
        turma: tempoLectivo.Turma
    }))
}
getTemposLectivos().then((res)=>
    console.log(JSON.stringify(res, null, 2))
)
