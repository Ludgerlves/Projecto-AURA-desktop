/**
 * ╔════════════════════════════════════════════════════════╗
 * ║    Algoritmo Genético para Geração de Horários        ║
 * ║    Projecto AURA                                       ║
 * ╚════════════════════════════════════════════════════════╝
 *
 * Este módulo é puro TypeScript — sem dependências do Prisma.
 * Recebe dados já carregados e devolve a solução optimizada.
 *
 * Estratégias para maximizar qualidade (zero conflitos):
 *  - Inicialização inteligente (greedy + aleatória)
 *  - Penalidades muito altas para hard constraints
 *  - Mutação adaptativa (aumenta se estagnado)
 *  - Reparação local pós-mutação
 *  - População grande e muitas gerações
 *  - Múltiplas tentativas (restarts) se primeira falhar
 */

// ─── Tipos de Entrada ────────────────────────────────────

/** Uma atribuição professor–turma–disciplina */
