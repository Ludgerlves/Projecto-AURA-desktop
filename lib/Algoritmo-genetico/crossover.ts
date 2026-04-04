import type{Cromossoma, Gene} from "./types"


export function crossoverUmPonto(
    pai:Cromossoma,
    mae:Cromossoma,
    taxaCrossover: number = 0.8,
):Cromossoma{
    if(Math.random()> taxaCrossover){
        return pai.map((gene)=> ({...gene}));
    }

    const ponto = Math.floor(Math.random()*pai.length);
    const filho: Cromossoma = [];

    for (let i = 0; i < pai.length; i++) {
      if(i<ponto){
        filho.push({...pai[i]})
      } else{
        filho.push({...mae[i]})
      }

        
    }
    return filho
}