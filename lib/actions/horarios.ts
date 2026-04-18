'use server'

import { prisma } from "@/lib/prisma";
import {backtrack, ProfInput} from '@/lib/utils/backtracking'

export default async function  gerarHorarios(turmas : any[]){
  console.log("Gerando horários... das turmas:", turmas);

  const salaPadrao = await prisma.sala.findFirst()
  if(!salaPadrao){
    console.log("nenhuma sala")
    return
  }

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
  console.log("Professores encontrados:", profs.length)
  if(profs.length===0){
    console.log("Nenhum professor encontrados para essa turma")
  }
  console.log("Disponibilidades do prof 1:", profs[0]?.professor?.disponibilidades)
  

  
  const profsFormatados:ProfInput[] = profs.map(prof => {
    const turmaDisciplinaAtual = prof.disciplina.turmaDisciplina.find(
      td => td.id_turma === prof.id_turma
    )

    if (!turmaDisciplinaAtual) {
      throw new Error(
        `TurmaDisciplina não encontrada para turma ${prof.id_turma} e disciplina ${prof.id_disciplina}`
      )
    }

    return {
      ano_lectivo : 2526,
      id_atribuicao : prof.id_atribuicao,
      id_dia : [...new Set(prof.professor.disponibilidades.map(disp => disp.id_dia))],
      id_disciplina : prof.id_disciplina,
      //id_periodo : prof.professor.disponibilidades.map(disp=> disp.id_periodo),
      id_professor : prof.id_professor,
      id_sala : prof.turma.id_sala ?? salaPadrao.id_sala,
      id_turma : prof.id_turma,
      aulas_por_disciplina: turmaDisciplinaAtual.aulas_por_semana,
      slots: prof.professor.disponibilidades.map(disp=>({
        id_dia: disp.id_dia,
        id_periodo: disp.id_periodo,
        ordem: disp.ordem,
      })),
    }
  });
  for(const prof of profsFormatados){
    console.log(`Professores ${prof.id_professor}: -${prof.slots.length} slots, ${prof.aulas_por_disciplina} aulas`)
  }

  const solucoes = backtrack(profsFormatados)

  if(solucoes.length === 0){
    console.log("Nenhuma solucao vâlida")
    return
  }
  console.log(`Solucoes encontradas ${solucoes.length}`)
  const solucaoEscolhida = solucoes[0]

  const operacoes = solucaoEscolhida.map(slot => {
    const prof = profsFormatados.find(p => p.id_professor === slot.id_professor)!
    return {
       ano_lectivo: prof.ano_lectivo,
          id_atribuicao: prof.id_atribuicao,
          id_dia: slot.id_dia,
          id_disciplina: prof.id_disciplina,
          id_periodo: slot.id_periodo,
          id_professor: prof.id_professor,
          id_sala: prof.id_sala,
          id_turma: prof.id_turma,
          ordem: slot.ordem
    }

      });
     
      console.log("Operações a executar:", operacoes.length);
    
      
      try {
        const resultado = await prisma.tempo_Lectivo.createMany({data:operacoes});
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

 