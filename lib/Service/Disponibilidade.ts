import { prisma } from "@/lib/prisma"

export class DisponibilidadeCrud {

    async criarDisponibilidade(
        id_professor: number,
        slots: { id_dia: number; id_periodo: number; ordem: number }[]
    ) {
        return await prisma.disponibilidade.createMany({
            data: slots.map(({ id_dia, id_periodo, ordem }) => ({
                id_professor,
                id_dia,
                id_periodo,
                ordem,
            })),
            skipDuplicates: true,
        })
    }

    async listarPorProfessor(id_professor: number) {
        return await prisma.disponibilidade.findMany({
            where: { id_professor },
            include: {
                dia:    true,
                periodo: true,
            },
            orderBy: [
                { id_dia:    "asc" },
                { id_periodo: "asc" },
                { ordem:     "asc" },
            ],
        })
    }

    async recriarDisponibilidades(
        id_professor: number,
        slots: { id_dia: number; id_periodo: number; ordem: number }[]
    ) {
        await prisma.disponibilidade.deleteMany({ where: { id_professor } })

        if (slots.length > 0) {
            await prisma.disponibilidade.createMany({
                data: slots.map(({ id_dia, id_periodo, ordem }) => ({
                    id_professor,
                    id_dia,
                    id_periodo,
                    ordem,
                })),
            })
        }
    }

    async apagarPorProfessor(id_professor: number) {
        await prisma.disponibilidade.deleteMany({ where: { id_professor } })
    }
}

export const disponibilidadeService = new DisponibilidadeCrud()