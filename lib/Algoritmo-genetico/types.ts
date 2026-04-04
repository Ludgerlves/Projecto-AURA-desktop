export interface Gene{
    id_sala: number;
    id_periodo: number;
    id_dia: number;
    ordem: number;
}
export interface AulaPendente{
    id_professor: number;
    id_atribuicao: number;
    id_turma: number;
    id_disciplina: number;
    indice_aula: number;
    tipo_sala: string,
    quantidade_alunos: number;
}
export type Cromossoma = Gene[];
export type Populacao = Cromossoma[];

// Avaliação do fitness
export interface ConflitoItem {
    id: string;
    tipo: "professor" | "sala" | "turma";
    rigidez: "alta" | "media" | "baixa";
    descricao: string;
}
export interface FitnessResult {
    score: number;
    hardPenalty: number;
    softPenalty: number;
    conflitos: ConflitoItem[];
}

//Parametros do algoritmo --- Configurações

export interface EvolutionConfig{
    populationSize: number;
    maxGenerations: number;
    tournamentSize: number;
    crossoverRate: number;
    mutationRate: number;
    eliteCount: number;
    targetScore: number;
}
export interface OpcoesGeracoes{
    respeitarDisponibilidade: boolean;
    evitarFuros: boolean;
    balancearCarga: boolean;
    periodo: string;
}

//Resultado

export interface ResultadoGeracao {
    status: "success" | "error";
    message?: string;
    horariosGerados: number;
    fitness: number;
    generationsRun: number;
    conflitos: ConflitoItem[];
}

export interface ResultadoEvolucao {
    melhorCromossomo: Cromossoma;
    melhorFitness : FitnessResult;
    historico: number[];
    geracoes: number;
}

//Enviar Dados para a DB, Persistência

export interface Tempo_LectivoResultado{
    id_atribuicao: number;
    id_professor: number;
    id_turma: number;
    id_sala: number;
    id_disciplina: number;
    id_periodo: number;
    id_dia: number;
    ordem: number;
    ano_lectivo: number;
}

export interface ResultadoPersistencia {
    success : boolean,
    count : number,
    conflitos: string[]

}
