
import type {Cromossoma, Gene} from './types'

interface SalaInput {
  id_sala: number;
  descricao_sala: string;
  capacidade: number;
  tipo_sala: string;
}
interface DiaSemanaInput {
  id_dia: number;
  descricao_dia: string;
}
interface PeriodoInput {
  id_periodo: number;
  descricao_periodo: string;
}

export function mutar(
    cromossoma: Cromossoma,
    sala: SalaInput[],
    dia: DiaSemanaInput[],
    periodo: PeriodoInput[],
    taxaMutacao: number = 0.05,
):Cromossoma{
    return cromossoma.map((gene)=>{   
   if (Math.random() < taxaMutacao) { 
        return {
            id_sala: sala[Math.floor(Math.random()* sala.length)].id_sala,
            id_dia: dia[Math.floor(Math.random()*dia.length)].id_dia,
            id_periodo: periodo[Math.floor(Math.random()*periodo.length)].id_periodo,
            ordem: Math.floor(Math.random()*6)+1
        };
   }
   return {...gene};
    })
}
