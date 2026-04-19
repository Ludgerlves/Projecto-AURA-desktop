<<<<<<<<< Temporary merge branch 1
import { prisma } from "@/lib/prisma";

=========
'use server'

import { prisma } from '@/lib/prisma';

// Interface que representa cada espaço onde podemos alocar uma aula
>>>>>>>>> Temporary merge branch 2
interface Slot {
    dia: number;
    periodo: number;
    ordem: number;
}

<<<<<<<<< Temporary merge branch 1
interface Aula {
    id_professor: number;
    id_turma: number;
    id_disciplina: number;
    id_atribuicao: number;
    tipo_sala: string;
    id_sala_preferencial: number;
    dominio: Slot[];
}

interface Horario {
    aula: Aula;
    slot: Slot;
    id_sala: number;
}

async function carregarDados() {
    const profs = await prisma.profTurmaDisciplina.findMany({
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
        }
    });
}

export default async function gerarHoririo(id_turmas: number[]) {
    
=========
// Interface que define cada aula que ainda precisa ser alocada
interface Aula_livre { //tempo solto
    id_professor: number;
    id_disciplina: number;
    id_turma: number;
    id_atribuicao: number;
    sala_preferencial: number;
    dominio: Slot[]; // Conjunto de espaços (Baseado na disponibilidade do professor) onde a aula pode ser alocada
}

// Interface que define a aula depois de alocada
interface Aula_alocada { //tempo preso
    Slot: Slot;
    Aula: Aula_livre;
    id_sala: number;
}

export default async function gerarHorarios(turmas: any[]) {
    // Buscar os dados dos professores relacionados às turmas selecionadas
    const dados_profs = await prisma.profTurmaDisciplina.findMany({
        where: { 
            id_turma: { in: turmas }
        },
        include: {
            disciplina: {
                include: {
                    turmaDisciplina: true,
                }
            },
            professor: {
                include: {
                    disponibilidades: true
                }
            },
            turma: true,
        }
    })

    // Buscar os tempos lectivos já alocados para as turmas NÃO selecionadas, para evitar conflitos
    const slotsOcupados = await prisma.tempo_Lectivo.findMany({
        where: {
            id_turma: { notIn: turmas }
        },
        select: {
            id_professor: true,
            id_dia: true,
            id_periodo: true,
            id_sala: true,
            ordem: true,
        }
    })

    console.log("Aulas Actuais: ", slotsOcupados)

    // Cria pares de chave, valor para os slots já ocupados (Chave: prof/sala_Id_dia_Id_periodo_Id_ordem )
    const slotsProibidosProfessor = new Map<string, boolean>();
    const slotsProibidosSala = new Map<string, boolean>();

    for (const slot of slotsOcupados) {
        const chaveProf = `prof_${slot.id_professor}_dia_${slot.id_dia}_per_${slot.id_periodo}_ordem_${slot.ordem}`
        slotsProibidosProfessor.set(chaveProf, true);

        const chaveSala = `sala_${slot.id_sala}_dia_${slot.id_dia}_per_${slot.id_periodo}_ordem_${slot.ordem}`
        slotsProibidosSala.set(chaveSala, true);
    }

    console.log("Slots proibidos para professores: ", slotsProibidosProfessor)
    console.log("Slots proibidos para salas: ", slotsProibidosSala)

    const aulas_nao_alocadas: Aula_livre[] = []
    
    // Cria blocos de domínios para cada aula -- Cria blocos de aulas com base na quantidade de aulas por semana que cada disciplina tem, e no domínio de cada professor (baseado nas disponibilidades)
    for (let c = 0; c < dados_profs.length; c++) {
        const aulas_por_semana = dados_profs[c].disciplina.turmaDisciplina.find(td => td.id_turma === dados_profs[c].id_turma)?.aulas_por_semana ?? 0;

        /*console.log(`Aulas por semana número ${c}, do professor: ${dados_profs[c].id_professor} e disciplina: ${dados_profs[c].id_disciplina} é: ${aulas_por_semana}`)*/

        const dominio: Slot[] = dados_profs[c].professor.disponibilidades.map(disp => {
            return {
                dia: disp.id_dia,
                periodo: disp.id_periodo,
                ordem: disp.ordem
            }
        })
        //console.log(`DOMÍNIO: ${c} `, dominio)

        for (let i = 0; i < aulas_por_semana; i++) {
            const aula: Aula_livre = {
                id_professor: dados_profs[c].id_professor,
                id_disciplina: dados_profs[c].id_disciplina,
                id_turma: dados_profs[c].id_turma,
                id_atribuicao: dados_profs[c].id_atribuicao,
                sala_preferencial: dados_profs[c].turma.id_sala ?? 0, // Se a turma tiver uma sala preferencial, usamos essa; caso contrário, colocamos 0 (ou poderíamos usar null ou outro valor para indicar "sem preferência")
                dominio: [...dominio]
            }
            aulas_nao_alocadas.push(aula)
        }
    }

    // Heurística MVR, organiza a lista de aulas com base em ordem crescente com base naquelas que possuem os menores domínios
    aulas_nao_alocadas.sort((a, b) => a.dominio.length - b.dominio.length)
    console.log("Aulas ordenadas por MRV:")
    aulas_nao_alocadas.forEach((aula, i) => {
        console.log(`  [${i}] Prof: ${aula.id_professor}, Disciplina: ${aula.id_disciplina}, Domínio: ${aula.dominio.length} slots`)
    })

    //console.log("Aulas: ", JSON.stringify(aulas_nao_alocadas, null, 2))

    // Função que retorna true se todas as restrições fomra cumpridas nos dados introduzidos e false se alguma não foi
    function analisarRestricoes(
        aula_livre: Aula_livre, //Aula que estamos a tentar alocar
        slot: Slot, //Slot onde estamos a tentar alocar a aula
        slotProibidosProfessores: Map<string, boolean>, //Mapa de slots proibidos para professores (Baseado nos tempos lectivos já alocados)
        slotProibidosSalas: Map<string, boolean>, //Mapa de slots proibidos para salas (Baseado nos tempos lectivos já alocados)
        AulasCriadas: Aula_alocada[]): boolean {

        const id_Tempo = `dia_${slot.dia}_per_${slot.periodo}_ordem_${slot.ordem}` // Cria um  uma chave que representa o dia, período e ordem

       // Se existerem slots com o mesmo professor dentro do horários já guardados no tempo_lectivo no mesmo espaço de tempo retorna false
        if (slotProibidosProfessores.has(`prof_${aula_livre.id_professor}_${id_Tempo }`)) {
            console.log("Algoritmo encontrou slots ocupados pelo professor na base de dados")
            return false;
        }

        // Se existerem slots com a mesma sala dentro do horários já guardados no tempo_lectivo no mesmo espaço de tempo retorna false            
        if (slotProibidosSalas.has(`sala_${aula_livre.sala_preferencial}_${id_Tempo }`)) {
            console.log("Algoritmo encontrou slots ocupados pela sala na base de dados")
            return false;
        }

        //forLoop que irá percorrer todos horarios já criados pelo algoritmo e analisar se as restrições são cumpridas
        for (const horario of AulasCriadas) {
            //Constante que serve para representar slots repetidos
            const mesmoSlot = horario.Slot.dia === slot.dia &&
                              horario.Slot.periodo === slot.periodo &&
                              horario.Slot.ordem === slot.ordem

            // Se existirem slots com o mesmo dia, periodo e ordem retorna false                 
            if (mesmoSlot) {
                // Se existerem slots com o mesmo professor no mesmo espaço de tempo retorna false
                if (horario.Aula.id_professor === aula_livre.id_professor) {
                    console.log("Algoritmo encontrou slots ocupados pelo professor na memória interna")
                    return false;
                }

                // Se existerem slots com a mesma turma no mesmo espaço de tempo retorna false
                if (horario.Aula.id_turma === aula_livre.id_turma) {
                    console.log("Algoritmo encontrou slots ocupados pela turma na memória interna")
                    return false;
                }

                // Se existerem slots com a mesma sala no mesmo espaço de tempo retorna false
                if (horario.id_sala === aula_livre.sala_preferencial) {
                    console.log("Algoritmo encontrou slots ocupados pela sala na memória interna")
                    return false;
                }
            }
        }
        return true;
    }

    // Função que implementa o forward checking — recebe um slot que acabou de ser alocado e a aula que foi alocada nesse slot, e remove esse slot dos domínios de todas as aulas futuras que partilham professor ou turma com a aula alocada. Se algum domínio ficar vazio, repõe tudo e retorna null para indicar falha antecipada. Caso contrário, retorna um registo do que foi removido para restaurar se o backtracking falhar.
    function forwardChecking(
        slot: Slot, //Slot que vamos verificar
        aulaRecemAlocada: Aula_livre, //Aula que ocupou o slot que estamos a checar
        aulas_nao_alocadas: Aula_livre[],
        indiceActual: number
    ): Map<number, Slot[]> | null {

        // Registo do que foi removido — chave: índice da aula, valor: slots removidos
        const slotsRemovidos = new Map<number, Slot[]>()

        // Percorrer apenas as aulas FUTURAS — as que ainda não foram alocadas
        for (let i = indiceActual + 1; i < aulas_nao_alocadas.length; i++) {
            const aulaFutura = aulas_nao_alocadas[i]

            // Esta aula futura é afectada pela alocação que acabou de acontecer?
            // É afectada se partilhar professor ou turma com a aula alocada
            const mesmoProfessor = aulaFutura.id_professor === aulaRecemAlocada.id_professor
            const mesmaTurma = aulaFutura.id_turma === aulaRecemAlocada.id_turma

            // Se não partilha nem professor nem turma, não é afectada — passa à frente
            if (!mesmoProfessor && !mesmaTurma) continue

            // Procurar este slot específico no domínio da aula futura
            // Usamos findIndex para saber a posição exacta — precisamos dela para o splice
            const indiceNodominio = aulaFutura.dominio.findIndex(
                s => s.dia === slot.dia &&
                    s.periodo === slot.periodo &&
                    s.ordem === slot.ordem
            )

            // Se o slot nem sequer estava no domínio desta aula, nada a fazer
            if (indiceNodominio === -1) continue

            // Remover o slot do domínio
            // splice(posição, quantos) — remove 1 elemento na posição encontrada
            // e devolve um array com o que foi removido
            const [slotRemovido] = aulaFutura.dominio.splice(indiceNodominio, 1)

            // Registar o que foi removido para poder restaurar se necessário
            if (!slotsRemovidos.has(i)) {
                slotsRemovidos.set(i, [])
            }
            slotsRemovidos.get(i)!.push(slotRemovido)

            // Domínio ficou vazio? Detectámos uma falha futura — podemos falhar já aqui e voltar para o nível anterior
            if (aulaFutura.dominio.length === 0) {
                // Repõe os domínios removidos
                 for (const [idx, slots] of slotsRemovidos) {
                    aulas_nao_alocadas[idx].dominio.push(...slots)
                }
                return null
            }
        }

        // Tudo bem — devolver o registo para poder restaurar se o backtracking falhar
        return slotsRemovidos
    }

    //Repõe os slots que foram removidos dos domínios durante o forward checking, restaurando o estado anterior para que o backtracking possa tentar outro caminho.
    function restaurarDominios(
        aulas_nao_alocadas: Aula_livre[],
        slotsRemovidos: Map<number, Slot[]>
    ): void {
        for (const [indice, slots] of slotsRemovidos) {
            // Devolver cada slot removido ao domínio da aula correspondente
            aulas_nao_alocadas[indice].dominio.push(...slots)
        }
    }

    function backtrack(
        aulas_nao_atribuidas: Aula_livre[],           // todas as aulas a alocar (não muda)
        aulas_atribuidas: Aula_alocada[],   // o que já foi atribuído (vai crescendo e encolhendo)
        indiceAtual: number           // qual aula estamos a tentar agora
    ): Aula_alocada[] | null {        // retorna solução ou null se não encontrou

        //CASO BASE: índice chegou ao fim — todas as aulas foram alocadas sem conflitos. Retorna o array completo de aulas alocadas como solução final.
        if (indiceAtual === aulas_nao_atribuidas.length) {
            return aulas_atribuidas;
        }

        // Pegamos na aula actual (a que vamos tentar alocar agora)
        const aulaActual = aulas_nao_atribuidas[indiceAtual];

        // Tentamos cada slot do domínio desta aula
        for (const slot of aulaActual.dominio) {

            // Perguntamos: este slot cria algum conflito?
            if (!analisarRestricoes(aulaActual, slot, slotsProibidosProfessor, slotsProibidosSala, aulas_atribuidas)) {
                continue; // sim, há conflito → salta este slot e tenta o próximo
            }

            // Chegamos aqui: o slot é válido.
            // Criamos a atribuição e adicionamos à lista.
            const novaAtribuicao: Aula_alocada = {
                Slot: slot,
                Aula: aulaActual,
                id_sala: aulaActual.sala_preferencial // simplificado por agora
            };
            aulas_atribuidas.push(novaAtribuicao);

            // Chamar forward checking
            const slotsRemovidos = forwardChecking(slot, aulaActual, aulas_nao_atribuidas, indiceAtual)

            // Analisa se existem falhas futuras — se forward checking retornou null, há uma falha futura detectada, então não precisamos de tentar os próximos slots deste domínio — podemos falhar já aqui e voltar para o nível anterior
            if (slotsRemovidos !== null) {
                const resultado = backtrack(aulas_nao_atribuidas, aulas_atribuidas, indiceAtual + 1)
                
                // Se o resultado não for null, a recursão encontrou solução → propagamos
                if (resultado !== null) return resultado

                // Recursão falhou — restaurar domínios
                restaurarDominios(aulas_nao_atribuidas, slotsRemovidos)
            }

            // Se chegámos aqui, a recursão falhou.
            // Desfazemos esta atribuição (o "back" do backtracking)
            // e tentamos o próximo slot do nosso loop
            aulas_atribuidas.pop();
        }

        // Esgotámos todos os slots deste domínio sem encontrar solução
        // Retornamos null para sinalizar falha ao nível anterior
        return null;
    }

    // No fim da função gerarHorarios, depois de definir todas as funções:
    const solucao = backtrack(aulas_nao_alocadas, [], 0)

    if (solucao === null) {
        console.log("Não foi possível gerar horário sem conflitos.")
        return null
    }

    console.log("Solução encontrada:", JSON.stringify(solucao, null, 2))

    // Gravar a solução na base de dados
    await prisma.tempo_Lectivo.createMany({
        data: solucao!.map(aula_alocada => ({
            id_atribuicao: aula_alocada.Aula.id_atribuicao,   // vem da Aula_livre
            id_professor:  aula_alocada.Aula.id_professor,    // vem da Aula_livre
            id_turma:      aula_alocada.Aula.id_turma,        // vem da Aula_livre
            id_disciplina: aula_alocada.Aula.id_disciplina,   // vem da Aula_livre
            id_sala:       aula_alocada.id_sala,              // vem directamente da Aula_alocada
            id_dia:        aula_alocada.Slot.dia,             // vem do Slot
            id_periodo:    aula_alocada.Slot.periodo,         // vem do Slot
            ordem:         aula_alocada.Slot.ordem,           // vem do Slot
            ano_lectivo:   new Date().getFullYear()                              
        }))
    })

    console.log(`${solucao!.length} tempos lectivos gravados com sucesso.`)
    return solucao
>>>>>>>>> Temporary merge branch 2
}