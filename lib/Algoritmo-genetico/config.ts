import type { EvolutionConfig } from "./types";
export const DEFAULT_CONFIG: EvolutionConfig = {
  populationSize: 200,
  maxGenerations: 1000,
  tournamentSize: 3,
  crossoverRate: 0.8,
  mutationRate: 0.05,
  eliteCount: 2,
  targetScore: 950,
};