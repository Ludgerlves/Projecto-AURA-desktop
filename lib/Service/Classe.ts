import {prisma} from "@/lib/prisma";
import{CreateClasseData, UpdateClasseData} from "@/lib/Validation/Classe"

export class ClasseCRUD {
    async criarTurma(data: CreateClasseData){
        return await prisma.classe.create({data})
    }

    async atualizarTurma(nomeClasse: string, data: UpdateClasseData){
        return await prisma.classe.update({
            where: {nome: nomeClasse},
            data,
        })
    }
    async showTurma(nomeClasse: string){
        return await prisma.classe.findUnique({
            where: {nome: nomeClasse},
        })
    }
    async listarTodasTurmas(){
        return await prisma.classe.findMany({
            orderBy: {nome: "asc"}
        })
    }
    async apagarTurma(nomeClasse: string){
        await prisma.classe.delete({
            where: {nome: nomeClasse},
        
        })
        return {message: "Turma eliminada com sucesso"}
    }
    
}
export const classeService = new ClasseCRUD();
