import { PrismaClient } from "../lib/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({connectionString});
const prisma = new PrismaClient({adapter});
export  {prisma};

async function main() {
  // 0.1 Criar Dias da Semana
  const diasData = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  const dias = [];
  for (const nome of diasData) {
    const dia = await prisma.diaSemana.upsert({
      where: { descricao_dia: nome },
      update: {},
      create: { descricao_dia: nome },
    });
    dias.push(dia);
  }
  console.log(`✅ ${dias.length} dias da semana criados/verificados`);

  // 0.2 Criar Periodos
  const periodosData = ["Manhã", "Tarde", "Noite"];
  const periodos = [];
  for (const nome of periodosData) {
    const peri = await prisma.periodo.upsert({
      where: { descricao_periodo: nome },
      update: {},
      create: { descricao_periodo: nome },
    });
    periodos.push(peri);
  }
  console.log(`✅ ${periodos.length} periodos criados/verificados`);

  // 1. Criar Classes
  const classesData = ["10ª Classe", "11ª Classe", "12ª Classe", "13ª Classe"];
  const classes = [];
  for (const desc of classesData) {
    const classe = await prisma.classe.upsert({
      where: { descricao_classe: desc },
      update: {},
      create: { descricao_classe: desc },
    });
    classes.push(classe);
  }
  console.log(`✅ ${classes.length} classes criadas/verificadas`);

  // 2. Criar Cursos
  const cursosData = ["Informática", "Contabilidade e Gestão", "Ciências Económicas e Jurídicas", "Ciências Físicas e Biológicas", "Electrónica", "Obras de Construcção Civil"];
  const cursos = [];
  for (const nome of cursosData) {
    const curso = await prisma.curso.upsert({
      where: { descricao_curso: nome }, 
      update: {},
      create: { descricao_curso: nome },
    });
    cursos.push(curso);
  }
  console.log(`✅ ${cursos.length} cursos criados/verificados`);

  // 3. Criar Salas
  const salasData = [
    { nome: "Sala 1", capacidade: 20, tipo_sala: "normal" },
    { nome: "Sala 2", capacidade: 20, tipo_sala: "normal" },
    { nome: "Sala 3", capacidade: 20, tipo_sala: "normal" },
    { nome: "Sala 4", capacidade: 20, tipo_sala: "normal" },
    { nome: "Sala 5", capacidade: 20, tipo_sala: "normal" },
    { nome: "Sala 6", capacidade: 30, tipo_sala: "normal" },
    { nome: "Sala 7", capacidade: 30, tipo_sala: "normal" },
    { nome: "Sala 8", capacidade: 20, tipo_sala: "normal" },
    { nome: "Sala 9", capacidade: 20, tipo_sala: "normal" },
    { nome: "Sala 10", capacidade: 20, tipo_sala: "normal" },
    { nome: "Sala 11", capacidade: 25, tipo_sala: "normal"},
    { nome: "Sala 12", capacidade: 25, tipo_sala: "normal" },
    { nome: "Sala 13", capacidade: 20, tipo_sala: "normal" },
    { nome: "Sala 14", capacidade: 20, tipo_sala: "normal" },
    { nome: "Sala 15", capacidade: 20, tipo_sala: "normal" },
    { nome: "Lab INF 1", capacidade: 30, tipo_sala: "Laboratório de Informática" },
    { nome: "Lab INF 2", capacidade: 30, tipo_sala: "Laboratório de Informática" },
    { nome: "Campo", capacidade: 50, tipo_sala: "Campo"}
  ];

  const salas = [];
  for (const item of salasData) {
    const sala = await prisma.sala.upsert({
      where: { descricao_sala: item.nome },
      update: { capacidade: item.capacidade, tipo_sala: item.tipo_sala },
      create: {
        descricao_sala: item.nome,
        capacidade: item.capacidade,
        tipo_sala: item.tipo_sala
      }
    });
    salas.push(sala);
  }
  console.log(`✅ ${salas.length} salas criadas/verificadas`);

  // 4. Criar Turmas
  const turmas = [];
  for (const classe of classes) {
    for (const curso of cursos) {
      if ((classe.descricao_classe !== "13ª Classe") || (curso.descricao_curso !== "Ciências Físicas e Biológicas" && curso.descricao_curso !== "Ciências Económicas e Jurídicas")) {
      
        const desc_turma = `${classe.descricao_classe} ${curso.descricao_curso}`;

        const turma = await prisma.turma.upsert({
          where: { descricao_turma: desc_turma },
          update: { id_classe: classe.id_classe, id_curso: curso.id_curso },
          create: { 
            descricao_turma: desc_turma, 
            id_classe: classe.id_classe, 
            id_curso: curso.id_curso,
            quantidade_alunos: 30
          },
        });
        turmas.push(turma);
      }
    }
  }
  console.log(`✅ ${turmas.length} turmas criadas/verificadas`);

  // 5. Criar Disciplinas
  const disciplinasData = [
    { nome: "Língua Inglesa", tipo_sala: "normal" },
    { nome: "Física", tipo_sala: "normal" },
    { nome: "Língua Portuguesa", tipo_sala: "normal" },
    { nome: "Electrotecnia", tipo_sala: "normal" },
    { nome: "Matemática", tipo_sala: "normal" },
    { nome: "TIC", tipo_sala: "Laboratório de Informática" },
    { nome: "SEAC", tipo_sala: "normal" },
    { nome: "TLP", tipo_sala: "Laboratório de Informática" },
    { nome: "Desenho Técnico", tipo_sala: "normal"}, 
    { nome: "Educação Física", tipo_sala: "Campo" }
  ];

  const disciplinas = [];
  for (const disciplina of disciplinasData) {
    const disc = await prisma.disciplina.upsert({
      where: { descricao_disciplina: disciplina.nome },
      update: { tipo_sala: disciplina.tipo_sala },
      create: { descricao_disciplina: disciplina.nome, tipo_sala: disciplina.tipo_sala },
    });
    disciplinas.push(disc);
  }
  console.log(`✅ ${disciplinas.length} disciplinas criadas/verificadas`);

  // 6. Criar Professores
  const professoresData = [
    { nome: "Genildo Teste", email: "genildo.teste@escola.ao", telefone:"939000001" },
    { nome: "Daniel Teste", email: "daniel.teste@escola.ao", telefone: "939000002" },
    { nome: "Eduardo Teste", email: "eduardo.teste@escola.ao", telefone: "939000003" },
    { nome: "Cariongo Teste", email: "cariongo.teste@escola.ao", telefone: "939000004" },
    { nome: "Sapalalo Teste", email: "sapalalo.teste@escola.ao", telefone: "939000005" },
    { nome: "Vicente Teste", email: "vicente.teste@escola.ao", telefone: "939000006" },
    { nome: "Cardino Teste", email: "cardino.teste@escola.ao", telefone: "939000007" },
    { nome: "Magalhães Teste", email: "magalhaes@escola.ao", telefone: "939000008" },
    { nome: "Mário Teste", email: "mario.teste@escola.ao", telefone: "939000009" }
  ];

  const professores = [];
  for (const prof of professoresData) {
    const professor = await prisma.professor.upsert({
      where: { email: prof.email },
      update: { nome_professor: prof.nome, telefone: prof.telefone },
      create: {
        nome_professor: prof.nome,
        email: prof.email,
        telefone: prof.telefone,
      },
    });
    professores.push(professor);
  }
  console.log(`✅ ${professores.length} professores criados/verificados`);

  // 7. Criar Disponibilidades dos Professores
  const disponibilidadesData = [
    // Prof. Genildo Teste
    { id_prof: professores[0].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[0].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[0].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    //Prof. Daniel Teste
    { id_prof: professores[1].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[1].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[1].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    //Prof. Eduardo Teste
    { id_prof: professores[2].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[2].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[2].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    //Prof. Cariongo Teste
    { id_prof: professores[3].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[3].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    //Prof. Sapalalo Teste
    { id_prof: professores[4].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[4].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[4].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[4].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[4].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    //Prof. Vicente Teste
    { id_prof: professores[5].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[5].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[5].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[5].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    //Prof. Cardino Teste
    { id_prof: professores[6].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[6].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[6].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[6].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[6].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[6].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[6].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    //Prof. Magalhães Teste
    { id_prof: professores[7].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[7].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[7].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    //Prof. Mário Teste
    { id_prof: professores[8].id_professor, dia: dias[2].id_dia, periodo: periodos[0].id_periodo, ordem: 1 },
    { id_prof: professores[8].id_professor, dia: dias[2].id_dia, periodo: periodos[0].id_periodo, ordem: 2 },
  ];

  const disponibilidades = [];
  for (const disp of disponibilidadesData) {
    const disponibilidade = await prisma.disponibilidade.upsert({
      where: { id_professor_id_dia_id_periodo_ordem: {
        id_professor: disp.id_prof,
        id_dia: disp.dia,
        id_periodo: disp.periodo,
        ordem: disp.ordem,
      }},
      update: {},
      create: {
        id_professor: disp.id_prof,
        id_dia: disp.dia,
        id_periodo: disp.periodo,
        ordem: disp.ordem,
      },
    });
    disponibilidades.push(disponibilidade);
  }
  console.log(`✅ ${disponibilidades.length} disponibilidades criadas`);

  // 8. Criar TurmaDisciplina e ProfTurmaDisciplina (Para Turma 0 - 10ª INF)
  const turma10INF = turmas[0]; // 10ª Informática
  
  const atribuicoesData = [
    { p: 0, d: 0 }, // Genildo -> Inglesa
    { p: 1, d: 1 }, // Daniel -> Física
    { p: 2, d: 2 }, // Eduardo -> PT
    { p: 3, d: 3 }, // Cariongo -> Electrotecnia
    { p: 4, d: 4 }, // Sapalalo -> Matemática
    { p: 5, d: 5 }, // Vicente -> TIC
    { p: 6, d: 6 }, // Cardino -> SEAC
    { p: 6, d: 7 }, // Cardino -> TLP
    { p: 7, d: 8 }, // Magalhães -> Desenho Técnico
    { p: 8, d: 9 }, // Mário -> Ed. Física
  ];

  const profTurmas: { ptId: number; p: number; d: number }[] = [];
  for (const atr of atribuicoesData) {
    // 8.1 Associa Disciplina a Turma
    await prisma.turmaDisciplina.upsert({
      where: { id_turma_id_disciplina: { id_turma: turma10INF.id_turma, id_disciplina: disciplinas[atr.d].id_disciplina } },
      update: { aulas_por_semana: 2 },
      create: { id_turma: turma10INF.id_turma, id_disciplina: disciplinas[atr.d].id_disciplina, aulas_por_semana: 2 }
    });
    
    // 8.2 Associa Professor a Turma e Disciplina
    const pt = await prisma.profTurmaDisciplina.upsert({
      where: { id_professor_id_turma_id_disciplina: {
        id_professor: professores[atr.p].id_professor,
        id_turma: turma10INF.id_turma,
        id_disciplina: disciplinas[atr.d].id_disciplina
      }},
      update: {},
      create: {
        id_professor: professores[atr.p].id_professor,
        id_turma: turma10INF.id_turma,
        id_disciplina: disciplinas[atr.d].id_disciplina
      }
    });
    profTurmas.push({ ptId: pt.id_atribuicao, p: atr.p, d: atr.d });
  }

  // Helper para buscar id_atribuicao
  const getAtribuicao = (pIdx: number, dIdx: number) => {
    return profTurmas.find(pt => pt.p === pIdx && pt.d === dIdx)?.ptId || 1;
  };

  // 9. Criar registos de TempoLectivo (Cria o Horário da 10ª INF)
  const tempoLectivoData = [
    //Segunda
    { p: 0, d: 0, sala: 11, dia: 0, per: 1, ord: 1 },
    { p: 0, d: 0, sala: 11, dia: 0, per: 1, ord: 2 },
    { p: 1, d: 1, sala: 11, dia: 0, per: 1, ord: 3 },
    { p: 1, d: 1, sala: 11, dia: 0, per: 1, ord: 4 },
    { p: 2, d: 2, sala: 11, dia: 0, per: 1, ord: 5 },
    { p: 2, d: 2, sala: 11, dia: 0, per: 1, ord: 6 },
    //Terça
    { p: 1, d: 1, sala: 11, dia: 1, per: 1, ord: 1 },
    { p: 0, d: 0, sala: 11, dia: 1, per: 1, ord: 2 },
    { p: 3, d: 3, sala: 11, dia: 1, per: 1, ord: 3 },
    { p: 3, d: 3, sala: 11, dia: 1, per: 1, ord: 4 },
    { p: 4, d: 4, sala: 11, dia: 1, per: 1, ord: 5 },
    { p: 4, d: 4, sala: 11, dia: 1, per: 1, ord: 6 },
    //Quarta - Manhã
    { p: 8, d: 9, sala: 17, dia: 2, per: 0, ord: 1 },
    { p: 8, d: 9, sala: 17, dia: 2, per: 0, ord: 2 },
    //Quarta - Tarde
    { p: 4, d: 4, sala: 11, dia: 2, per: 1, ord: 1 },
    { p: 4, d: 4, sala: 11, dia: 2, per: 1, ord: 2 },
    { p: 5, d: 5, sala: 16, dia: 2, per: 1, ord: 3 },
    { p: 5, d: 5, sala: 16, dia: 2, per: 1, ord: 4 },
    { p: 6, d: 6, sala: 11, dia: 2, per: 1, ord: 5 },
    { p: 2, d: 2, sala: 11, dia: 2, per: 1, ord: 6 },
    //Quinta
    { p: 5, d: 5, sala: 16, dia: 3, per: 1, ord: 1 },
    { p: 5, d: 5, sala: 16, dia: 3, per: 1, ord: 2 },
    { p: 4, d: 4, sala: 11, dia: 3, per: 1, ord: 3 },
    { p: 6, d: 7, sala: 15, dia: 3, per: 1, ord: 4 },
    { p: 6, d: 7, sala: 15, dia: 3, per: 1, ord: 5 },
    { p: 6, d: 7, sala: 15, dia: 3, per: 1, ord: 6 },
    //Sexta
    { p: 6, d: 6, sala: 4,  dia: 4, per: 1, ord: 1 },
    { p: 6, d: 6, sala: 4,  dia: 4, per: 1, ord: 2 },
    { p: 6, d: 7, sala: 16, dia: 4, per: 1, ord: 3 },
    { p: 7, d: 8, sala: 6,  dia: 4, per: 1, ord: 4 },
    { p: 7, d: 8, sala: 6,  dia: 4, per: 1, ord: 5 },
    { p: 7, d: 8, sala: 6,  dia: 4, per: 1, ord: 6 },
  ];

  await prisma.tempo_Lectivo.deleteMany()

  for (const aula of tempoLectivoData) {
    await prisma.tempo_Lectivo.create({
      data: {
        id_atribuicao: getAtribuicao(aula.p, aula.d),
        id_professor: professores[aula.p].id_professor,
        id_turma: turma10INF.id_turma,
        id_disciplina: disciplinas[aula.d].id_disciplina,
        id_sala: salas[aula.sala].id_sala,
        id_dia: dias[aula.dia].id_dia,
        id_periodo: periodos[aula.per].id_periodo,
        ordem: aula.ord,
        ano_lectivo: 2024
      }
    })
  }
  console.log(`✅ ${tempoLectivoData.length} registos de tempo lectivo criados`)   
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });