/*
  Warnings:

  - A unique constraint covering the columns `[id_turma,id_disciplina]` on the table `prof_turma_disciplinas` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "prof_turma_disciplinas_id_professor_id_turma_id_disciplina_key";

-- CreateIndex
CREATE UNIQUE INDEX "prof_turma_disciplinas_id_turma_id_disciplina_key" ON "prof_turma_disciplinas"("id_turma", "id_disciplina");
