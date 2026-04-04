// lib/actions/tempoLectivo.ts
"use server";

import { prisma } from "@/lib/prisma";

// Mapeia nomes curtos do DB para nomes completos esperados pelo frontend
const DIA_MAP: Record<string, string> = {
  "Segunda": "Segunda-feira",
  "Terça": "Terça-feira",
  "Quarta": "Quarta-feira",
  "Quinta": "Quinta-feira",
  "Sexta": "Sexta-feira",
  "Segunda-feira": "Segunda-feira",
  "Terça-feira": "Terça-feira",
  "Quarta-feira": "Quarta-feira",
  "Quinta-feira": "Quinta-feira",
  "Sexta-feira": "Sexta-feira",
};

export async function getTemposLectivos() {
  const raw = await prisma.tempo_Lectivo.findMany({
    include: {
      disciplina: { select: { descricao_disciplina: true } },
      professor: { select: { nome_professor: true } },
      turma: { select: { descricao_turma: true } },
      sala: { select: { descricao_sala: true } },
      dia: { select: { descricao_dia: true } },
      periodo: { select: { descricao_periodo: true } },
    },
    orderBy: [{ id_dia: "asc" }, { id_periodo: "asc" }, { ordem: "asc" }],
  });

  return raw.map((t) => ({
    id_TempoLectivo: t.id_tempoLectivo,
    diaSemana: DIA_MAP[t.dia.descricao_dia] ?? t.dia.descricao_dia,
    ordem: t.ordem,
    professor: { nome: t.professor.nome_professor },
    periodo: { periodo: t.periodo.descricao_periodo },
    disciplina: { nome: t.disciplina.descricao_disciplina },
    sala: { nome: t.sala.descricao_sala },
    turma: { nome: t.turma.descricao_turma },
  }));
}
