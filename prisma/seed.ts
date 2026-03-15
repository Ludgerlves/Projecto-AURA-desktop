import { DiaSemana, Periodo, PrismaClient } from "../lib/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({connectionString});
const prisma = new PrismaClient({adapter});
export  {prisma};

async function main() {
  // 1. Criar Classes
  const classesData = ["10ª Classe", "11ª Classe", "12ª Classe", "13ª Classe"];
  const classes = [];
  for (const nome of classesData) {
    const classe = await prisma.classe.upsert({
      where: { nome_classe: nome },
      update: { nome_classe: nome },
      create: { nome_classe: nome },
    });
    classes.push(classe);
  }
  console.log(`✅ ${classes.length} classes criadas/verificadas`);

  // 2. Criar Cursos
  const cursosData = ["Informática", "Contabilidade e Gestão", "Ciências Económicas e Jurídicas", "Ciências Físicas e Biológicas", "Electrónica", "Obras de Construcção Civil"];
  const cursos = [];
  for (const nome of cursosData) {
    const curso = await prisma.curso.upsert({
      where: { nome_curso: nome }, 
      update: { nome_curso: nome },
      create: { nome_curso: nome },
    });
    cursos.push(curso);
  }
  console.log(`✅ ${cursos.length} cursos criados/verificados`);

  // 3. Criar Turmas
  const turmas = [];

  for (const classe of classes) {
    for (const curso of cursos) {
      if ((classe.nome_classe !== "13ª Classe") || (curso.nome_curso !== "Ciências Físicas e Biológicas" && curso.nome_curso !== "Ciências Económicas e Jurídicas")) {

      const nome_turma = `${classe.nome_classe} ${curso.nome_curso}`;

      const turma = await prisma.turma.upsert({
          where: { nome_turma },
          update: { nome_classe: classe.nome_classe, nome_curso: curso.nome_curso },
          create: { 
            nome_turma, 
            nome_classe: classe.nome_classe, 
            nome_curso: curso.nome_curso 
          },
        });

        turmas.push(turma);
      }
    }
  }
  console.log(`✅ ${turmas.length} turmas criadas/verificadas`);

  // 4. Criar Salas
  const salasData = [
    { nome: "Sala 1", capacidade: 20 },
    { nome: "Sala 2", capacidade: 20 },
    { nome: "Sala 3", capacidade: 20 },
    { nome: "Sala 4", capacidade: 20 },
    { nome: "Sala 5", capacidade: 20 },
    { nome: "Sala 6", capacidade: 30 },
    { nome: "Sala 7", capacidade: 30 },
    { nome: "Sala 8", capacidade: 20 },
    { nome: "Sala 9", capacidade: 20 },
    { nome: "Sala 10", capacidade: 20 },
    { nome: "Sala 11", capacidade: 25 },
    { nome: "Sala 12", capacidade: 25 },
    { nome: "Sala 13", capacidade: 20 },
    { nome: "Sala 14", capacidade: 20 },
    { nome: "Sala 15", capacidade: 20 },
    { nome: "Lab INF 1", capacidade: 30 },
    { nome: "Lab INF 2", capacidade: 30 },
    { nome: "Campo", capacidade: 50 }
  ];

  const salas = [];

  for (const item of salasData) {
    const sala = await prisma.sala.upsert({
      where: { nome_sala: item.nome },
      update: { capacidade: item.capacidade },
      create: {
        nome_sala: item.nome,
        capacidade: item.capacidade,
      }
    });
    salas.push(sala);
  }
  console.log(`✅ ${salas.length} salas criadas/verificadas`);

  // 5. Criar Disciplinas
  const disciplinasData = [
    { nome_disciplina: "Língua Inglesa" },
    { nome_disciplina: "Física" },
    { nome_disciplina: "Língua Portuguesa" },
    { nome_disciplina: "Electrotecnia" },
    { nome_disciplina: "Matemática" },
    { nome_disciplina: "TIC" },
    { nome_disciplina: "SEAC" },
    { nome_disciplina: "TLP" },
    { nome_disciplina: "Desenho Técnico"}, 
    { nome_disciplina: "Educação Física" }
  ];

  const disciplinas = [];

  for (const disciplina of disciplinasData) {
    const disc = await prisma.disciplina.upsert({
      where: { nome_disciplina: disciplina.nome_disciplina },
      update: {},
      create: { nome_disciplina: disciplina.nome_disciplina },
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
    { nome: "Magalhaẽs Teste", email: "magalhaes@escola.ao", telefone: "939000008" },
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
    { id_professor: professores[0].id_professor, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 1 },
    { id_professor: professores[0].id_professor, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 2 },
    { id_professor: professores[0].id_professor, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 2 },

    //Prof. Daniel Teste
    { id_professor: professores[1].id_professor, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 3 },
    { id_professor: professores[1].id_professor, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 4 },
    { id_professor: professores[1].id_professor, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 1 },

    //Prof. Eduardo Teste
    { id_professor: professores[2].id_professor, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 5 },
    { id_professor: professores[2].id_professor, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 6 },
    { id_professor: professores[2].id_professor, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 6 },

    //Prof. Cariongo Teste
    { id_professor: professores[3].id_professor, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 3 },
    { id_professor: professores[3].id_professor, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 4 },

    //Prof. Sapalalo Teste
    { id_professor: professores[4].id_professor, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 5 },
    { id_professor: professores[4].id_professor, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 6 },
    { id_professor: professores[4].id_professor, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 1 },
    { id_professor: professores[4].id_professor, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 2 },
    { id_professor: professores[4].id_professor, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 3 },

    //Prof. Vicente Teste
    { id_professor: professores[5].id_professor, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 3 },
    { id_professor: professores[5].id_professor, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 4 },
    { id_professor: professores[5].id_professor, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 1 },
    { id_professor: professores[5].id_professor, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 2 },

    //Prof. Cardino Teste
    { id_professor: professores[6].id_professor, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 5 },
    { id_professor: professores[6].id_professor, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 4 },
    { id_professor: professores[6].id_professor, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 5 },
    { id_professor: professores[6].id_professor, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 6 },
    { id_professor: professores[6].id_professor, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 1 },
    { id_professor: professores[6].id_professor, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 2 },
    { id_professor: professores[6].id_professor, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 3 },

    //Prof. Magalhães Teste
    { id_professor: professores[7].id_professor, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 4 },
    { id_professor: professores[7].id_professor, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 5 },
    { id_professor: professores[7].id_professor, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 6 },

    //Prof. Mário Teste
    { id_professor: professores[8].id_professor, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.MANHA, ordem: 1 },
    { id_professor: professores[8].id_professor, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.MANHA, ordem: 2 },

  ];

  const disponibilidades = [];

  for (const disp of disponibilidadesData) {
    const disponibilidade = await prisma.disponibilidade.upsert({
      where: { id_professor_nome_dia_nome_periodo_ordem: {
        id_professor: disp.id_professor,
        nome_dia: disp.nome_dia,
        nome_periodo: disp.nome_periodo,
        ordem: disp.ordem,
      }},
      update: {},
      create: {
        id_professor: disp.id_professor,
        nome_dia: disp.nome_dia,
        nome_periodo: disp.nome_periodo,
        ordem: disp.ordem,
      },
    });
    disponibilidades.push(disponibilidade);
  }
  console.log(`✅ ${disponibilidades.length} disponibilidades criadas/verificadas`);

  // 8. Criar registos de TempoLectivo (Cria o Horário da 10ª INF)
  const tempoLectivoData = [
    //Segunda
    { id_professor: professores[0].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[0].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 1 },
    { id_professor: professores[0].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[0].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 2 },
    { id_professor: professores[1].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[1].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 3 },
    { id_professor: professores[1].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[1].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 4 },
    { id_professor: professores[2].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[2].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 5 },
    { id_professor: professores[2].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[2].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.SEGUNDA, nome_periodo: Periodo.TARDE, ordem: 6 },

    //Terça
    { id_professor: professores[1].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[1].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 1 },
    { id_professor: professores[0].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[0].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 2 },
    { id_professor: professores[3].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[3].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 3 },
    { id_professor: professores[3].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[3].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 4 },
    { id_professor: professores[4].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[4].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 5 },
    { id_professor: professores[4].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[4].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.TERCA, nome_periodo: Periodo.TARDE, ordem: 6 },

    //Quarta - Manhã
    { id_professor: professores[8].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[9].nome_disciplina, nome_sala: salas[17].nome_sala, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.MANHA, ordem: 1 },
    { id_professor: professores[8].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[9].nome_disciplina, nome_sala: salas[17].nome_sala, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.MANHA, ordem: 2 },

    //Quarta - Tarde
    { id_professor: professores[4].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[4].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 1 },
    { id_professor: professores[4].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[4].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 2 },
    { id_professor: professores[5].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[5].nome_disciplina, nome_sala: salas[16].nome_sala, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 3 },
    { id_professor: professores[5].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[5].nome_disciplina, nome_sala: salas[16].nome_sala, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 4 },
    { id_professor: professores[6].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[6].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 5 },
    { id_professor: professores[2].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[2].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.QUARTA, nome_periodo: Periodo.TARDE, ordem: 6 },

    //Quinta
    { id_professor: professores[5].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[5].nome_disciplina, nome_sala: salas[16].nome_sala, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 1 },
    { id_professor: professores[5].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[5].nome_disciplina, nome_sala: salas[16].nome_sala, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 2 },
    { id_professor: professores[4].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[4].nome_disciplina, nome_sala: salas[11].nome_sala, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 3 },
    { id_professor: professores[6].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[7].nome_disciplina, nome_sala: salas[15].nome_sala, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 4 },
    { id_professor: professores[6].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[7].nome_disciplina, nome_sala: salas[15].nome_sala, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 5 },
    { id_professor: professores[6].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[7].nome_disciplina, nome_sala: salas[15].nome_sala, nome_dia: DiaSemana.QUINTA, nome_periodo: Periodo.TARDE, ordem: 6 },

    //Sexta
    { id_professor: professores[6].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[6].nome_disciplina, nome_sala: salas[4].nome_sala, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 1 },
    { id_professor: professores[6].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[6].nome_disciplina, nome_sala: salas[4].nome_sala, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 2 },
    { id_professor: professores[6].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[7].nome_disciplina, nome_sala: salas[16].nome_sala, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 3 },
    { id_professor: professores[7].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[8].nome_disciplina, nome_sala: salas[6].nome_sala, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 4 },
    { id_professor: professores[7].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[8].nome_disciplina, nome_sala: salas[6].nome_sala, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 5 },
    { id_professor: professores[7].id_professor, nome_turma: turmas[0].nome_turma, nome_disciplina: disciplinas[8].nome_disciplina, nome_sala: salas[6].nome_sala, nome_dia: DiaSemana.SEXTA, nome_periodo: Periodo.TARDE, ordem: 6 },
  ];

  await prisma.tempo_Lectivo.deleteMany()

  for (const aula of tempoLectivoData) {
    await prisma.tempo_Lectivo.create({
      data: {
        id_professor:    aula.id_professor,
        nome_turma:      aula.nome_turma,
        nome_disciplina: aula.nome_disciplina,
        nome_sala:       aula.nome_sala,
        nome_dia:        aula.nome_dia,
        nome_periodo:    aula.nome_periodo,
        ordem:           aula.ordem,
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