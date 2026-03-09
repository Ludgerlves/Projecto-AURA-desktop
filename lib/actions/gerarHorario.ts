'use server'
import {prisma} from '@/lib/prisma';

export async function gerarHorarios(turma:string) {
   try {
     const Disponibilidade= await prisma.disponibilidade.findMany({
        where:{
            DiaSemana: {
                nome: "Segunda-feira"
            }
        }
     })
    console.log( Disponibilidade)
   } catch (error) {
    console.error(error)
   }
}


