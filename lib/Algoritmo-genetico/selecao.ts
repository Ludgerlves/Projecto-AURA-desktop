import type { Cromossoma, FitnessResult } from "./types"

export function selecaoTorneio(
    populacao: Cromossoma[],
    fitnessScores: FitnessResult[],
    tamanhoTorneio: number = 3,
): Cromossoma {
    const indices = new Set<number>();
    while (indices.size < tamanhoTorneio) {
        indices.add(Math.floor(Math.random() * populacao.length));
    }

    let melhorScore = -1;
    let melhorIndice = -1;

    for (const idx of indices) {
        if (fitnessScores[idx].score > melhorScore) {
            melhorScore = fitnessScores[idx].score;
            melhorIndice = idx;
        }
    }
    return populacao[melhorIndice];
}