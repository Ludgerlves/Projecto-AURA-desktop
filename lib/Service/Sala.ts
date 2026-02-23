import {prisma} from "@/lib/prisma"
import {CreateSalaData, UpdateSalaData} from "@/lib/Validation/Sala"

export class SalaCRUD{
    async criarSala(data: CreateSalaData){
        return await prisma.sala.create({data})
    }
    async atualizarSala(id: number, data: UpdateSalaData){
        return await prisma.sala.update({
            where: {idSala: id},
            data,
        })
    }
    async showSala(id: number){
        return await prisma.sala.findUnique({
            where: {idSala: id},
        })
    }
    async listarTodasSalas(){
        return await prisma.sala.findMany({
            orderBy: {nome: "asc"}
        })
    }
    async apagarSala(id: number){
        await prisma.sala.delete({
            where: {idSala: id},
        })
        return {message: "Sala eliminada com sucesso"}
    }
}
export const salaService = new SalaCRUD()