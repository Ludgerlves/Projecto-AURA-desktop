-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('Admin', 'Professor', 'Aluno');

-- CreateTable
CREATE TABLE "Classe" (
    "idClasse" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Classe_pkey" PRIMARY KEY ("idClasse")
);

-- CreateTable
CREATE TABLE "Curso" (
    "idCurso" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("idCurso")
);

-- CreateTable
CREATE TABLE "DiaSemana" (
    "idDiaSemana" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "DiaSemana_pkey" PRIMARY KEY ("idDiaSemana")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "idDisciplina" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("idDisciplina")
);

-- CreateTable
CREATE TABLE "Disponibilidade" (
    "idDisponibilidade" SERIAL NOT NULL,
    "diaSemanaId" INTEGER NOT NULL,
    "periodoId" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,
    "professorId" INTEGER NOT NULL,

    CONSTRAINT "Disponibilidade_pkey" PRIMARY KEY ("idDisponibilidade")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" SERIAL NOT NULL,
    "id_Usuario" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id_aluno" SERIAL NOT NULL,
    "id_Usuario" INTEGER NOT NULL,
    "num_matricula" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id_aluno")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id_professor" SERIAL NOT NULL,
    "id_Usuario" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id_professor")
);

-- CreateTable
CREATE TABLE "Utilizador" (
    "id" SERIAL NOT NULL,
    "workos_id" TEXT,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "tipo" "UserType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Utilizador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Periodo" (
    "periodo" TEXT NOT NULL,

    CONSTRAINT "Periodo_pkey" PRIMARY KEY ("periodo")
);

-- CreateTable
CREATE TABLE "ProfDisciplinas" (
    "idProfDisciplina" SERIAL NOT NULL,
    "professorId" INTEGER NOT NULL,
    "disciplinaId" INTEGER NOT NULL,

    CONSTRAINT "ProfDisciplinas_pkey" PRIMARY KEY ("idProfDisciplina")
);

-- CreateTable
CREATE TABLE "ProfTurma" (
    "idProfTurma" SERIAL NOT NULL,
    "professorId" INTEGER NOT NULL,
    "turmaId" INTEGER NOT NULL,

    CONSTRAINT "ProfTurma_pkey" PRIMARY KEY ("idProfTurma")
);

-- CreateTable
CREATE TABLE "Sala" (
    "idSala" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("idSala")
);

-- CreateTable
CREATE TABLE "TempoLectivo" (
    "idTempoLectivo" SERIAL NOT NULL,
    "diaSemanaId" INTEGER NOT NULL,
    "periodoId" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,
    "professorId" INTEGER NOT NULL,
    "disciplinaId" INTEGER NOT NULL,
    "salaId" INTEGER NOT NULL,
    "turmaId" INTEGER NOT NULL,

    CONSTRAINT "TempoLectivo_pkey" PRIMARY KEY ("idTempoLectivo")
);

-- CreateTable
CREATE TABLE "Turma" (
    "idTurma" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "classeId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("idTurma")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiaSemana_nome_key" ON "DiaSemana"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_Usuario_key" ON "Admin"("id_Usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_id_Usuario_key" ON "Aluno"("id_Usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_id_Usuario_key" ON "Professor"("id_Usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Utilizador_workos_id_key" ON "Utilizador"("workos_id");

-- CreateIndex
CREATE UNIQUE INDEX "Utilizador_email_key" ON "Utilizador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProfDisciplinas_professorId_disciplinaId_key" ON "ProfDisciplinas"("professorId", "disciplinaId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfTurma_professorId_turmaId_key" ON "ProfTurma"("professorId", "turmaId");

-- AddForeignKey
ALTER TABLE "Disponibilidade" ADD CONSTRAINT "Disponibilidade_diaSemanaId_fkey" FOREIGN KEY ("diaSemanaId") REFERENCES "DiaSemana"("idDiaSemana") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disponibilidade" ADD CONSTRAINT "Disponibilidade_periodoId_fkey" FOREIGN KEY ("periodoId") REFERENCES "Periodo"("periodo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disponibilidade" ADD CONSTRAINT "Disponibilidade_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_id_Usuario_fkey" FOREIGN KEY ("id_Usuario") REFERENCES "Utilizador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_id_Usuario_fkey" FOREIGN KEY ("id_Usuario") REFERENCES "Utilizador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_id_Usuario_fkey" FOREIGN KEY ("id_Usuario") REFERENCES "Utilizador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfDisciplinas" ADD CONSTRAINT "ProfDisciplinas_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("idDisciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfDisciplinas" ADD CONSTRAINT "ProfDisciplinas_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfTurma" ADD CONSTRAINT "ProfTurma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfTurma" ADD CONSTRAINT "ProfTurma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("idTurma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TempoLectivo" ADD CONSTRAINT "TempoLectivo_diaSemanaId_fkey" FOREIGN KEY ("diaSemanaId") REFERENCES "DiaSemana"("idDiaSemana") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TempoLectivo" ADD CONSTRAINT "TempoLectivo_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("idDisciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TempoLectivo" ADD CONSTRAINT "TempoLectivo_periodoId_fkey" FOREIGN KEY ("periodoId") REFERENCES "Periodo"("periodo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TempoLectivo" ADD CONSTRAINT "TempoLectivo_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TempoLectivo" ADD CONSTRAINT "TempoLectivo_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("idSala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TempoLectivo" ADD CONSTRAINT "TempoLectivo_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("idTurma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("idClasse") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("idCurso") ON DELETE RESTRICT ON UPDATE CASCADE;
