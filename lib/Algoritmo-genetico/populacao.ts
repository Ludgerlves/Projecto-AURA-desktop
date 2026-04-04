import type { Gene, Cromossoma, Populacao, AulaPendente } from "./types";

interface SalaInput{
    id_sala: number;
    descricao_sala: string;
    capacidade: number;
    tipo_sala: string;
}

interface DiaSemanaInput{
    id_dia: number;
    descricao_dia: string;
}

interface PeriodoInput{
    id_periodo: number;
    descricao_periodo: string;
}

export function criarGeneAleatorio(
    salas : SalaInput[],
    dias: DiaSemanaInput[],
    periodos: PeriodoInput[]
): Gene{
    return{
        id_sala: salas[Math.floor(Math.random() * salas.length)].id_sala,
        id_periodo: periodos[Math.floor(Math.random()*periodos.length)].id_periodo,
        id_dia: dias[Math.floor(Math.random()*dias.length)].id_dia,
        ordem: Math.floor(Math.random() * 6) + 1,
    }
}

export function criarCromossoma(
    aulas_pendentes: AulaPendente[],
    salas: SalaInput[],
    dias: DiaSemanaInput[],
    periodos:PeriodoInput[]
):Cromossoma{
    return aulas_pendentes.map(()=>
        criarGeneAleatorio(salas, dias, periodos)
    );
}

export function criarPopulacao(
    tamanho: number,
    aulas_pendentes: AulaPendente[],
    salas: SalaInput[],
    dias: DiaSemanaInput[],
    periodos: PeriodoInput[]
): Populacao{
    return Array.from({length: tamanho}, ()=>
        criarCromossoma(aulas_pendentes,salas, dias, periodos)
    )
}