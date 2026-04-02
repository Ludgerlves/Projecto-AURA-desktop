import { prisma } from "@/lib/prisma";
import { CreateClasseData, UpdateClasseData } from "@/lib/Validation/Classe";

export class ClasseCRUD {
    async criarClasse(data: CreateClasseData) {
        return await prisma.classe.create({ data });
    }

    async atualizarClasse(id_classe: number, data: UpdateClasseData) {
        return await prisma.classe.update({
            where: { id_classe },
            data,
        });
    }

    async showClasse(id_classe: number) {
        return await prisma.classe.findUnique({
            where: { id_classe },
        });
    }

    async listarTodas() {
        return await prisma.classe.findMany({
            orderBy: { descricao_classe: "asc" },
        });
    }

    async apagarClasse(id_classe: number) {
        await prisma.classe.delete({
            where: { id_classe },
        });
        return { message: "Classe eliminada com sucesso" };
    }
}

export const classeService = new ClasseCRUD();