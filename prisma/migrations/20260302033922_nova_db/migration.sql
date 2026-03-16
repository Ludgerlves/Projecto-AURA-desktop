/*
  Warnings:

  - The primary key for the `Disciplina` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idDisciplina` on the `Disciplina` table. All the data in the column will be lost.
  - You are about to drop the column `periodoId` on the `Disponibilidade` table. All the data in the column will be lost.
  - You are about to drop the column `disciplinaId` on the `TempoLectivo` table. All the data in the column will be lost.
  - You are about to drop the `ProfDisciplinas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfTurma` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `periodo` to the `Disponibilidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disciplina` to the `TempoLectivo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Disponibilidade" DROP CONSTRAINT "Disponibilidade_periodoId_fkey";

-- DropForeignKey
ALTER TABLE "ProfDisciplinas" DROP CONSTRAINT "ProfDisciplinas_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "ProfDisciplinas" DROP CONSTRAINT "ProfDisciplinas_professorId_fkey";

-- DropForeignKey
ALTER TABLE "ProfTurma" DROP CONSTRAINT "ProfTurma_professorId_fkey";

-- DropForeignKey
ALTER TABLE "ProfTurma" DROP CONSTRAINT "ProfTurma_turmaId_fkey";

-- DropForeignKey
ALTER TABLE "TempoLectivo" DROP CONSTRAINT "TempoLectivo_disciplinaId_fkey";

-- AlterTable
ALTER TABLE "Disciplina" DROP CONSTRAINT "Disciplina_pkey",
DROP COLUMN "idDisciplina",
ADD CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("nome");

-- AlterTable
ALTER TABLE "Disponibilidade" DROP COLUMN "periodoId",
ADD COLUMN     "periodo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TempoLectivo" DROP COLUMN "disciplinaId",
ADD COLUMN     "disciplina" TEXT NOT NULL;

-- DropTable
DROP TABLE "ProfDisciplinas";

-- DropTable
DROP TABLE "ProfTurma";

-- CreateTable
CREATE TABLE "ProfTurmaDisciplina" (
    "idProfTurma" SERIAL NOT NULL,
    "professorId" INTEGER NOT NULL,
    "turmaId" INTEGER NOT NULL,
    "disciplinaNome" TEXT NOT NULL,

    CONSTRAINT "ProfTurmaDisciplina_pkey" PRIMARY KEY ("idProfTurma")
);

-- CreateTable
CREATE TABLE "TurmaDisciplina" (
    "id_Turma" INTEGER NOT NULL,
    "Disciplina" TEXT NOT NULL,

    CONSTRAINT "TurmaDisciplina_pkey" PRIMARY KEY ("id_Turma","Disciplina")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfTurmaDisciplina_professorId_turmaId_key" ON "ProfTurmaDisciplina"("professorId", "turmaId");

-- AddForeignKey
ALTER TABLE "Disponibilidade" ADD CONSTRAINT "Disponibilidade_periodo_fkey" FOREIGN KEY ("periodo") REFERENCES "Periodo"("periodo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfTurmaDisciplina" ADD CONSTRAINT "ProfTurmaDisciplina_disciplinaNome_fkey" FOREIGN KEY ("disciplinaNome") REFERENCES "Disciplina"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfTurmaDisciplina" ADD CONSTRAINT "ProfTurmaDisciplina_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfTurmaDisciplina" ADD CONSTRAINT "ProfTurmaDisciplina_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("idTurma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TurmaDisciplina" ADD CONSTRAINT "TurmaDisciplina_id_Turma_fkey" FOREIGN KEY ("id_Turma") REFERENCES "Turma"("idTurma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TempoLectivo" ADD CONSTRAINT "TempoLectivo_disciplina_fkey" FOREIGN KEY ("disciplina") REFERENCES "Disciplina"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;
