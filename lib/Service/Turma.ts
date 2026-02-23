import {prisma} from "@/lib/prisma"
import {CreateTurmaData, UpdateTurmaData} from "@/lib/Validation/Turma"

export class TurmaCRUD{
    async criarTurma(data: CreateTurmaData){
        return await prisma.turma.create({data})
    }

    async atualizarTurma(id: number, data: UpdateTurmaData){
        return await prisma.turma.update({
            where: {idTurma: id},
            data,
        })
    }
    async showTurma(id: number){
        return await prisma.turma.findUnique({
            where: {idTurma: id},
        })
    }
    async listarTodasTurmas(){
        return await prisma.turma.findMany({
            orderBy: {nome: "asc"},
        })
    }
    async apagarTurma(id: number){
        await prisma.turma.delete({
            where: {idTurma: id},
        })
        return {message: "Turma eliminada com sucesso"} 
    }

}
export const turmaService = new TurmaCRUD() 