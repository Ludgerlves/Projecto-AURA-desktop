
import { prisma } from "../prisma"

export async function getProfessoresDisponibilidade() {
    const professorDiaSemana = await prisma.professor.findMany({
        include: {
            Disponibilidade:{
                where: {
                    DiaSemana : {
                        nome: 'Segunda-Feira'
                    }
                }
            }
        }
    })
    return professorDiaSemana
}

console.log(getProfessoresDisponibilidade())