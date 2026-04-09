export interface Slot {
  id_dia: number,
  ordem: number,
  id_periodo: number,

}
export interface slotAtribuido {
  id_professor: number,
  id_dia: number,
  ordem: number,
  id_periodo: number,

}
export interface ProfInput {
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

const maxSolucoes = 1000

export function backtrack(profsFormatados: ProfInput[]): slotAtribuido[][] {
  const todasSolucoes: slotAtribuido[][] = [];
  const solucaoAtual: slotAtribuido[] = [];
  const slotsUsados = new Set<String>();

  //Heuristicas MRV

  //Foward Checking funcao auxiliar
  //forward checking, para fazer um break assim que encontrar um caminho sem volta
  //Corta ramos impossíveis antes de os explorar
  function ForwardChecking(profIndex: number, profs: ProfInput[]):boolean{
    for(let i = profIndex +1; i< profs.length; i++){
      const prof = profs[i]
      let slotsDisponiveis = 0
      for(const slots of prof.slots){ 
        const chave = `${prof.id_professor}-${slots.id_dia}-${slots.ordem}-${slots.id_periodo}`
        if(!slotsUsados.has(chave)) slotsDisponiveis++;
      }
      //cortar a operacao se nao tiver slots suficientes
      if(slotsDisponiveis < prof.aulas_por_disciplina) return false
    }
    return true
  }

  //Heuristica de sequencias de slots para evitar furos com base na ordem
  function ordenarSlots(slots:Slot[], slotAtual:slotAtribuido[],id_professor: number):Slot[]{
    const slotProf = slotAtual.filter(s=> s.id_professor === id_professor)
    if(slotProf.length ===0) return slots;

    const ultimoSlot = slotProf[slotProf.length -1];
    return[...slots].sort((a,b)=>{
      const distA = a.id_dia===ultimoSlot.id_dia
      ? Math.abs(a.ordem - ultimoSlot.ordem)
      : 99;

      const distB = b.id_dia ===ultimoSlot.id_dia
      ? Math.abs(b.ordem - ultimoSlot.ordem)
      :99;
      return distA- distB
    }

    )
  }

  function resolver(profIndex: number, aulaIndex: number, slotInicial: number, profs: ProfInput[]=profsFormatados) {
    if (todasSolucoes.length >= maxSolucoes) return
    if (profIndex == profs.length) {
      todasSolucoes.push([...solucaoAtual])
      return
    }
    const prof = profs[profIndex]
   
    if (aulaIndex >= prof.aulas_por_disciplina) {
      resolver(profIndex + 1, 0, 0) //o profIndex + 1, 0, 0 representa cada argumento da funcao resolver em ordem
      return
    }
  let slotsDisponiveis = 0;
    for (let i = slotInicial; i < prof.slots.length; i++) {
      const slotContado = prof.slots[i];
      const chave = `${prof.id_professor}-${slotContado.id_dia}-${slotContado.ordem}`
      if (!slotsUsados.has(chave)) slotsDisponiveis++;
    }
    const aulas_restantes = prof.aulas_por_disciplina - aulaIndex
    if (slotsDisponiveis < aulas_restantes) return

    for (let i = slotInicial; i < prof.slots.length; i++) {
      const slot = prof.slots[i];
      //criação de hard constrains utilizando chaves, verifica sempre se o slot já está ocupado
      const chaveProfessor = `${prof.id_professor}-${slot.id_dia}-${slot.ordem}-${slot.id_periodo}`
      const chaveSala = `${prof.id_sala}-${slot.id_dia}-${slot.ordem}-${slot.id_periodo}`
      const chaveTurma = `${prof.id_turma}-${slot.id_dia}-${slot.ordem}-${slot.id_periodo}`

      if (slotsUsados.has(chaveProfessor)||slotsUsados.has(chaveSala)  || slotsUsados.has(chaveTurma)) continue;
      solucaoAtual.push({
        id_professor: prof.id_professor,
        id_dia: slot.id_dia,
        ordem: slot.ordem,
        id_periodo: slot.id_periodo,
      })
      slotsUsados.add(chaveProfessor)
      slotsUsados.add(chaveSala)
      slotsUsados.add(chaveTurma)

      
  resolver(profIndex, aulaIndex+1, i+1)
  
      
      solucaoAtual.pop();
      slotsUsados.delete(chaveProfessor)
      slotsUsados.delete(chaveSala)
      slotsUsados.delete(chaveTurma)
    }
    
  }
  
  const profsOrdenados = [...profsFormatados].sort((a,b)=>
        a.slots.length - b.slots.length
      )
  resolver(0, 0, 0, profsOrdenados)
  return todasSolucoes
  
}
