import { PrismaClient } from "../lib/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({connectionString});
const prisma = new PrismaClient({adapter});
export  {prisma};

interface Professores {
  id_professor: number;
  nome_professor: string;
  email: string;
  telefone: string;
}

interface Dias {
  id_dia: number;
  descricao_dia: string;
}

interface Periodos {
  id_periodo: number;
  descricao_periodo: string;
}

interface Salas {
  id_sala: number;
}

interface Disciplinas {
  id_disciplina: number;
  descricao_disciplina: string;
}

interface Disponibilidades {
  id_disponibilidade: number;

}

async function main() {
  // 0.1 Criar Dias da Semana
  const diasData = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  const dias: Dias[] = [];
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
  const periodosData = ["Manhã", "Tarde"];
  const periodos: Periodos[] = [];
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
  // Índices: 0-21=Sala1-22, 22=Lab INF 1, 23=Lab INF 2, 24=Campo
  const salasData = [
    { nome: "Sala 1",  capacidade: 20, tipo_sala: "normal" },   // 0
    { nome: "Sala 2",  capacidade: 20, tipo_sala: "normal" },   // 1
    { nome: "Sala 3",  capacidade: 20, tipo_sala: "normal" },   // 2
    { nome: "Sala 4",  capacidade: 20, tipo_sala: "normal" },   // 3
    { nome: "Sala 5",  capacidade: 20, tipo_sala: "normal" },   // 4
    { nome: "Sala 6",  capacidade: 30, tipo_sala: "normal" },   // 5
    { nome: "Sala 7",  capacidade: 30, tipo_sala: "normal" },   // 6
    { nome: "Sala 8",  capacidade: 20, tipo_sala: "normal" },   // 7
    { nome: "Sala 9",  capacidade: 20, tipo_sala: "normal" },   // 8
    { nome: "Sala 10", capacidade: 20, tipo_sala: "normal" },   // 9
    { nome: "Sala 11", capacidade: 25, tipo_sala: "normal" },   // 10
    { nome: "Sala 12", capacidade: 25, tipo_sala: "normal" },   // 11
    { nome: "Sala 13", capacidade: 20, tipo_sala: "normal" },   // 12
    { nome: "Sala 14", capacidade: 20, tipo_sala: "normal" },   // 13
    { nome: "Sala 15", capacidade: 20, tipo_sala: "normal" },   // 14
    { nome: "Sala 16", capacidade: 25, tipo_sala: "normal" },   // 15
    { nome: "Sala 17", capacidade: 25, tipo_sala: "normal" },   // 16
    { nome: "Sala 18", capacidade: 20, tipo_sala: "normal" },   // 17
    { nome: "Sala 19", capacidade: 20, tipo_sala: "normal" },   // 18
    { nome: "Sala 20", capacidade: 20, tipo_sala: "normal" },   // 19
    { nome: "Sala 21", capacidade: 25, tipo_sala: "normal" },   // 20
    { nome: "Sala 22", capacidade: 25, tipo_sala: "normal" },   // 21
    { nome: "Lab INF 1", capacidade: 30, tipo_sala: "Laboratório de Informática" }, // 22
    { nome: "Lab INF 2", capacidade: 30, tipo_sala: "Laboratório de Informática" }, // 23
    { nome: "Campo",     capacidade: 50, tipo_sala: "Campo" },  // 24
  ];

  const salas: Salas[] = [];
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

  // Índices das turmas INF (curso Informática = índice 0 no cursosData)
  // turmas são criadas por classe × curso
  // 10ª INF = turmas[0], 11ª INF = turmas[6], 12ª INF = turmas[12], 13ª INF = turmas[18]
  // (6 cursos por classe, INF é o primeiro curso)
  const turma10INF = turmas[0];
  const turma11INF = turmas[6];
  const turma12INF = turmas[12];
  const turma13INF = turmas[18];

  // 5. Criar Disciplinas
  // Índices:
  //  0=Língua Inglesa, 1=Física, 2=Língua Portuguesa, 3=Electrotecnia
  //  4=Matemática, 5=TIC, 6=SEAC, 7=TLP, 8=Desenho Técnico
  //  9=Educação Física, 10=TREI, 11=Química, 12=FAI
  //  13=Projecto Tecnológico, 14=OGI, 15=Empreendedorismo
  const disciplinasData = [
    { nome: "Língua Inglesa",       tipo_sala: "Normal" },                   // 0
    { nome: "Física",               tipo_sala: "Normal" },                   // 1
    { nome: "Língua Portuguesa",    tipo_sala: "Normal" },                   // 2
    { nome: "Electrotecnia",        tipo_sala: "Normal" },                   // 3
    { nome: "Matemática",           tipo_sala: "Normal" },                   // 4
    { nome: "TIC",                  tipo_sala: "Laboratório de Informática" }, // 5
    { nome: "SEAC",                 tipo_sala: "Normal" },                   // 6
    { nome: "TLP",                  tipo_sala: "Laboratório de Informática" }, // 7
    { nome: "Desenho Técnico",      tipo_sala: "Normal" },                   // 8
    { nome: "Educação Física",      tipo_sala: "Campo" },                    // 9
    { nome: "TREI",                 tipo_sala: "Laboratório de Informática" }, // 10
    { nome: "Química",              tipo_sala: "Normal" },                   // 11
    { nome: "FAI",                  tipo_sala: "Normal" },                   // 12
    { nome: "Projecto Tecnológico", tipo_sala: "Normal" },                   // 13
    { nome: "OGI",                  tipo_sala: "Normal" },                   // 14
    { nome: "Empreendedorismo",     tipo_sala: "Normal" },                   // 15
  ];

  const disciplinas: Disciplinas[] = [];
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
  // Índices:
  //  10ª INF:  0=Genildo, 1=Daniel, 2=Eduardo, 3=Cariongo, 4=Sapalalo
  //            5=Vicente, 6=Cardino, 7=Magalhães, 8=Mário
  //  11ª INF:  9=Salopa, 10=Alexandre, 11=Abílio, 12=Alberto, 13=Olívia
  //            (Nunes=6=Cardino reutilizado, Daniel=1, Vicente=5 reutilizados)
  //  12ª INF:  14=Helder, 15=Cena, 16=Catarina, 17=Tito, 18=Alfredo, 19=Maura, 20=Garcia
  //            (Alexandre=10, Nunes=6 reutilizados)
  //  13ª INF:  21=Moisés
  //            (Tito=17, Daniel=1, Alexandre=10 reutilizados)
  const professoresData = [
    // 10ª INF
    { nome: "Genildo Teste",   email: "genildo.teste@escola.ao",   telefone: "939000001" }, // 0
    { nome: "Daniel Teste",    email: "daniel.teste@escola.ao",    telefone: "939000002" }, // 1
    { nome: "Eduardo Teste",   email: "eduardo.teste@escola.ao",   telefone: "939000003" }, // 2
    { nome: "Cariongo Teste",  email: "cariongo.teste@escola.ao",  telefone: "939000004" }, // 3
    { nome: "Sapalalo Teste",  email: "sapalalo.teste@escola.ao",  telefone: "939000005" }, // 4
    { nome: "Vicente Teste",   email: "vicente.teste@escola.ao",   telefone: "939000006" }, // 5
    { nome: "Cardino Teste",   email: "cardino.teste@escola.ao",   telefone: "939000007" }, // 6
    { nome: "Magalhães Teste", email: "magalhaes@escola.ao",       telefone: "939000008" }, // 7
    { nome: "Mário Teste",     email: "mario.teste@escola.ao",     telefone: "939000009" }, // 8
    // 11ª INF (novos)
    { nome: "Salopa Teste",    email: "salopa.teste@escola.ao",    telefone: "939000010" }, // 9
    { nome: "Alexandre Teste", email: "alexandre.teste@escola.ao", telefone: "939000011" }, // 10
    { nome: "Abílio Teste",    email: "abilio.teste@escola.ao",    telefone: "939000012" }, // 11
    { nome: "Alberto Teste",   email: "alberto.teste@escola.ao",   telefone: "939000013" }, // 12
    { nome: "Olívia Teste",    email: "olivia.teste@escola.ao",    telefone: "939000014" }, // 13
    // 12ª INF (novos)
    { nome: "Helder Teste",    email: "helder.teste@escola.ao",    telefone: "939000015" }, // 14
    { nome: "Cena Teste",      email: "cena.teste@escola.ao",      telefone: "939000016" }, // 15
    { nome: "Catarina Teste",  email: "catarina.teste@escola.ao",  telefone: "939000017" }, // 16
    { nome: "Tito Teste",      email: "tito.teste@escola.ao",      telefone: "939000018" }, // 17
    { nome: "Alfredo Teste",   email: "alfredo.teste@escola.ao",   telefone: "939000019" }, // 18
    { nome: "Maura Teste",     email: "maura.teste@escola.ao",     telefone: "939000020" }, // 19
    { nome: "Garcia Teste",    email: "garcia.teste@escola.ao",    telefone: "939000021" }, // 20
    // 13ª INF (novo)
    { nome: "Moisés Teste",    email: "moises.teste@escola.ao",    telefone: "939000022" }, // 21
  ];

  const professores: Professores[] = [];
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

  // 7. Criar Disponibilidades
  // dia: 0=Segunda, 1=Terça, 2=Quarta, 3=Quinta, 4=Sexta
  // periodo: 0=Manhã, 1=Tarde
  const disponibilidadesData = [
    // ── 10ª INF ────────────────────────────────────────────────────────────
    // Prof. Genildo (0) — Segunda T1-T4, Terça T2
    { id_prof: professores[0].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[0].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[0].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[0].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[0].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[0].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    // Prof. Daniel (1) — Segunda T3-T4, Terça T1-T2, Quinta T5-T6 (13ªINF), 13ª Quinta T5-T6
    { id_prof: professores[1].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[1].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[1].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[1].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[1].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[1].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    // Prof. Eduardo (2) — Segunda T5-T6, Quarta T6
    { id_prof: professores[2].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[2].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[2].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    // Prof. Cariongo (3) — Terça T3-T4
    { id_prof: professores[3].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[3].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    // Prof. Sapalalo (4) — Terça T5-T6, Quarta T1-T2, Quinta T3
    { id_prof: professores[4].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[4].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[4].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[4].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[4].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    // Prof. Vicente (5) — Quarta T3-T4, Quinta T1-T2, Quinta T5-T6 (11ªINF), Sexta T5-T6 (11ªINF)
    { id_prof: professores[5].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[5].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[5].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[5].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[5].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[5].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[5].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[5].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    // Prof. Cardino/Nunes (6) — Quarta T5, Quinta T4-T6, Sexta T1-T3 (10ªINF)
    //                          Terça T1 (11ªINF TLP), Quarta T1-T3 (11ªINF TLP)
    //                          Manhã Terça T3-T6 (12ªINF SEAC), Manhã Sexta T3-T6 (12ªINF SEAC)
    { id_prof: professores[6].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[6].id_professor, dia: dias[2].id_dia, periodo: periodos[0].id_periodo, ordem: 3 },
    { id_prof: professores[6].id_professor, dia: dias[2].id_dia, periodo: periodos[0].id_periodo, ordem: 4 },
    { id_prof: professores[6].id_professor, dia: dias[2].id_dia, periodo: periodos[0].id_periodo, ordem: 5 },
    { id_prof: professores[6].id_professor, dia: dias[2].id_dia, periodo: periodos[0].id_periodo, ordem: 6 },
    { id_prof: professores[6].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[6].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[6].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[6].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[6].id_professor, dia: dias[4].id_dia, periodo: periodos[0].id_periodo, ordem: 3 },
    { id_prof: professores[6].id_professor, dia: dias[4].id_dia, periodo: periodos[0].id_periodo, ordem: 4 },
    { id_prof: professores[6].id_professor, dia: dias[4].id_dia, periodo: periodos[0].id_periodo, ordem: 5 },
    { id_prof: professores[6].id_professor, dia: dias[4].id_dia, periodo: periodos[0].id_periodo, ordem: 6 },
    { id_prof: professores[6].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[6].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[6].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    // Prof. Magalhães (7) — Sexta T4-T6
    { id_prof: professores[7].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[7].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[7].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    // Prof. Mário (8) — Quarta Manhã T1-T2 (10ªINF), Quarta Manhã T3-T4 (11ªINF)
    { id_prof: professores[8].id_professor, dia: dias[2].id_dia, periodo: periodos[0].id_periodo, ordem: 1 },
    { id_prof: professores[8].id_professor, dia: dias[2].id_dia, periodo: periodos[0].id_periodo, ordem: 2 },
    { id_prof: professores[8].id_professor, dia: dias[2].id_dia, periodo: periodos[0].id_periodo, ordem: 3 },
    { id_prof: professores[8].id_professor, dia: dias[2].id_dia, periodo: periodos[0].id_periodo, ordem: 4 },
    // ── 11ª INF ────────────────────────────────────────────────────────────
    // Prof. Salopa (9) — Segunda T3-T4, Quarta T4
    { id_prof: professores[9].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[9].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[9].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    // Prof. Alexandre (10) — Terça T3-T4, Segunda T5, Terça T5 (12ªINF), Quinta T5-T6 (12ªINF), Terça T5-T6 (13ªINF)
    { id_prof: professores[10].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[10].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[10].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[10].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[10].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[10].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[10].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[10].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    // Prof. Abílio (11) — Quinta T3-T4, Segunda T6
    { id_prof: professores[11].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[11].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[11].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    // Prof. Alberto (12) — Sexta T3-T4, Quarta T5-T6, Quinta T3-T4 (13ªINF)
    { id_prof: professores[12].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[12].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[12].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[12].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[12].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[12].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    // Prof. Olívia (13) — Sexta T1-T2
    { id_prof: professores[13].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[13].id_professor, dia: dias[4].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    // ── 12ª INF ────────────────────────────────────────────────────────────
    // Prof. Helder (14) — Manhã Terça T1-T3, Manhã Sexta T1-T2 (na escola usa Oficina mas aqui Lab INF 2)
    { id_prof: professores[14].id_professor, dia: dias[1].id_dia, periodo: periodos[0].id_periodo, ordem: 1 },
    { id_prof: professores[14].id_professor, dia: dias[1].id_dia, periodo: periodos[0].id_periodo, ordem: 2 },
    { id_prof: professores[14].id_professor, dia: dias[1].id_dia, periodo: periodos[0].id_periodo, ordem: 3 },
    { id_prof: professores[14].id_professor, dia: dias[4].id_dia, periodo: periodos[0].id_periodo, ordem: 1 },
    { id_prof: professores[14].id_professor, dia: dias[4].id_dia, periodo: periodos[0].id_periodo, ordem: 2 },
    // Prof. Cena (15) — Manhã Terça T4-T6, Segunda T5-T6, Quinta T5 (12ªINF TLP tarde)
    { id_prof: professores[15].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[15].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    { id_prof: professores[15].id_professor, dia: dias[1].id_dia, periodo: periodos[0].id_periodo, ordem: 4 },
    { id_prof: professores[15].id_professor, dia: dias[1].id_dia, periodo: periodos[0].id_periodo, ordem: 5 },
    { id_prof: professores[15].id_professor, dia: dias[1].id_dia, periodo: periodos[0].id_periodo, ordem: 6 },
    // Prof. Catarina (16) — Segunda T1-T2
    { id_prof: professores[16].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[16].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    // Prof. Tito (17) — Segunda T3-T4, Quarta T1-T2, Quinta T1-T2, Quinta T3-T4 (13ªINF)
    { id_prof: professores[17].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[17].id_professor, dia: dias[0].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    { id_prof: professores[17].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[17].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[17].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 1 },
    { id_prof: professores[17].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 2 },
    { id_prof: professores[17].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[17].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    // Prof. Alfredo (18) — Quarta T3-T4
    { id_prof: professores[18].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[18].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    // Prof. Maura (19) — Quarta T5-T6
    { id_prof: professores[19].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 5 },
    { id_prof: professores[19].id_professor, dia: dias[2].id_dia, periodo: periodos[1].id_periodo, ordem: 6 },
    // Prof. Garcia (20) — Quinta T3-T4
    { id_prof: professores[20].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[20].id_professor, dia: dias[3].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
    // ── 13ª INF ────────────────────────────────────────────────────────────
    // Prof. Moisés (21) — Terça T3-T4
    { id_prof: professores[21].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 3 },
    { id_prof: professores[21].id_professor, dia: dias[1].id_dia, periodo: periodos[1].id_periodo, ordem: 4 },
  ];

  const disponibilidades = [];
  for (const disp of disponibilidadesData) {
    const disponibilidade = await prisma.disponibilidade.upsert({
      where: { id_professor_id_dia_id_periodo_ordem: {
        id_professor: disp.id_prof,
        id_dia:       disp.dia,
        id_periodo:   disp.periodo,
        ordem:        disp.ordem,
      }},
      update: {},
      create: {
        id_professor: disp.id_prof,
        id_dia:       disp.dia,
        id_periodo:   disp.periodo,
        ordem:        disp.ordem,
      },
    });
    disponibilidades.push(disponibilidade);
  }
  console.log(`✅ ${disponibilidades.length} disponibilidades criadas/verificadas`);

  // ══════════════════════════════════════════════════════════════════════════
  // 8. TurmaDisciplina + ProfTurmaDisciplina + TempoLectivo
  // ══════════════════════════════════════════════════════════════════════════

  await prisma.tempo_Lectivo.deleteMany();

  // Helper: upsert turmaDisciplina + profTurmaDisciplina e devolve id_atribuicao
  async function criarAtribuicao(
    pIdx: number,    // índice do professor
    dIdx: number,    // índice da disciplina
    tIdx: number,    // índice da turma (objeto turma, não array)
    aulasPorSemana: number,
    turmaObj: { id_turma: number }
  ) {
    await prisma.turmaDisciplina.upsert({
      where: { id_turma_id_disciplina: { id_turma: turmaObj.id_turma, id_disciplina: disciplinas[dIdx].id_disciplina } },
      update: { aulas_por_semana: aulasPorSemana },
      create: { id_turma: turmaObj.id_turma, id_disciplina: disciplinas[dIdx].id_disciplina, aulas_por_semana: aulasPorSemana }
    });

    const pt = await prisma.profTurmaDisciplina.upsert({
      where: { id_professor_id_turma_id_disciplina: {
        id_professor:  professores[pIdx].id_professor,
        id_turma:      turmaObj.id_turma,
        id_disciplina: disciplinas[dIdx].id_disciplina
      }},
      update: {},
      create: {
        id_professor:  professores[pIdx].id_professor,
        id_turma:      turmaObj.id_turma,
        id_disciplina: disciplinas[dIdx].id_disciplina
      }
    });

    return pt.id_atribuicao;
  }

  // Helper: criar registo de TempoLectivo
  async function criarTL(
    idAtribuicao: number,
    pIdx: number,
    turmaObj: { id_turma: number },
    dIdx: number,
    salaIdx: number,
    diaIdx: number,
    perIdx: number,
    ord: number
  ) {
    await prisma.tempo_Lectivo.create({
      data: {
        id_atribuicao: idAtribuicao,
        id_professor:  professores[pIdx].id_professor,
        id_turma:      turmaObj.id_turma,
        id_disciplina: disciplinas[dIdx].id_disciplina,
        id_sala:       salas[salaIdx].id_sala,
        id_dia:        dias[diaIdx].id_dia,
        id_periodo:    periodos[perIdx].id_periodo,
        ordem:         ord,
        ano_lectivo:   2024
      }
    });
  }

  // ── 10ª INF ────────────────────────────────────────────────────────────────
  console.log("A criar horário 10ª INF...");

  // p=professor idx, d=disciplina idx, aulas=aulas_por_semana
  // 0=Genildo/Inglesa, 1=Daniel/Física, 2=Eduardo/PT, 3=Cariongo/Electrotecnia
  // 4=Sapalalo/Matemática, 5=Vicente/TIC, 6=Cardino/SEAC, 6=Cardino/TLP
  // 7=Magalhães/Desenho, 8=Mário/EdFísica
  const at10_0  = await criarAtribuicao(0, 0,  0, 4, turma10INF);  // Genildo  Inglesa      4x
  const at10_1  = await criarAtribuicao(1, 1,  0, 4, turma10INF);  // Daniel   Física        4x
  const at10_2  = await criarAtribuicao(2, 2,  0, 4, turma10INF);  // Eduardo  L.Portuguesa  4x
  const at10_3  = await criarAtribuicao(3, 3,  0, 4, turma10INF);  // Cariongo Electrotecnia 4x
  const at10_4  = await criarAtribuicao(4, 4,  0, 4, turma10INF);  // Sapalalo Matemática   4x
  const at10_5  = await criarAtribuicao(5, 5,  0, 4, turma10INF);  // Vicente  TIC           4x
  const at10_6  = await criarAtribuicao(6, 6,  0, 3, turma10INF);  // Cardino  SEAC          3x
  const at10_7  = await criarAtribuicao(6, 7,  0, 3, turma10INF);  // Cardino  TLP           3x
  const at10_8  = await criarAtribuicao(7, 8,  0, 3, turma10INF);  // Magalhães Desenho      3x
  const at10_9  = await criarAtribuicao(8, 9,  0, 2, turma10INF);  // Mário   Ed.Física      2x

  // Segunda: Inglesa T1-T2, Física T3-T4, L.Port T5-T6 — Sala 12 (idx 11)
  await criarTL(at10_0, 0, turma10INF, 0, 11, 0, 1, 1);
  await criarTL(at10_0, 0, turma10INF, 0, 11, 0, 1, 2);
  await criarTL(at10_1, 1, turma10INF, 1, 11, 0, 1, 3);
  await criarTL(at10_1, 1, turma10INF, 1, 11, 0, 1, 4);
  await criarTL(at10_2, 2, turma10INF, 2, 11, 0, 1, 5);
  await criarTL(at10_2, 2, turma10INF, 2, 11, 0, 1, 6);
  // Terça: Física T1, Inglesa T2, Electrotecnia T3-T4, Matemática T5-T6
  await criarTL(at10_1, 1, turma10INF, 1, 11, 1, 1, 1);
  await criarTL(at10_0, 0, turma10INF, 0, 11, 1, 1, 2);
  await criarTL(at10_3, 3, turma10INF, 3, 11, 1, 1, 3);
  await criarTL(at10_3, 3, turma10INF, 3, 11, 1, 1, 4);
  await criarTL(at10_4, 4, turma10INF, 4, 11, 1, 1, 5);
  await criarTL(at10_4, 4, turma10INF, 4, 11, 1, 1, 6);
  // Quarta Manhã: Ed.Física T1-T2 — Campo (idx 24)
  await criarTL(at10_9, 8, turma10INF, 9, 24, 2, 0, 1);
  await criarTL(at10_9, 8, turma10INF, 9, 24, 2, 0, 2);
  // Quarta Tarde: Matemática T1-T2 — Sala 12, TIC T3-T4 — Lab INF 2 (idx 23), SEAC T5, L.Port T6
  await criarTL(at10_4, 4, turma10INF, 4, 11, 2, 1, 1);
  await criarTL(at10_4, 4, turma10INF, 4, 11, 2, 1, 2);
  await criarTL(at10_5, 5, turma10INF, 5, 23, 2, 1, 3);
  await criarTL(at10_5, 5, turma10INF, 5, 23, 2, 1, 4);
  await criarTL(at10_6, 6, turma10INF, 6, 11, 2, 1, 5);
  await criarTL(at10_2, 2, turma10INF, 2, 11, 2, 1, 6);
  // Quinta: TIC T1-T2 — Lab INF 2, Matemática T3, TLP T4-T6 — Lab INF 1 (idx 22)
  await criarTL(at10_5, 5, turma10INF, 5, 23, 3, 1, 1);
  await criarTL(at10_5, 5, turma10INF, 5, 23, 3, 1, 2);
  await criarTL(at10_4, 4, turma10INF, 4, 11, 3, 1, 3);
  await criarTL(at10_7, 6, turma10INF, 7, 22, 3, 1, 4);
  await criarTL(at10_7, 6, turma10INF, 7, 22, 3, 1, 5);
  await criarTL(at10_7, 6, turma10INF, 7, 22, 3, 1, 6);
  // Sexta: SEAC T1-T2 — Sala 5 (idx 4), TLP T3 — Lab INF 2, Desenho T4-T6 — Sala 7 (idx 6)
  await criarTL(at10_6, 6, turma10INF, 6,  4, 4, 1, 1);
  await criarTL(at10_6, 6, turma10INF, 6,  4, 4, 1, 2);
  await criarTL(at10_7, 6, turma10INF, 7, 23, 4, 1, 3);
  await criarTL(at10_8, 7, turma10INF, 8,  6, 4, 1, 4);
  await criarTL(at10_8, 7, turma10INF, 8,  6, 4, 1, 5);
  await criarTL(at10_8, 7, turma10INF, 8,  6, 4, 1, 6);

  console.log("✅ Horário 10ª INF criado");

  // ── 11ª INF ────────────────────────────────────────────────────────────────
  // Professores: Daniel(1)=Física, Salopa(9)=Inglesa, Alexandre(10)=Química
  //              Abílio(11)=L.Portuguesa, Alberto(12)=Matemática
  //              Vicente(5)=SEAC+TLP via Nunes, Cariongo(3)=Electrotecnia
  //              Cardino/Nunes(6)=TLP, Olívia(13)=FAI, Mário(8)=Ed.Física
  console.log("A criar horário 11ª INF...");

  const at11_0  = await criarAtribuicao(1,  1,  0, 4, turma11INF);  // Daniel    Física        4x
  const at11_1  = await criarAtribuicao(9,  0,  0, 4, turma11INF);  // Salopa    Inglesa       4x
  const at11_2  = await criarAtribuicao(10, 11, 0, 4, turma11INF);  // Alexandre Química       4x
  const at11_3  = await criarAtribuicao(11, 2,  0, 4, turma11INF);  // Abílio    L.Portuguesa  4x
  const at11_4  = await criarAtribuicao(12, 4,  0, 4, turma11INF);  // Alberto   Matemática    4x
  const at11_5  = await criarAtribuicao(5,  6,  0, 4, turma11INF);  // Vicente   SEAC          4x
  const at11_6  = await criarAtribuicao(6,  7,  0, 4, turma11INF);  // Nunes     TLP           4x (Terça T1, Quarta T1-T3)
  const at11_7  = await criarAtribuicao(3,  3,  0, 2, turma11INF);  // Cariongo  Electrotecnia 2x
  const at11_8  = await criarAtribuicao(13, 12, 0, 2, turma11INF);  // Olívia    FAI           2x
  const at11_9  = await criarAtribuicao(8,  9,  0, 2, turma11INF);  // Mário     Ed.Física     2x

  // Sala 13 = índice 12
  // Segunda: Física T1-T2 — Sala 13, Inglesa T3-T4, Química T5, L.Port T6
  await criarTL(at11_0, 1,  turma11INF, 1,  12, 0, 1, 1);
  await criarTL(at11_0, 1,  turma11INF, 1,  12, 0, 1, 2);
  await criarTL(at11_1, 9,  turma11INF, 0,  12, 0, 1, 3);
  await criarTL(at11_1, 9,  turma11INF, 0,  12, 0, 1, 4);
  await criarTL(at11_2, 10, turma11INF, 11, 12, 0, 1, 5);
  await criarTL(at11_3, 11, turma11INF, 2,  12, 0, 1, 6);
  // Terça: SEAC T1 (Lab INF 2, idx 23), Física T2, Química T3-T4, Electrotecnia T5-T6
  await criarTL(at11_6, 6,  turma11INF, 7,  23, 1, 1, 1);
  await criarTL(at11_0, 1,  turma11INF, 1,  12, 1, 1, 2);
  await criarTL(at11_2, 10, turma11INF, 11, 12, 1, 1, 3);
  await criarTL(at11_2, 10, turma11INF, 11, 12, 1, 1, 4);
  await criarTL(at11_7, 3,  turma11INF, 3,  12, 1, 1, 5);
  await criarTL(at11_7, 3,  turma11INF, 3,  12, 1, 1, 6);
  // Quarta Manhã: Ed.Física T3-T4 — Campo
  await criarTL(at11_9, 8,  turma11INF, 9,  24, 2, 0, 3);
  await criarTL(at11_9, 8,  turma11INF, 9,  24, 2, 0, 4);
  // Quarta Tarde: TLP T1-T3 (Lab INF 2), Inglesa T4, Matemática T5-T6
  await criarTL(at11_6, 6,  turma11INF, 7,  23, 2, 1, 1);
  await criarTL(at11_6, 6,  turma11INF, 7,  23, 2, 1, 2);
  await criarTL(at11_6, 6,  turma11INF, 7,  23, 2, 1, 3);
  await criarTL(at11_1, 9,  turma11INF, 0,  12, 2, 1, 4);
  await criarTL(at11_4, 12, turma11INF, 4,  12, 2, 1, 5);
  await criarTL(at11_4, 12, turma11INF, 4,  12, 2, 1, 6);
  // Quinta: TLP T1-T2 (Sala 13), L.Port T3-T4, SEAC T5-T6 (Lab INF 2)
  await criarTL(at11_6, 6,  turma11INF, 7,  12, 3, 1, 1);
  await criarTL(at11_6, 6,  turma11INF, 7,  12, 3, 1, 2);
  await criarTL(at11_3, 11, turma11INF, 2,  12, 3, 1, 3);
  await criarTL(at11_3, 11, turma11INF, 2,  12, 3, 1, 4);
  await criarTL(at11_5, 5,  turma11INF, 6,  23, 3, 1, 5);
  await criarTL(at11_5, 5,  turma11INF, 6,  23, 3, 1, 6);
  // Sexta: FAI T1-T2 — Sala 13, Matemática T3-T4, SEAC T5-T6 (Lab INF 2)
  await criarTL(at11_8, 13, turma11INF, 12, 12, 4, 1, 1);
  await criarTL(at11_8, 13, turma11INF, 12, 12, 4, 1, 2);
  await criarTL(at11_4, 12, turma11INF, 4,  12, 4, 1, 3);
  await criarTL(at11_4, 12, turma11INF, 4,  12, 4, 1, 4);
  await criarTL(at11_5, 5,  turma11INF, 6,  23, 4, 1, 5);
  await criarTL(at11_5, 5,  turma11INF, 6,  23, 4, 1, 6);

  console.log("✅ Horário 11ª INF criado");

  // ── 12ª INF ────────────────────────────────────────────────────────────────
  // Manhã: Helder(14)=TREI, Cena(15)=TLP, Nunes/Cardino(6)=SEAC
  // Tarde: Catarina(16)=Proj.Tec., Tito(17)=Matemática, Alexandre(10)=Química
  //        Alfredo(18)=OGI, Garcia(20)=Empreend., Maura(19)=FAI, Cena(15)=TLP tarde
  console.log("A criar horário 12ª INF...");

  const at12_0  = await criarAtribuicao(14, 10, 0, 5, turma12INF);  // Helder     TREI          5x
  const at12_1  = await criarAtribuicao(15, 7,  0, 5, turma12INF);  // Cena       TLP           5x (manhã+tarde)
  const at12_2  = await criarAtribuicao(6,  6,  0, 4, turma12INF);  // Nunes      SEAC          4x
  const at12_3  = await criarAtribuicao(16, 13, 0, 2, turma12INF);  // Catarina   Proj.Tec.     2x
  const at12_4  = await criarAtribuicao(17, 4,  0, 4, turma12INF);  // Tito       Matemática    4x
  const at12_5  = await criarAtribuicao(10, 11, 0, 4, turma12INF);  // Alexandre  Química       4x
  const at12_6  = await criarAtribuicao(18, 14, 0, 2, turma12INF);  // Alfredo    OGI           2x
  const at12_7  = await criarAtribuicao(20, 15, 0, 2, turma12INF);  // Garcia     Empreend.     2x
  const at12_8  = await criarAtribuicao(19, 12, 0, 2, turma12INF);  // Maura      FAI           2x

  // Sala 16 = índice 15, Sala 14 = índice 13, Sala 6 = índice 5
  // Manhã Terça: TREI T1-T3 (Lab INF 2), TLP T4-T6 (Lab INF 2 / Lab INF 1)
  await criarTL(at12_0, 14, turma12INF, 10, 23, 1, 0, 1);
  await criarTL(at12_0, 14, turma12INF, 10, 23, 1, 0, 2);
  await criarTL(at12_0, 14, turma12INF, 10, 23, 1, 0, 3);
  await criarTL(at12_1, 15, turma12INF, 7,  23, 1, 0, 4);
  await criarTL(at12_1, 15, turma12INF, 7,  22, 1, 0, 5);
  await criarTL(at12_1, 15, turma12INF, 7,  22, 1, 0, 6);
  // Manhã Sexta: TREI T1-T2, SEAC T3-T6 (Sala 14 / Sala 16)
  await criarTL(at12_0, 14, turma12INF, 10, 23, 4, 0, 1);
  await criarTL(at12_0, 14, turma12INF, 10, 23, 4, 0, 2);
  await criarTL(at12_2, 6,  turma12INF, 6,  13, 4, 0, 3);
  await criarTL(at12_2, 6,  turma12INF, 6,  13, 4, 0, 4);
  await criarTL(at12_2, 6,  turma12INF, 6,  15, 4, 0, 5);
  await criarTL(at12_2, 6,  turma12INF, 6,  15, 4, 0, 6);
  // Tarde Segunda: Proj.Tec T1-T2 (Sala 6), Matemática T3-T4 (Sala 16), TLP T5-T6
  await criarTL(at12_3, 16, turma12INF, 13, 5,  0, 1, 1);
  await criarTL(at12_3, 16, turma12INF, 13, 5,  0, 1, 2);
  await criarTL(at12_4, 17, turma12INF, 4,  15, 0, 1, 3);
  await criarTL(at12_4, 17, turma12INF, 4,  15, 0, 1, 4);
  await criarTL(at12_1, 15, turma12INF, 7,  22, 0, 1, 5);
  await criarTL(at12_1, 15, turma12INF, 7,  15, 0, 1, 6);
  // Tarde Quarta: Matemática T1-T2, Química T2, OGI T3-T4, FAI T5-T6
  await criarTL(at12_4, 17, turma12INF, 4,  15, 2, 1, 1);
  await criarTL(at12_5, 10, turma12INF, 11, 15, 2, 1, 2);
  await criarTL(at12_6, 18, turma12INF, 14, 5,  2, 1, 3);
  await criarTL(at12_6, 18, turma12INF, 14, 5,  2, 1, 4);
  await criarTL(at12_8, 19, turma12INF, 12, 15, 2, 1, 5);
  await criarTL(at12_8, 19, turma12INF, 12, 15, 2, 1, 6);
  // Tarde Quinta: Matemática T1-T2, Empreend. T3-T4, Química T5-T6
  await criarTL(at12_4, 17, turma12INF, 4,  15, 3, 1, 1);
  await criarTL(at12_4, 17, turma12INF, 4,  15, 3, 1, 2);
  await criarTL(at12_7, 20, turma12INF, 15, 15, 3, 1, 3);
  await criarTL(at12_7, 20, turma12INF, 15, 15, 3, 1, 4);
  await criarTL(at12_5, 10, turma12INF, 11, 15, 3, 1, 5);
  await criarTL(at12_5, 10, turma12INF, 11, 15, 3, 1, 6);

  console.log("✅ Horário 12ª INF criado");

  // ── 13ª INF ────────────────────────────────────────────────────────────────
  // A 13ª tem estágio de manhã (não modela no horário)
  // Tarde: Moisés(21)=Proj.Tec., Tito(17)=Matemática
  //        Alexandre(10)=Química, Daniel(1)=Física
  console.log("A criar horário 13ª INF...");

  const at13_0  = await criarAtribuicao(21, 13, 0, 2, turma13INF);  // Moisés    Proj.Tec.  2x
  const at13_1  = await criarAtribuicao(17, 4,  0, 2, turma13INF);  // Tito      Matemática 2x
  const at13_2  = await criarAtribuicao(10, 11, 0, 2, turma13INF);  // Alexandre Química    2x
  const at13_3  = await criarAtribuicao(1,  1,  0, 2, turma13INF);  // Daniel    Física     2x

  // Sala 21 = índice 20
  // Tarde Terça: Proj.Tec T3-T4, Química T5-T6
  await criarTL(at13_0, 21, turma13INF, 13, 20, 1, 1, 3);
  await criarTL(at13_0, 21, turma13INF, 13, 20, 1, 1, 4);
  await criarTL(at13_2, 10, turma13INF, 11, 20, 1, 1, 5);
  await criarTL(at13_2, 10, turma13INF, 11, 20, 1, 1, 6);
  // Tarde Quinta: Matemática T3-T4, Física T5-T6
  await criarTL(at13_1, 17, turma13INF, 4,  20, 3, 1, 3);
  await criarTL(at13_1, 17, turma13INF, 4,  20, 3, 1, 4);
  await criarTL(at13_3, 1,  turma13INF, 1,  20, 3, 1, 5);
  await criarTL(at13_3, 1,  turma13INF, 1,  20, 3, 1, 6);

  console.log("✅ Horário 13ª INF criado");

  console.log("\n🎉 Seed completo!");
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });