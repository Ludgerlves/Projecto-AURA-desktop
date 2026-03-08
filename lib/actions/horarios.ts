'use server'
import { prisma } from "../prisma"
 
const ORDEM_DIAS = [
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
];

const temposDia = 6;

export async function gerarTemposLectivos(turmaId:number,salaId: number, periodo: string ) {
    const profturma = await prisma.profTurmaDisciplina.findMany({
        where: {turmaId},
        include:{
            Professor:{
                include:{
                    Disponibilidade:{
                        where:{periodo},
                        orderBy: {ordem: "asc"},
                    }
                }
            }
        }
    })
    gerarTemposLectivos(1,1,"Tarde").then((res)=>
        console.log(JSON.stringify, res, null, 2)
    )
}