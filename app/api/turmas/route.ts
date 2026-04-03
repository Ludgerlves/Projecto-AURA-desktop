// app/api/users/route.ts
import { NextResponse } from 'next/server';
//import { PrismaClient } from '@prisma/client';
import { prisma } from "@/lib/prisma";


//const prisma = new PrismaClient();

export async function GET() {
  try {
    // Procura os dados na base de dados usando o Prisma
    const turmas = await prisma.turma.findMany({});
    const turmasFormatadas = turmas.map(turma => ({
      id: turma.id_turma,
      nome: turma.descricao_turma,
      checked : true
    }));
    return NextResponse.json({ turmas: turmasFormatadas });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao procurar turmas" }, 
      { status: 500 }
    );
  }
}
