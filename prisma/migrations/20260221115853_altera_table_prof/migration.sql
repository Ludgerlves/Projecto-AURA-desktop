/*
  Warnings:

  - The primary key for the `Classe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idClasse` on the `Classe` table. All the data in the column will be lost.
  - The primary key for the `Curso` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idCurso` on the `Curso` table. All the data in the column will be lost.
  - The primary key for the `DiaSemana` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idDiaSemana` on the `DiaSemana` table. All the data in the column will be lost.
  - You are about to drop the column `diaSemanaId` on the `Disponibilidade` table. All the data in the column will be lost.
  - You are about to drop the column `diaSemanaId` on the `TempoLectivo` table. All the data in the column will be lost.
  - You are about to drop the column `classeId` on the `Turma` table. All the data in the column will be lost.
  - You are about to drop the column `cursoId` on the `Turma` table. All the data in the column will be lost.
  - Added the required column `diaSemana` to the `Disponibilidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diaSemana` to the `TempoLectivo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classe` to the `Turma` table without a default value. This is not possible if the table is not empty.
  - Added the required column `curso` to the `Turma` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Disponibilidade" DROP CONSTRAINT "Disponibilidade_diaSemanaId_fkey";

-- DropForeignKey
ALTER TABLE "TempoLectivo" DROP CONSTRAINT "TempoLectivo_diaSemanaId_fkey";

-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_classeId_fkey";

-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_cursoId_fkey";

-- AlterTable
ALTER TABLE "Classe" DROP CONSTRAINT "Classe_pkey",
DROP COLUMN "idClasse",
ADD CONSTRAINT "Classe_pkey" PRIMARY KEY ("nome");

-- AlterTable
ALTER TABLE "Curso" DROP CONSTRAINT "Curso_pkey",
DROP COLUMN "idCurso",
ADD CONSTRAINT "Curso_pkey" PRIMARY KEY ("nome");

-- AlterTable
ALTER TABLE "DiaSemana" DROP CONSTRAINT "DiaSemana_pkey",
DROP COLUMN "idDiaSemana",
ADD CONSTRAINT "DiaSemana_pkey" PRIMARY KEY ("nome");

-- AlterTable
ALTER TABLE "Disponibilidade" DROP COLUMN "diaSemanaId",
ADD COLUMN     "diaSemana" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TempoLectivo" DROP COLUMN "diaSemanaId",
ADD COLUMN     "diaSemana" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Turma" DROP COLUMN "classeId",
DROP COLUMN "cursoId",
ADD COLUMN     "classe" TEXT NOT NULL,
ADD COLUMN     "curso" TEXT NOT NULL;

-- DropEnum
DROP TYPE "UserType";

-- AddForeignKey
ALTER TABLE "Disponibilidade" ADD CONSTRAINT "Disponibilidade_diaSemana_fkey" FOREIGN KEY ("diaSemana") REFERENCES "DiaSemana"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TempoLectivo" ADD CONSTRAINT "TempoLectivo_diaSemana_fkey" FOREIGN KEY ("diaSemana") REFERENCES "DiaSemana"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_classe_fkey" FOREIGN KEY ("classe") REFERENCES "Classe"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_curso_fkey" FOREIGN KEY ("curso") REFERENCES "Curso"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;
