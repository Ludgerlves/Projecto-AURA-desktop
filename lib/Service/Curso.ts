import {prisma} from '@/lib/prisma'
import {CreateCursoData, UpdateCursoData} from '@/lib/Validation/Curso'

export class CursoCRUD{
    async criarCurso(data: CreateCursoData){
        return await prisma.curso.create({data})
    }
    async atualizarCurso(nomeCurso: string, data: UpdateCursoData){
        return await prisma.curso.update({
            where: {nome: nomeCurso},
            data,
        })
    }
    async showCurso(nomeCurso: string){
        return await prisma.curso.findUnique({
            where: {nome: nomeCurso},
        })
    }
    async listarTodosCursos(){
        return await prisma.curso.findMany({
            orderBy: {nome: "asc"}
        })
    }
    async apagarCurso(nomeCurso: string){
        await prisma.curso.delete({
            where: {nome: nomeCurso},
        })
        return {message: "Curso eliminado com sucesso"}
    }
}
export const cursoService = new CursoCRUD()
