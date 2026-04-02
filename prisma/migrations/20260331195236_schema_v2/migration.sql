-- CreateTable
CREATE TABLE "classes" (
    "id_classe" SERIAL NOT NULL,
    "descricao_classe" VARCHAR(20) NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id_classe")
);

-- CreateTable
CREATE TABLE "cursos" (
    "id_curso" SERIAL NOT NULL,
    "descricao_curso" VARCHAR(100) NOT NULL,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("id_curso")
);

-- CreateTable
CREATE TABLE "diaSemana" (
    "id_dia" SERIAL NOT NULL,
    "descricao_dia" VARCHAR(100) NOT NULL,

    CONSTRAINT "diaSemana_pkey" PRIMARY KEY ("id_dia")
);

-- CreateTable
CREATE TABLE "disciplinas" (
    "id_disciplina" SERIAL NOT NULL,
    "descricao_disciplina" VARCHAR(100) NOT NULL,
    "tipo_sala" VARCHAR(100) NOT NULL,

    CONSTRAINT "disciplinas_pkey" PRIMARY KEY ("id_disciplina")
);

-- CreateTable
CREATE TABLE "disponibilidades" (
    "id_disponibilidade" SERIAL NOT NULL,
    "id_professor" INTEGER NOT NULL,
    "id_dia" INTEGER NOT NULL,
    "id_periodo" INTEGER NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "disponibilidades_pkey" PRIMARY KEY ("id_disponibilidade")
);

-- CreateTable
CREATE TABLE "periodos" (
    "id_periodo" SERIAL NOT NULL,
    "descricao_periodo" VARCHAR(100) NOT NULL,

    CONSTRAINT "periodos_pkey" PRIMARY KEY ("id_periodo")
);

-- CreateTable
CREATE TABLE "professores" (
    "id_professor" SERIAL NOT NULL,
    "nome_professor" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "telefone" VARCHAR(15) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("id_professor")
);

-- CreateTable
CREATE TABLE "prof_turma_disciplinas" (
    "id_atribuicao" SERIAL NOT NULL,
    "id_professor" INTEGER NOT NULL,
    "id_turma" INTEGER NOT NULL,
    "id_disciplina" INTEGER NOT NULL,

    CONSTRAINT "prof_turma_disciplinas_pkey" PRIMARY KEY ("id_atribuicao")
);

-- CreateTable
CREATE TABLE "salas" (
    "id_sala" SERIAL NOT NULL,
    "descricao_sala" VARCHAR(20) NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "tipo_sala" VARCHAR(100) NOT NULL,

    CONSTRAINT "salas_pkey" PRIMARY KEY ("id_sala")
);

-- CreateTable
CREATE TABLE "tempo_lectivo" (
    "id_tempoLectivo" SERIAL NOT NULL,
    "id_atribuicao" INTEGER NOT NULL,
    "id_professor" INTEGER NOT NULL,
    "id_turma" INTEGER NOT NULL,
    "id_disciplina" INTEGER NOT NULL,
    "id_sala" INTEGER NOT NULL,
    "id_dia" INTEGER NOT NULL,
    "id_periodo" INTEGER NOT NULL,
    "ordem" INTEGER NOT NULL,
    "ano_lectivo" INTEGER NOT NULL,

    CONSTRAINT "tempo_lectivo_pkey" PRIMARY KEY ("id_tempoLectivo")
);

-- CreateTable
CREATE TABLE "turmas" (
    "id_turma" SERIAL NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "id_classe" INTEGER NOT NULL,
    "id_sala" INTEGER,
    "descricao_turma" VARCHAR(100) NOT NULL,
    "quantidade_alunos" INTEGER NOT NULL,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("id_turma")
);

-- CreateTable
CREATE TABLE "turma_disciplinas" (
    "id_turma" INTEGER NOT NULL,
    "id_disciplina" INTEGER NOT NULL,
    "aulas_por_semana" INTEGER NOT NULL,

    CONSTRAINT "turma_disciplinas_pkey" PRIMARY KEY ("id_turma","id_disciplina")
);

-- CreateIndex
CREATE UNIQUE INDEX "classes_descricao_classe_key" ON "classes"("descricao_classe");

