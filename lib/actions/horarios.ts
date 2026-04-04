// lib/actions/horarios.ts
"use server";

import { prisma } from "@/lib/prisma";

// ─── CRUD: Ler Horários ──────────────────────────────────

export async function getHorariosByTurma(
  idTurma: number,
  anoLectivo: number,
) {
  return prisma.tempo_Lectivo.findMany({
    where: { id_turma: idTurma, ano_lectivo: anoLectivo },
    include: {
      disciplina: { select: { descricao_disciplina: true } },
      professor: { select: { nome_professor: true } },
      sala: { select: { descricao_sala: true, capacidade: true } },
      dia: { select: { descricao_dia: true } },
      periodo: { select: { descricao_periodo: true } },
    },
    orderBy: [{ id_dia: "asc" }, { id_periodo: "asc" }, { ordem: "asc" }],
  });
}

export async function getHorariosByProfessor(
  idProfessor: number,
  anoLectivo: number,
) {
  return prisma.tempo_Lectivo.findMany({
    where: { id_professor: idProfessor, ano_lectivo: anoLectivo },
    include: {
      disciplina: { select: { descricao_disciplina: true } },
      turma: { select: { descricao_turma: true } },
      sala: { select: { descricao_sala: true, capacidade: true } },
      dia: { select: { descricao_dia: true } },
      periodo: { select: { descricao_periodo: true } },
    },
    orderBy: [{ id_dia: "asc" }, { id_periodo: "asc" }, { ordem: "asc" }],
  });
}

export async function getHorariosBySala(
  idSala: number,
  anoLectivo: number,
) {
  return prisma.tempo_Lectivo.findMany({
    where: { id_sala: idSala, ano_lectivo: anoLectivo },
    include: {
      disciplina: { select: { descricao_disciplina: true } },
      professor: { select: { nome_professor: true } },
      turma: { select: { descricao_turma: true } },
      dia: { select: { descricao_dia: true } },
      periodo: { select: { descricao_periodo: true } },
    },
    orderBy: [{ id_dia: "asc" }, { id_periodo: "asc" }, { ordem: "asc" }],
  });
}

export async function getAllHorarios(
  anoLectivo: number,
) {
  return prisma.tempo_Lectivo.findMany({
    where: { ano_lectivo: anoLectivo },
    include: {
      disciplina: { select: { descricao_disciplina: true } },
      professor: { select: { nome_professor: true } },
      turma: { select: { descricao_turma: true } },
      sala: { select: { descricao_sala: true, capacidade: true } },
      dia: { select: { descricao_dia: true } },
      periodo: { select: { descricao_periodo: true } },
    },
    orderBy: [
      { id_turma: "asc" },
      { id_dia: "asc" },
      { id_periodo: "asc" },
      { ordem: "asc" },
    ],
  });
}

// ─── CRUD: Apagar Horários ───────────────────────────────

export async function deleteHorario(idTempoLectivo: number) {
  const existente = await prisma.tempo_Lectivo.findUnique({
    where: { id_tempoLectivo: idTempoLectivo },
  });

  if (!existente) {
    throw new Error("Tempo lectivo não encontrado");
  }

  await prisma.tempo_Lectivo.delete({
    where: { id_tempoLectivo: idTempoLectivo },
  });

  return { message: "Tempo lectivo eliminado com sucesso" };
}

export async function deleteAllHorarios(anoLectivo: number) {
  const result = await prisma.tempo_Lectivo.deleteMany({
    where: { ano_lectivo: anoLectivo },
  });

  return {
    message: `${result.count} horário(s) eliminado(s)`,
    count: result.count,
  };
}

export async function deleteHorariosByTurma(
  idTurma: number,
  anoLectivo: number,
) {
  const result = await prisma.tempo_Lectivo.deleteMany({
    where: { id_turma: idTurma, ano_lectivo: anoLectivo },
  });

  return {
    message: `${result.count} horário(s) da turma eliminado(s)`,
    count: result.count,
  };
}

// ─── Estatísticas ─────────────────────────────────────────

export async function getHorarioStats(anoLectivo: number) {
  const [total, porTurma, porProfessor, porSala] = await Promise.all([
    prisma.tempo_Lectivo.count({ where: { ano_lectivo: anoLectivo } }),
    prisma.tempo_Lectivo.groupBy({
      by: ["id_turma"],
      where: { ano_lectivo: anoLectivo },
      _count: true,
    }),
    prisma.tempo_Lectivo.groupBy({
      by: ["id_professor"],
      where: { ano_lectivo: anoLectivo },
      _count: true,
    }),
    prisma.tempo_Lectivo.groupBy({
      by: ["id_sala"],
      where: { ano_lectivo: anoLectivo },
      _count: true,
    }),
  ]);

  return { total, porTurma, porProfessor, porSala };
}
