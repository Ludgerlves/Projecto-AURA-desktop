import {prisma} from "@/lib/prisma"
import {CreateTurmaData, UpdateTurmaData} from "@/lib/Validation/Turma"

export class TurmaCRUD{
    async criarTurma(data: CreateTurmaData){
        return await prisma.turma.create({data})
    }

    async atualizarTurma(nome_turma: string, data: UpdateTurmaData){
        return await prisma.turma.update({
            where: {nome_turma},
            data,
        })
    }
    async showTurma(nome_turma: string){
        return await prisma.turma.findUnique({
            where: {nome_turma},
        })
    }
    async listarTodasTurmas(){
        return await prisma.turma.findMany({
            orderBy: {nome_turma: "asc"},
        })
    }
    async apagarTurma(nome_turma: string){
        await prisma.turma.delete({
            where: {nome_turma},
        })
        return {message: "Turma eliminada com sucesso"} 
    }

}
export const turmaService = new TurmaCRUD() 