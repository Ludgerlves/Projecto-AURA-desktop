import { PrismaClient } from "../lib/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({connectionString});
const prisma = new PrismaClient({adapter});
export  {prisma};

async function main() {
  console.log("🌱 A semear dados de TempoLectivo...");

  // 1. Criar Dias da Semana
  const diasSemana = await Promise.all(
    ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"].map(
      (nome) =>
        prisma.diaSemana.upsert({
          where: { nome },
          update: {},
          create: { nome },
        })
    )
  );
  console.log(`✅ ${diasSemana.length} dias da semana criados/verificados`);

  // 2. Criar Períodos
  const periodosData = ["Manhã", "Tarde", "Noite"];
  const periodos = await Promise.all(
    periodosData.map((periodo) =>
      prisma.periodo.upsert({
        where: { periodo },
        update: {},
        create: { periodo },
      })
    )
  );
  console.log(`✅ ${periodos.length} períodos criados/verificados`);

  // 3. Criar Classes
  const classesData = ["10ª Classe", "11ª Classe", "12ª Classe", "13ª Classe"];
  const classes = [];
  for (const nome of classesData) {
    const classe = await prisma.classe.upsert({
      where: { idClasse: classesData.indexOf(nome) + 1 },
      update: { nome },
      create: { nome },
    });
    classes.push(classe);
  }
  console.log(`✅ ${classes.length} classes criadas/verificadas`);

  // 4. Criar Cursos
  const cursosData = ["Informática", "Contabilidade e Gestão", "Electrónica"];
  const cursos = [];
  for (const nome of cursosData) {
    const curso = await prisma.curso.upsert({
      where: { idCurso: cursosData.indexOf(nome) + 1 },
      update: { nome },
      create: { nome },
    });
    cursos.push(curso);
  }
  console.log(`✅ ${cursos.length} cursos criados/verificados`);

  // 5. Criar Turmas
  const turmasData = [
    { nome: "INF10A", classeId: classes[0].idClasse, cursoId: cursos[0].idCurso },
    { nome: "INF11A", classeId: classes[1].idClasse, cursoId: cursos[0].idCurso },
    { nome: "CG10A", classeId: classes[0].idClasse, cursoId: cursos[1].idCurso },
    { nome: "EL12A", classeId: classes[2].idClasse, cursoId: cursos[2].idCurso },
  ];
  const turmas = [];
  for (let i = 0; i < turmasData.length; i++) {
    const turma = await prisma.turma.upsert({
      where: { idTurma: i + 1 },
      update: turmasData[i],
      create: turmasData[i],
    });
    turmas.push(turma);
  }
  console.log(`✅ ${turmas.length} turmas criadas/verificadas`);

  // 6. Criar Salas
  const salasData = [
    { nome: "Sala 1" },
    { nome: "Sala 2" },
    { nome: "Lab Info 1" },
    { nome: "Lab Info 2" },
  ];
  const salas = [];
  for (let i = 0; i < salasData.length; i++) {
    const sala = await prisma.sala.upsert({
      where: { idSala: i + 1 },
      update: salasData[i],
      create: salasData[i],
    });
    salas.push(sala);
  }
  console.log(`✅ ${salas.length} salas criadas/verificadas`);

  // 7. Criar Disciplinas
  const disciplinasData = [
    "Programação",
    "Redes de Computadores",
    "Matemática",
    "Português",
    "Electrónica Digital",
    "Contabilidade",
  ];
  const disciplinas = [];
  for (let i = 0; i < disciplinasData.length; i++) {
    const disc = await prisma.disciplina.upsert({
      where: { idDisciplina: i + 1 },
      update: { nome: disciplinasData[i] },
      create: { nome: disciplinasData[i] },
    });
    disciplinas.push(disc);
  }
  console.log(`✅ ${disciplinas.length} disciplinas criadas/verificadas`);

  // 8. Criar Utilizadores e Professores
  const professoresData = [
    { nome: "Prof. António Silva", email: "antonio.silva@escola.ao" },
    { nome: "Prof. Maria Santos", email: "maria.santos@escola.ao" },
    { nome: "Prof. João Fernandes", email: "joao.fernandes@escola.ao" },
  ];
  const professores = [];
  for (let i = 0; i < professoresData.length; i++) {
    const utilizador = await prisma.utilizador.upsert({
      where: { email: professoresData[i].email },
      update: {
        nome: professoresData[i].nome,
        updated_at: new Date(),
      },
      create: {
        nome: professoresData[i].nome,
        email: professoresData[i].email,
        tipo: "Professor",
        updated_at: new Date(),
      },
    });

    const professor = await prisma.professor.upsert({
      where: { id_Usuario: utilizador.id },
      update: { updated_at: new Date() },
      create: {
        id_Usuario: utilizador.id,
        updated_at: new Date(),
      },
    });
    professores.push(professor);
  }
  console.log(`✅ ${professores.length} professores criados/verificados`);

  // 9. Limpar registos antigos de TempoLectivo (para permitir re-execução)
  await prisma.tempoLectivo.deleteMany();
  console.log("🗑️  Registos antigos de TempoLectivo removidos");

  // 10. Criar registos de TempoLectivo (Horários) — SEM conflitos
  const tempoLectivoData = [
    // Segunda-feira - Manhã
    {
      diaSemanaId: diasSemana[0].idDiaSemana,
      periodoId: periodos[0].periodo,       // Manhã
      ordem: 1,
      professorId: professores[0].id_professor, // Prof. António Silva
      disciplinaId: disciplinas[0].idDisciplina, // Programação
      salaId: salas[2].idSala,                    // Lab Info 1
      turmaId: turmas[0].idTurma,                 // INF10A
    },
    {
      diaSemanaId: diasSemana[0].idDiaSemana,
      periodoId: periodos[0].periodo,       // Manhã
      ordem: 2,
      professorId: professores[1].id_professor, // Prof. Maria Santos
      disciplinaId: disciplinas[2].idDisciplina, // Matemática
      salaId: salas[0].idSala,                    // Sala 1
      turmaId: turmas[0].idTurma,                 // INF10A
    },
    // Segunda-feira - Tarde
    {
      diaSemanaId: diasSemana[0].idDiaSemana,
      periodoId: periodos[1].periodo,       // Tarde
      ordem: 1,
      professorId: professores[2].id_professor, // Prof. João Fernandes
      disciplinaId: disciplinas[1].idDisciplina, // Redes
      salaId: salas[3].idSala,                    // Lab Info 2
      turmaId: turmas[1].idTurma,                 // INF11A
    },
    // Terça-feira - Manhã
    {
      diaSemanaId: diasSemana[1].idDiaSemana,
      periodoId: periodos[0].periodo,       // Manhã
      ordem: 1,
      professorId: professores[0].id_professor, // Prof. António Silva
      disciplinaId: disciplinas[3].idDisciplina, // Português
      salaId: salas[1].idSala,                    // Sala 2
      turmaId: turmas[2].idTurma,                 // CG10A
    },
    {
      diaSemanaId: diasSemana[1].idDiaSemana,
      periodoId: periodos[0].periodo,       // Manhã
      ordem: 2,
      professorId: professores[1].id_professor, // Prof. Maria Santos
      disciplinaId: disciplinas[5].idDisciplina, // Contabilidade
      salaId: salas[0].idSala,                    // Sala 1
      turmaId: turmas[2].idTurma,                 // CG10A
    },
    // Quarta-feira - Manhã
    {
      diaSemanaId: diasSemana[2].idDiaSemana,
      periodoId: periodos[0].periodo,       // Manhã
      ordem: 1,
      professorId: professores[2].id_professor, // Prof. João Fernandes
      disciplinaId: disciplinas[4].idDisciplina, // Electrónica Digital
      salaId: salas[1].idSala,                    // Sala 2
      turmaId: turmas[3].idTurma,                 // EL12A
    },
    // Quinta-feira - Tarde
    {
      diaSemanaId: diasSemana[3].idDiaSemana,
      periodoId: periodos[1].periodo,       // Tarde
      ordem: 1,
      professorId: professores[0].id_professor, // Prof. António Silva
      disciplinaId: disciplinas[0].idDisciplina, // Programação
      salaId: salas[2].idSala,                    // Lab Info 1
      turmaId: turmas[1].idTurma,                 // INF11A
    },
    // Sexta-feira - Manhã
    {
      diaSemanaId: diasSemana[4].idDiaSemana,
      periodoId: periodos[0].periodo,       // Manhã
      ordem: 1,
      professorId: professores[1].id_professor, // Prof. Maria Santos
      disciplinaId: disciplinas[2].idDisciplina, // Matemática
      salaId: salas[0].idSala,                    // Sala 1
      turmaId: turmas[3].idTurma,                 // EL12A
    },
  ];

  for (const data of tempoLectivoData) {
    await prisma.tempoLectivo.create({ data });
  }
  console.log(`✅ ${tempoLectivoData.length} registos válidos de TempoLectivo criados`);

  // ============================================================
  // 11. DADOS COM CONFLITOS INTENCIONAIS (para testar validação)
  // ============================================================
  console.log("\n⚠️  A inserir dados COM CONFLITOS para teste...");

  const conflitosData = [
    // ──────────────────────────────────────────────────────────
    // CONFLITO 1 — Professor duplicado
    // Prof. António Silva já dá Programação na Segunda, Manhã, ordem 1, Lab Info 1, INF10A
    // Agora também dá Redes na Segunda, Manhã, ordem 1, Sala 2, CG10A
    // → O mesmo professor em dois sítios ao mesmo tempo!
    // ──────────────────────────────────────────────────────────
    {
      diaSemanaId: diasSemana[0].idDiaSemana,   // Segunda-feira
      periodoId: periodos[0].periodo,            // Manhã
      ordem: 1,
      professorId: professores[0].id_professor,  // Prof. António Silva (CONFLITO!)
      disciplinaId: disciplinas[1].idDisciplina, // Redes
      salaId: salas[1].idSala,                   // Sala 2
      turmaId: turmas[2].idTurma,                // CG10A
    },

    // ──────────────────────────────────────────────────────────
    // CONFLITO 2 — Sala duplicada
    // Lab Info 1 já está ocupado na Segunda, Manhã, ordem 1 (pelo Prof. António / Programação / INF10A)
    // Agora Prof. João também está no Lab Info 1, Segunda, Manhã, ordem 1
    // → Duas aulas na mesma sala ao mesmo tempo!
    // ──────────────────────────────────────────────────────────
    {
      diaSemanaId: diasSemana[0].idDiaSemana,   // Segunda-feira
      periodoId: periodos[0].periodo,            // Manhã
      ordem: 1,
      professorId: professores[2].id_professor,  // Prof. João Fernandes
      disciplinaId: disciplinas[4].idDisciplina, // Electrónica Digital
      salaId: salas[2].idSala,                   // Lab Info 1 (CONFLITO!)
      turmaId: turmas[3].idTurma,                // EL12A
    },

    // ──────────────────────────────────────────────────────────
    // CONFLITO 3 — Turma duplicada
    // INF10A já tem aula na Segunda, Manhã, ordem 2 (Prof. Maria / Matemática / Sala 1)
    // Agora INF10A também tem Contabilidade na Segunda, Manhã, ordem 2
    // → A mesma turma em duas aulas ao mesmo tempo!
    // ──────────────────────────────────────────────────────────
    {
      diaSemanaId: diasSemana[0].idDiaSemana,   // Segunda-feira
      periodoId: periodos[0].periodo,            // Manhã
      ordem: 2,
      professorId: professores[2].id_professor,  // Prof. João Fernandes
      disciplinaId: disciplinas[5].idDisciplina, // Contabilidade
      salaId: salas[1].idSala,                   // Sala 2
      turmaId: turmas[0].idTurma,                // INF10A (CONFLITO!)
    },
  ];

  for (const data of conflitosData) {
    await prisma.tempoLectivo.create({ data });
  }
  console.log(`⚠️  ${conflitosData.length} registos COM CONFLITOS inseridos`);

  // 12. Resumo dos conflitos inseridos
  console.log("\n📋 Resumo dos conflitos inseridos:");
  console.log("   1. PROFESSOR: Prof. António Silva — Segunda, Manhã, ordem 1 — 2 turmas ao mesmo tempo");
  console.log("   2. SALA:      Lab Info 1 — Segunda, Manhã, ordem 1 — 2 aulas ao mesmo tempo");
  console.log("   3. TURMA:     INF10A — Segunda, Manhã, ordem 2 — 2 aulas ao mesmo tempo");

  console.log("\n🎉 Seed concluído com sucesso!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Erro no seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
