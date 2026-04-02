"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function criarSala(formData: FormData) {
  try {
    const descricao_sala = formData.get("descricao_sala") as string
    const capacidade = parseInt(formData.get("capacidade") as string)
    const tipo_sala = formData.get("tipo_sala") as string

    const sala = await prisma.sala.create({
      data: {
        descricao_sala,
        capacidade,
        tipo_sala,
      },
    })
    
    revalidatePath("/salas")
    return { success: true, data: sala }
  } catch (error) {
    console.error("Erro ao criar sala:", error)
    return { success: false, message: "Não foi possível criar a sala." }
  }
}

export async function atualizarSala(id: number, formData: FormData) {
  try {
    const descricao_sala = formData.get("descricao_sala") as string
    const capacidade = parseInt(formData.get("capacidade") as string)
    const tipo_sala = formData.get("tipo_sala") as string

    const sala = await prisma.sala.update({
      where: { id_sala: id },
      data: {
        descricao_sala,
        capacidade,
        tipo_sala,
      },
    })
    
    revalidatePath("/salas")
    return { success: true, data: sala }
  } catch (error) {
    console.error("Erro ao atualizar sala:", error)
    return { success: false, message: "Não foi possível atualizar a sala." }
  }
}

export async function apagarSala(id: number) {
  try {
    await prisma.sala.delete({
      where: { id_sala: id },
    })
    
    revalidatePath("/salas")
    return { success: true }
  } catch (error) {
    console.error("Erro ao apagar sala:", error)
    return { success: false, message: "Não foi possível apagar a sala. Pode já estar a ser usada." }
  }
}
