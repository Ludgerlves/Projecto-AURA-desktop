// lib/Algoritmo-genetico/chromosome.ts

import type { Gene, Cromossoma, Populacao, AulaPendente } from "./types";

// ─── Tipos auxiliares (independentes do Prisma) ───────────

interface SalaInput {
  id_sala: number;
  descricao_sala: string;
  capacidade: number;
  tipo_sala: string;
}

interface DiaSemanaInput {
  id_dia: number;
  descricao_dia: string;
}

interface PeriodoInput {
  id_periodo: number;
  descricao_periodo: string;
}

// ─── Funções de Criação ───────────────────────────────────

export function criarGeneAleatorio(
  salas: SalaInput[],
  dias: DiaSemanaInput[],
  periodos: PeriodoInput[],
): Gene {
  return {
    id_sala: salas[Math.floor(Math.random() * salas.length)].id_sala,
    id_dia: dias[Math.floor(Math.random() * dias.length)].id_dia,
    id_periodo: periodos[Math.floor(Math.random() * periodos.length)].id_periodo,
    ordem: Math.floor(Math.random() * 6) + 1, // 1-6 (6 tempos por dia)
  };
}

export function criarCromossomo(
  aulasPendentes: AulaPendente[],
  salas: SalaInput[],
  dias: DiaSemanaInput[],
  periodos: PeriodoInput[],
): Cromossoma {
  return aulasPendentes.map(() =>
    criarGeneAleatorio(salas, dias, periodos),
  );
}

export function criarPopulacao(
  tamanho: number,
  aulasPendentes: AulaPendente[],
  salas: SalaInput[],
  dias: DiaSemanaInput[],
  periodos: PeriodoInput[],
): Populacao {
  return Array.from({ length: tamanho }, () =>
    criarCromossomo(aulasPendentes, salas, dias, periodos),
  );
}
