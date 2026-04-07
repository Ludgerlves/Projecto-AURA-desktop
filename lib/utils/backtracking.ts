export interface Slot{
  id_dia: number,
  ordem: number,
  id_periodo: number,

}
export interface slotAtribuido{
  id_professor: number,
  id_dia:number,
  ordem: number,
  id_periodo: number,
  
}
export interface ProfInput{
id_professor: number,
  id_dia: number[],
  id_disciplina: number,
  id_turma: number,
  id_sala: number,
  ano_lectivo: number,
  id_atribuicao: number,
  aulas_por_disciplina: number,
  slots: Slot[],
}

const maxSolucoes = 200

 export function backtrack(profsFormatados: ProfInput[]):slotAtribuido[][]{
  const todasSolucoes: slotAtribuido[][]=[];
  const solucaoAtual: slotAtribuido[] = [];
  const slotsUsados = new Set<String>();

  function resolver(profIndex:number, aulaIndex:number, slotInicial:number) {
    if(todasSolucoes.length >= maxSolucoes) return
    if(profIndex == profsFormatados.length){
      todasSolucoes.push([...solucaoAtual])
      return
    }
    const prof = profsFormatados[profIndex]
    if (aulaIndex >= prof.aulas_por_disciplina) {
      resolver(profIndex + 1,0,0) //o profIndex + 1, 0, 0 representa cada argumento da funcao resolver em ordem
      return
    }


    let slotsDisponiveis=0;
    for (let i = slotInicial; i < prof.slots.length; i++) {
      const slotContado = prof.slots[i];
      const chave =`${prof.id_professor}-${slotContado.id_dia}-${slotContado.id_periodo}-${slotContado.ordem}`
      if(!slotsUsados.has(chave))slotsDisponiveis++;
    }
    const aulas_restantes = prof.aulas_por_disciplina - aulaIndex
    if(slotsDisponiveis<aulas_restantes)return

    for(let i =slotInicial; i< prof.slots.length; i++){
      const slot = prof.slots[i];
      const chave = `${prof.id_professor}-${slot.id_dia}-${slot.ordem}`

      if(slotsUsados.has(chave)) continue;
      solucaoAtual.push({
        id_professor: prof.id_professor,
        id_dia: slot.id_dia,
        ordem: slot.ordem,
        id_periodo: slot.id_periodo,
      })
      slotsUsados.add(chave)

      resolver(profIndex, aulaIndex + 1,i+1)
      
      solucaoAtual.pop();
      slotsUsados.delete(chave)
    }
  }
  resolver(0,0,0)
  return todasSolucoes

}
