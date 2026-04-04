// lib/Algoritmo-genetico/fitness.ts

import type {
  Cromossoma,
  AulaPendente,
  ConflitoItem,
  OpcoesGeracoes,
  FitnessResult,
} from "./types";

// ─── Tipos auxiliares (independentes do Prisma) ───────────

interface SalaInput {
  id_sala: number;
  descricao_sala: string;
  capacidade: number;
  tipo_sala: string;
}

interface DisponibilidadeInput {
  id_professor: number;
  id_dia: number;
  id_periodo: number;
  ordem: number;
}

// ─── Função Principal ─────────────────────────────────────

export function avaliarFitness(
  cromossoma: Cromossoma,
  aulasPendentes: AulaPendente[],
  salas: SalaInput[],
  disponibilidades: DisponibilidadeInput[],
  opcoes?: Partial<OpcoesGeracoes>,
): FitnessResult {
  let hardPenalty = 0;
  let softPenalty = 0;
  const conflitos: ConflitoItem[] = [];

  const salasMap = new Map(salas.map((s) => [s.id_sala, s]));
  const dispSet = new Set(
    disponibilidades.map(
      (d) => `${d.id_professor}-${d.id_dia}-${d.id_periodo}`,
    ),
  );

  // ════════════════════════════════════════════════════════
  //  RESTRIÇÕES HARD
  // ════════════════════════════════════════════════════════

  // HARD 1: Conflito de professor
  const profSlots = new Map<string, number[]>();
  for (let i = 0; i < cromossoma.length; i++) {
    const gene = cromossoma[i];
    const aula = aulasPendentes[i];
    const chave = `${aula.id_professor}-${gene.id_dia}-${gene.id_periodo}-${gene.ordem}`;
    if (!profSlots.has(chave)) profSlots.set(chave, []);
    profSlots.get(chave)!.push(i);
  }
  for (const [chave, indices] of profSlots) {
    if (indices.length > 1) {
      const penalidade = 100 * (indices.length - 1);
      hardPenalty += penalidade;
      const profId = aulasPendentes[indices[0]].id_professor;
      conflitos.push({
        id: `conf-prof-${chave}`,
        tipo: "professor",
        rigidez: "alta",
        descricao: `Professor ${profId} alocado ${indices.length} vezes no mesmo slot (${chave})`,
      });
    }
  }

  // HARD 2: Conflito de sala
  const salaSlots = new Map<string, number[]>();
  for (let i = 0; i < cromossoma.length; i++) {
    const gene = cromossoma[i];
    const chave = `${gene.id_sala}-${gene.id_dia}-${gene.id_periodo}-${gene.ordem}`;
    if (!salaSlots.has(chave)) salaSlots.set(chave, []);
    salaSlots.get(chave)!.push(i);
  }
  for (const [chave, indices] of salaSlots) {
    if (indices.length > 1) {
      const penalidade = 100 * (indices.length - 1);
      hardPenalty += penalidade;
      const salaId = cromossoma[indices[0]].id_sala;
      conflitos.push({
        id: `conf-sala-${chave}`,
        tipo: "sala",
        rigidez: "alta",
        descricao: `Sala ${salaId} com ${indices.length} aulas no mesmo slot (${chave})`,
      });
    }
  }

  // HARD 3: Conflito de turma
  const turmaSlots = new Map<string, number[]>();
  for (let i = 0; i < cromossoma.length; i++) {
    const gene = cromossoma[i];
    const aula = aulasPendentes[i];
    const chave = `${aula.id_turma}-${gene.id_dia}-${gene.id_periodo}-${gene.ordem}`;
    if (!turmaSlots.has(chave)) turmaSlots.set(chave, []);
    turmaSlots.get(chave)!.push(i);
  }
  for (const [chave, indices] of turmaSlots) {
    if (indices.length > 1) {
      const penalidade = 100 * (indices.length - 1);
      hardPenalty += penalidade;
      const turmaId = aulasPendentes[indices[0]].id_turma;
      conflitos.push({
        id: `conf-turma-${chave}`,
        tipo: "turma",
        rigidez: "alta",
        descricao: `Turma ${turmaId} com ${indices.length} aulas no mesmo slot (${chave})`,
      });
    }
  }

  // HARD 4-6: Validações por gene individual
  for (let i = 0; i < cromossoma.length; i++) {
    const gene = cromossoma[i];
    const aula = aulasPendentes[i];
    const sala = salasMap.get(gene.id_sala);

    // HARD 4: Capacidade insuficiente
    if (sala && aula.quantidade_alunos > sala.capacidade) {
      hardPenalty += 50;
      conflitos.push({
        id: `conf-cap-${i}`,
        tipo: "sala",
        rigidez: "alta",
        descricao: `Sala ${sala.descricao_sala} (cap: ${sala.capacidade}) não comporta ${aula.quantidade_alunos} alunos`,
      });
    }

    // HARD 5: Tipo de sala incompatível
    if (sala && aula.tipo_sala && sala.tipo_sala !== aula.tipo_sala) {
      hardPenalty += 50;
      conflitos.push({
        id: `conf-tipo-${i}`,
        tipo: "sala",
        rigidez: "alta",
        descricao: `Disciplina precisa "${aula.tipo_sala}" mas sala é "${sala.tipo_sala}"`,
      });
    }

    // HARD 6: Professor indisponível
    if (opcoes?.respeitarDisponibilidade !== false) {
      const dispChave = `${aula.id_professor}-${gene.id_dia}-${gene.id_periodo}`;
      if (!dispSet.has(dispChave)) {
        hardPenalty += 80;
        conflitos.push({
          id: `conf-disp-${i}`,
          tipo: "professor",
          rigidez: "alta",
          descricao: `Professor ${aula.id_professor} não tem disponibilidade para dia ${gene.id_dia}, período ${gene.id_periodo}`,
        });
      }
    }
  }

  // ════════════════════════════════════════════════════════
  //  RESTRIÇÕES SOFT
  // ════════════════════════════════════════════════════════

  for (let i = 0; i < cromossoma.length; i++) {
    const gene = cromossoma[i];
    const aula = aulasPendentes[i];
    const sala = salasMap.get(gene.id_sala);

    // SOFT 1: Sala desperdiçada
    if (sala) {
      const waste = sala.capacidade - aula.quantidade_alunos;
      if (waste > 15) {
        softPenalty += waste * 0.5;
      }
    }
  }

  // SOFT 2: Furos no horário (fora do loop, calculado uma vez)
  if (opcoes?.evitarFuros) {
    softPenalty += calcularFuros(cromossoma, aulasPendentes);
  }

  // ════════════════════════════════════════════════════════
  //  SCORE FINAL
  // ════════════════════════════════════════════════════════

  const score = Math.max(0, 1000 - hardPenalty - softPenalty);

  return {
    score,
    hardPenalty,
    softPenalty,
    conflitos,
  };
}

// ─── Função Auxiliar: Calcular Furos ─────────────────────

function calcularFuros(
  cromossoma: Cromossoma,
  aulasPendentes: AulaPendente[],
): number {
  let furos = 0;

  const turmasPorDia = new Map<string, number[]>();
  for (let i = 0; i < cromossoma.length; i++) {
    const gene = cromossoma[i];
    const aula = aulasPendentes[i];
    const chave = `turma-${aula.id_turma}-dia-${gene.id_dia}`;
    if (!turmasPorDia.has(chave)) turmasPorDia.set(chave, []);
    turmasPorDia.get(chave)!.push(gene.ordem);
  }

  for (const ordens of turmasPorDia.values()) {
    ordens.sort((a, b) => a - b);
    for (let j = 1; j < ordens.length; j++) {
      if (ordens[j] - ordens[j - 1] > 1) {
        furos += 15;
      }
    }
  }

  return furos;
}
