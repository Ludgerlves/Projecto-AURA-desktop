/*
  Warnings:

  - A unique constraint covering the columns `[id_professor,id_dia,id_periodo,ordem]` on the table `tempo_lectivo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_sala,id_dia,id_periodo,ordem]` on the table `tempo_lectivo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_turma,id_dia,id_periodo,ordem]` on the table `tempo_lectivo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "tempo_lectivo_id_professor_id_dia_id_periodo_ordem_ano_lect_key";

-- DropIndex
DROP INDEX "tempo_lectivo_id_sala_id_dia_id_periodo_ordem_ano_lectivo_key";

-- DropIndex
DROP INDEX "tempo_lectivo_id_turma_id_dia_id_periodo_ordem_ano_lectivo_key";

-- CreateIndex
CREATE UNIQUE INDEX "tempo_lectivo_id_professor_id_dia_id_periodo_ordem_key" ON "tempo_lectivo"("id_professor", "id_dia", "id_periodo", "ordem");

-- CreateIndex
CREATE UNIQUE INDEX "tempo_lectivo_id_sala_id_dia_id_periodo_ordem_key" ON "tempo_lectivo"("id_sala", "id_dia", "id_periodo", "ordem");

-- CreateIndex
CREATE UNIQUE INDEX "tempo_lectivo_id_turma_id_dia_id_periodo_ordem_key" ON "tempo_lectivo"("id_turma", "id_dia", "id_periodo", "ordem");
