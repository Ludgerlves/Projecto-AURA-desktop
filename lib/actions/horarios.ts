'use server'
import { prisma } from "../prisma"

const ORDEM_DIAS = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
];

const TEMPOS_POR_DIA = 6;
const TAMANHO_BLOCO = 2;

/**
 * Gera tempos lectivos para uma turma durante a semana.
 * Cada disciplina recebe TEMPOS_POR_DIA (6) tempos por semana,
 * distribuídos em blocos de 2 por dia.
 * Ignora todos os conflitos externos.
 */
export async function gerarTemposLectivos(
  turmaId: number,
  periodo: string,
  salaId: number
) {
  const profturma = await prisma.profTurmaDisciplina.findMany({
    where: { turmaId },
    include: { Professor: true },
  });

  if (profturma.length === 0) return;

  // Controla slots já atribuídos para evitar sobreposição interna
  const slotsOcupados = new Set<string>();

  const novosTempos: {
    diaSemana: string;
    periodoId: string;
    ordem: number;
    professorId: number;
    disciplina: string;
    salaId: number;
    turmaId: number;
  }[] = [];

  for (const ptd of profturma) {
    let temposRestantes = TEMPOS_POR_DIA;

    for (const dia of ORDEM_DIAS) {
      if (temposRestantes <= 0) break;

      const bloco = encontrarBlocoLivre(dia, slotsOcupados);
      if (!bloco) continue;

      for (const ordem of bloco) {
        slotsOcupados.add(`${dia}-${ordem}`);
        novosTempos.push({
          diaSemana: dia,
          periodoId: periodo,
          ordem,
          professorId: ptd.professorId,
          disciplina: ptd.disciplinaNome,
          salaId,
          turmaId,
        });
      }

      temposRestantes -= bloco.length;
    }
  }

  console.log(JSON.stringify(novosTempos, null, 2));

  return await prisma.tempoLectivo.createMany({
    data: novosTempos,
  });
}

gerarTemposLectivos(1, "Tarde", 1).then((res) =>
  console.log("Resultado createMany:", JSON.stringify(res, null, 2))
);

/** Encontra o primeiro bloco consecutivo livre num dado dia. */
function encontrarBlocoLivre(
  dia: string,
  ocupados: Set<string>
): number[] | null {
  for (let ordem = 1; ordem <= TEMPOS_POR_DIA - TAMANHO_BLOCO + 1; ordem++) {
    const bloco: number[] = [];
    let livre = true;

    for (let j = 0; j < TAMANHO_BLOCO; j++) {
      if (ocupados.has(`${dia}-${ordem + j}`)) {
        livre = false;
        break;
      }
      bloco.push(ordem + j);
    }

    if (livre) return bloco;
  }
  return null;
}
