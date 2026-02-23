
import { prisma } from "../prisma"
 export async function getProfessoresDisponibilidade() {
    const professores = await prisma.professor.findMany({
        select:{
            id_professor: true,
            nome: true,
            telefone: true,
            email: true,
            Disponibilidade:{
                select:{
                    DiaSemana:{select: {nome:true} },
                    ordem: true,
                },
                distinct: ["diaSemana"],

            },
            ProfTurma:{
                select:{
                    Turma: {select:{nome:true,idTurma:true} }
                },
            },
            
        },

    })
    return professores.map((professor)=>({
        id_professor: professor.id_professor,
        nome: professor.nome,
        email: professor.email,
        telefone: professor.telefone,
        Disponibilidade: professor.Disponibilidade.map((d)=> ({
            ordem: d.ordem,
            diaSemana: d.DiaSemana,
        })),
        turmas: professor.ProfTurma.map((pt)=>pt.Turma),
    }))
  }
getProfessoresDisponibilidade().then((res)=>
    console.log(JSON.stringify(res, null, 2))
)