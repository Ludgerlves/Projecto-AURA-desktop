import type {
  Cromossoma,
  Populacao,
  AulaPendente,
  FitnessResult,
  EvolutionConfig,
  ResultadoEvolucao,
} from "./types";
import { criarPopulacao } from "./populacao";
import { avaliarFitness } from "./fitness";
import { selecaoTorneio } from "./selecao";
import { crossoverUmPonto } from "./crossover";
import { mutar } from "./mutacao";
import { DEFAULT_CONFIG } from "./config";

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
interface DisponibilidadeInput {
  id_professor: number;
  id_dia: number;
  id_periodo: number;
  ordem: number;
}

// ─── Função Principal: Loop Evolutivo ─────────────────────
export function evoluir(
  aulasPendentes: AulaPendente[],
  salas: SalaInput[],
  dias: DiaSemanaInput[],
  periodos: PeriodoInput[],
  disponibilidades: DisponibilidadeInput[],
  config: Partial<EvolutionConfig> = {},
): ResultadoEvolucao {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  // 1. Criar população inicial
  let populacao = criarPopulacao(
    cfg.populationSize,
    aulasPendentes,
    salas,
    dias,
    periodos,
  );
  const historico: number[] = [];
  let melhorCromossomo: Cromossoma = populacao[0];
  let melhorFitness: FitnessResult = { score: 0, hardPenalty: 0, softPenalty: 0, conflitos: [] };
  // 2. Loop de gerações
  for (let geracao = 0; geracao < cfg.maxGenerations; geracao++) {
    // Avaliar toda a população
    const fitnessScores = populacao.map((cromossoma) =>
      avaliarFitness(cromossoma, aulasPendentes, salas, disponibilidades),
    );
    // Encontrar o melhor da geração
    let indiceMelhor = 0;
    for (let i = 1; i < fitnessScores.length; i++) {
      if (fitnessScores[i].score > fitnessScores[indiceMelhor].score) {
        indiceMelhor = i;
      }
    }
    if (fitnessScores[indiceMelhor].score > melhorFitness.score) {
      melhorFitness = fitnessScores[indiceMelhor];
      melhorCromossomo = populacao[indiceMelhor];
    }
    historico.push(melhorFitness.score);
    // Critério de parada
    if (melhorFitness.score >= cfg.targetScore) {
      break;
    }
    // Criar nova geração
    const novaPopulacao: Cromossoma[] = [];
    // Elitismo: preservar os melhores
    const elites = getElites(populacao, fitnessScores, cfg.eliteCount);
    novaPopulacao.push(...elites);
    // Preencher o resto da população
    while (novaPopulacao.length < cfg.populationSize) {
      const pai = selecaoTorneio(populacao, fitnessScores, cfg.tournamentSize);
      const mae = selecaoTorneio(populacao, fitnessScores, cfg.tournamentSize);
      const filho = crossoverUmPonto(pai, mae, cfg.crossoverRate);
      const filhoMutado = mutar(filho, salas, dias, periodos, cfg.mutationRate);
      novaPopulacao.push(filhoMutado);
    }
    populacao = novaPopulacao;
  }
  return {
    melhorCromossomo,
    melhorFitness,
    historico,
    geracoes: historico.length,
  };
}
// ─── Função Auxiliar: Elitismo ────────────────────────────
function getElites(
  populacao: Cromossoma[],
  fitnessScores: FitnessResult[],
  eliteCount: number,
): Cromossoma[] {
  const indexed = populacao.map((cromossoma, i) => ({
    cromossoma,
    score: fitnessScores[i].score,
  }));
  indexed.sort((a, b) => b.score - a.score);
  return indexed.slice(0, eliteCount).map((item) =>
    item.cromossoma.map((gene) => ({ ...gene })),
  );
}