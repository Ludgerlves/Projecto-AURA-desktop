'use server'

import { prisma } from "@/lib/prisma";
import { any, string } from "zod";

const diasSemana = {
  "9": "Segunda-feira",
  "10": "Terça-feira",
  "11": "Quarta-feira",
  "12": "Quinta-feira",
  "13": "Sexta-feira",
}

export default async function  gerarHorarios(turmas : any[]){
  console.log("Gerando horários... das turmas:", turmas);

  // retornar os profs que passam nas turmas.
  const profs = await prisma.profTurmaDisciplina.findMany({
    where: {
      id_turma: turmas[0], // Exemplo: pegar o id da primeira turma selecionada
    },
    include: {
      professor: {
        include: {
          disponibilidades: true,
        },
      },
      turma: true,
      disciplina: {
        include: {
          turmaDisciplina : true,
        }
      },
      //disponibilidade: true,
    }
  });

  const profsFormatados = profs.map(prof => ({
    ano_lectivo : 2526,
    id_atribuicao : prof.id_atribuicao,
    id_dia : [...new Set(prof.professor.disponibilidades.map(disp => disp.id_dia))],
    id_disciplina : prof.id_disciplina,
    id_periodo : 8,
    id_professor : prof.id_professor,
    id_sala : 58,
    id_turma : prof.id_turma,
    aulas_por_disciplina: prof.disciplina.turmaDisciplina.map(td => td.aulas_por_semana)[0],
    ordem: 1,
  }));

  const gerarID = (min : any, max : any) => Math.floor(Math.random() * (max - min + 1)) + min;

  const operacoes = profsFormatados.flatMap(prof => {
    return prof.id_dia.map(dia => {
      return prisma.tempo_Lectivo.create({
        data: {
          ano_lectivo: prof.ano_lectivo,
          id_atribuicao: prof.id_atribuicao,
          id_dia: dia,
          id_disciplina: prof.id_disciplina,
          id_periodo: prof.id_periodo,
          id_professor: prof.id_professor,
          id_sala: prof.id_sala,
          id_turma: prof.id_turma,
          ordem: gerarID(1, 6), // Ordem baseada na posição do dia na lista de dias do professor
        }
      });
    });
  })

  console.log("Operações a executar:", operacoes.length);

  
  try {
    const resultado = await prisma.$transaction(operacoes);
    console.log("Tempos lectivos criados com sucesso:", resultado);
  } catch (error) {
    console.error("Erro ao criar tempos lectivos:", error);
  }
  

  }

  export async function apagarTemposLectivos(turmas: Array<string|number>){
  const turma = turmas.map((id)=> Number(id));
  if(turma.length ===0){
    return {apagados: 0}
  } 
  try {
    const resultado = await prisma.tempo_Lectivo.deleteMany({
      where:{
        id_turma: { in: turma}
      }
    })
     return { apagados: resultado.count };
  } catch (error) {
    
  }
  
}