-- CreateIndex
CREATE UNIQUE INDEX "cursos_descricao_curso_key" ON "cursos"("descricao_curso");

-- CreateIndex
CREATE UNIQUE INDEX "diaSemana_descricao_dia_key" ON "diaSemana"("descricao_dia");

-- CreateIndex
CREATE UNIQUE INDEX "disciplinas_descricao_disciplina_key" ON "disciplinas"("descricao_disciplina");

-- CreateIndex
CREATE UNIQUE INDEX "disponibilidades_id_professor_id_dia_id_periodo_ordem_key" ON "disponibilidades"("id_professor", "id_dia", "id_periodo", "ordem");

-- CreateIndex
CREATE UNIQUE INDEX "periodos_descricao_periodo_key" ON "periodos"("descricao_periodo");

-- CreateIndex
CREATE UNIQUE INDEX "professores_email_key" ON "professores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "professores_telefone_key" ON "professores"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "prof_turma_disciplinas_id_professor_id_turma_id_disciplina_key" ON "prof_turma_disciplinas"("id_professor", "id_turma", "id_disciplina");

-- CreateIndex
CREATE UNIQUE INDEX "salas_descricao_sala_key" ON "salas"("descricao_sala");

-- CreateIndex
CREATE UNIQUE INDEX "tempo_lectivo_id_professor_id_dia_id_periodo_ordem_ano_lect_key" ON "tempo_lectivo"("id_professor", "id_dia", "id_periodo", "ordem", "ano_lectivo");

-- CreateIndex
CREATE UNIQUE INDEX "tempo_lectivo_id_sala_id_dia_id_periodo_ordem_ano_lectivo_key" ON "tempo_lectivo"("id_sala", "id_dia", "id_periodo", "ordem", "ano_lectivo");

-- CreateIndex
CREATE UNIQUE INDEX "tempo_lectivo_id_turma_id_dia_id_periodo_ordem_ano_lectivo_key" ON "tempo_lectivo"("id_turma", "id_dia", "id_periodo", "ordem", "ano_lectivo");

-- CreateIndex
CREATE UNIQUE INDEX "turmas_descricao_turma_key" ON "turmas"("descricao_turma");

-- AddForeignKey
ALTER TABLE "disponibilidades" ADD CONSTRAINT "disponibilidades_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "professores"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disponibilidades" ADD CONSTRAINT "disponibilidades_id_dia_fkey" FOREIGN KEY ("id_dia") REFERENCES "diaSemana"("id_dia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disponibilidades" ADD CONSTRAINT "disponibilidades_id_periodo_fkey" FOREIGN KEY ("id_periodo") REFERENCES "periodos"("id_periodo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prof_turma_disciplinas" ADD CONSTRAINT "prof_turma_disciplinas_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "disciplinas"("id_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prof_turma_disciplinas" ADD CONSTRAINT "prof_turma_disciplinas_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "professores"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prof_turma_disciplinas" ADD CONSTRAINT "prof_turma_disciplinas_id_turma_fkey" FOREIGN KEY ("id_turma") REFERENCES "turmas"("id_turma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_id_atribuicao_fkey" FOREIGN KEY ("id_atribuicao") REFERENCES "prof_turma_disciplinas"("id_atribuicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "professores"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_id_turma_fkey" FOREIGN KEY ("id_turma") REFERENCES "turmas"("id_turma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "disciplinas"("id_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_id_sala_fkey" FOREIGN KEY ("id_sala") REFERENCES "salas"("id_sala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_id_dia_fkey" FOREIGN KEY ("id_dia") REFERENCES "diaSemana"("id_dia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_id_periodo_fkey" FOREIGN KEY ("id_periodo") REFERENCES "periodos"("id_periodo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "cursos"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classes"("id_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_id_sala_fkey" FOREIGN KEY ("id_sala") REFERENCES "salas"("id_sala") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma_disciplinas" ADD CONSTRAINT "turma_disciplinas_id_turma_fkey" FOREIGN KEY ("id_turma") REFERENCES "turmas"("id_turma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma_disciplinas" ADD CONSTRAINT "turma_disciplinas_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "disciplinas"("id_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;
