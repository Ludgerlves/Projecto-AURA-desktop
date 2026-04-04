// lib/actions/gerarHorario.ts
"use server";

import { prisma } from "@/lib/prisma";
import {
  evoluir,
  type ConflitoItem,
  type ResultadoGeracao,
  type AulaPendente,
} from "@/lib/Algoritmo-genetico";

// ─── Tipos ────────────────────────────────────────────────

interface TurmaOption {
  id: number;
  nome: string;
  temAtribuicoes: boolean;
}

interface OpcoesGeracao {
  respeitarDisponibilidade: boolean;
  evitarFuros: boolean;
  balancearCarga: boolean;
}

// ─── Ler Turmas Disponíveis para Geração ──────────────────

export async function getTurmasParaGeracao(): Promise<TurmaOption[]> {
  const turmas = await prisma.turma.findMany({
    orderBy: { descricao_turma: "asc" },
    include: {
      profTurmaDisciplina: true,
    },
  });

  return turmas.map((turma) => ({
    id: turma.id_turma,
    nome: turma.descricao_turma,
    temAtribuicoes: turma.profTurmaDisciplina.length > 0,
  }));
}

// ─── Gerar Horários (Server Action Principal) ─────────────

export async function gerarHorarios(
  turmaIds: number[],
  periodo: string,
  opcoes: OpcoesGeracao,
): Promise<ResultadoGeracao> {
  if (turmaIds.length === 0) {
    return {
      status: "error",
      message: "Nenhuma turma selecionada",
      horariosGerados: 0,
      fitness: 0,
      generationsRun: 0,
      conflitos: [],
    };
  }

  try {
    // 1. Ler dados de referência
    const [salas, dias, periodos, disponibilidades] = await Promise.all([
      prisma.sala.findMany({
        select: {
          id_sala: true,
          descricao_sala: true,
          capacidade: true,
          tipo_sala: true,
        },
      }),
      prisma.diaSemana.findMany({
        select: { id_dia: true, descricao_dia: true },
      }),
      prisma.periodo.findMany({
        select: { id_periodo: true, descricao_periodo: true },
      }),
      prisma.disponibilidade.findMany({
        select: {
          id_professor: true,
          id_dia: true,
          id_periodo: true,
          ordem: true,
        },
      }),
    ]);

    // 2. Ler atribuições professor-turma-disciplina
    const atribuicoes = await prisma.profTurmaDisciplina.findMany({
      where: { id_turma: { in: turmaIds } },
      include: {
        disciplina: true,
        turma: true,
      },
    });

    if (atribuicoes.length === 0) {
      return {
        status: "error",
        message: "Nenhuma atribuição professor-turma-disciplina encontrada para as turmas selecionadas",
        horariosGerados: 0,
        fitness: 0,
        generationsRun: 0,
        conflitos: [],
      };
    }

    // 3. Ler turmas-disciplinas (carga horária)
    const turmasDisciplinas = await prisma.turmaDisciplina.findMany({
      where: { id_turma: { in: turmaIds } },
    });

    // 4. Construir lista de aulas pendentes
    const aulasPendentes: AulaPendente[] = [];
    for (const atribuicao of atribuicoes) {
      const td = turmasDisciplinas.find(
        (t) =>
          t.id_turma === atribuicao.id_turma &&
          t.id_disciplina === atribuicao.id_disciplina,
      );
      const aulasPorSemana = td?.aulas_por_semana ?? 1;

      for (let i = 0; i < aulasPorSemana; i++) {
        aulasPendentes.push({
          id_atribuicao: atribuicao.id_atribuicao,
          id_professor: atribuicao.id_professor,
          id_turma: atribuicao.id_turma,
          id_disciplina: atribuicao.id_disciplina,
          indice_aula: i,
          tipo_sala: atribuicao.disciplina.tipo_sala,
          quantidade_alunos: atribuicao.turma.quantidade_alunos,
        });
      }
    }

    // 5. Determinar ano lectivo atual
    const anoLectivo = new Date().getFullYear();

    // 6. Executar algoritmo genético
    const resultado = evoluir(
      aulasPendentes,
      salas,
      dias,
      periodos,
      disponibilidades,
      {
        populationSize: 200,
        maxGenerations: 1000,
        targetScore: 950,
      },
    );

    // 7. Verificar se há conflitos hard
    if (resultado.melhorFitness.hardPenalty > 0) {
      return {
        status: "error",
      message: `Horário gerado com ${resultado.melhorFitness.conflitos.length} conflito(s) não resolvível(is). Tente regenerar ou ajustar as restrições.`,
      horariosGerados: 0,
      fitness: resultado.melhorFitness.score,
      generationsRun: resultado.geracoes,
      conflitos: resultado.melhorFitness.conflitos,
      };
    }

    // 8. Converter cromossomo para inserts no Prisma
    const inserts = resultado.melhorCromossomo.map((gene, i) => {
      const aula = aulasPendentes[i];
      return {
        id_atribuicao: aula.id_atribuicao,
        id_professor: aula.id_professor,
        id_turma: aula.id_turma,
        id_disciplina: aula.id_disciplina,
        id_sala: gene.id_sala,
        id_dia: gene.id_dia,
        id_periodo: gene.id_periodo,
        ordem: gene.ordem,
        ano_lectivo: anoLectivo,
      };
    });

    // 9. Limpar horários existentes para estas turmas neste ano
    await prisma.tempo_Lectivo.deleteMany({
      where: {
        id_turma: { in: turmaIds },
        ano_lectivo: anoLectivo,
      },
    });

    // 10. Salvar novos horários
    await prisma.tempo_Lectivo.createMany({
      data: inserts,
      skipDuplicates: true,
    });

    return {
      status: "success",
      horariosGerados: inserts.length,
      fitness: resultado.melhorFitness.score,
      generationsRun: resultado.geracoes,
      conflitos: resultado.melhorFitness.conflitos,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro inesperado ao gerar horários";
    return {
      status: "error",
      message: message,
      horariosGerados: 0,
      fitness: 0,
      generationsRun: 0,
      conflitos: [],
    };
  }
}
