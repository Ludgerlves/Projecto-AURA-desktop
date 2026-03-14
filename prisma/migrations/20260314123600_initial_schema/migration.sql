-- CreateEnum
CREATE TYPE "DiaSemana" AS ENUM ('SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA');

-- CreateEnum
CREATE TYPE "Periodo" AS ENUM ('MANHA', 'TARDE');

-- CreateTable
CREATE TABLE "classes" (
    "nome_classe" VARCHAR(20) NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("nome_classe")
);

-- CreateTable
CREATE TABLE "cursos" (
    "nome_curso" VARCHAR(100) NOT NULL,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("nome_curso")
);

-- CreateTable
CREATE TABLE "disciplinas" (
    "nome_disciplina" VARCHAR(100) NOT NULL,

    CONSTRAINT "disciplinas_pkey" PRIMARY KEY ("nome_disciplina")
);

-- CreateTable
CREATE TABLE "disponibilidades" (
    "id_disponibilidade" SERIAL NOT NULL,
    "id_professor" INTEGER NOT NULL,
    "nome_dia" "DiaSemana" NOT NULL,
    "nome_periodo" "Periodo" NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "disponibilidades_pkey" PRIMARY KEY ("id_disponibilidade")
);

-- CreateTable
CREATE TABLE "professores" (
    "id_professor" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "telefone" VARCHAR(15) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("id_professor")
);

-- CreateTable
CREATE TABLE "prof_turma_disciplinas" (
    "id_professor" INTEGER NOT NULL,
    "nome_turma" TEXT NOT NULL,
    "nome_disciplina" TEXT NOT NULL,

    CONSTRAINT "prof_turma_disciplinas_pkey" PRIMARY KEY ("id_professor","nome_turma","nome_disciplina")
);

-- CreateTable
CREATE TABLE "salas" (
    "nome_sala" VARCHAR(20) NOT NULL,
    "capacidade" INTEGER NOT NULL,

    CONSTRAINT "salas_pkey" PRIMARY KEY ("nome_sala")
);

-- CreateTable
CREATE TABLE "tempo_lectivo" (
    "id_tempoLectivo" SERIAL NOT NULL,
    "id_professor" INTEGER NOT NULL,
    "nome_turma" VARCHAR(20) NOT NULL,
    "nome_disciplina" VARCHAR(100) NOT NULL,
    "nome_sala" VARCHAR(20) NOT NULL,
    "nome_dia" "DiaSemana" NOT NULL,
    "nome_periodo" "Periodo" NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "tempo_lectivo_pkey" PRIMARY KEY ("id_tempoLectivo")
);

-- CreateTable
CREATE TABLE "turmas" (
    "nome_turma" VARCHAR(20) NOT NULL,
    "nome_curso" VARCHAR(20) NOT NULL,
    "nome_classe" VARCHAR(20) NOT NULL,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("nome_turma")
);

-- CreateTable
CREATE TABLE "turma_disciplinas" (
    "nome_turma" VARCHAR(20) NOT NULL,
    "nome_disciplina" VARCHAR(100) NOT NULL,
    "aulas_por_semana" INTEGER NOT NULL,

    CONSTRAINT "turma_disciplinas_pkey" PRIMARY KEY ("nome_turma","nome_disciplina")
);

-- CreateIndex
CREATE UNIQUE INDEX "professores_email_key" ON "professores"("email");

-- AddForeignKey
ALTER TABLE "disponibilidades" ADD CONSTRAINT "disponibilidades_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "professores"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prof_turma_disciplinas" ADD CONSTRAINT "prof_turma_disciplinas_nome_disciplina_fkey" FOREIGN KEY ("nome_disciplina") REFERENCES "disciplinas"("nome_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prof_turma_disciplinas" ADD CONSTRAINT "prof_turma_disciplinas_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "professores"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prof_turma_disciplinas" ADD CONSTRAINT "prof_turma_disciplinas_nome_turma_fkey" FOREIGN KEY ("nome_turma") REFERENCES "turmas"("nome_turma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "professores"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_nome_turma_fkey" FOREIGN KEY ("nome_turma") REFERENCES "turmas"("nome_turma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_nome_disciplina_fkey" FOREIGN KEY ("nome_disciplina") REFERENCES "disciplinas"("nome_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_nome_sala_fkey" FOREIGN KEY ("nome_sala") REFERENCES "salas"("nome_sala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_nome_curso_fkey" FOREIGN KEY ("nome_curso") REFERENCES "cursos"("nome_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_nome_classe_fkey" FOREIGN KEY ("nome_classe") REFERENCES "classes"("nome_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma_disciplinas" ADD CONSTRAINT "turma_disciplinas_nome_turma_fkey" FOREIGN KEY ("nome_turma") REFERENCES "turmas"("nome_turma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma_disciplinas" ADD CONSTRAINT "turma_disciplinas_nome_disciplina_fkey" FOREIGN KEY ("nome_disciplina") REFERENCES "disciplinas"("nome_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;
