/*
  Warnings:

  - You are about to drop the column `id_Usuario` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Aluno` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Utilizador` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nome` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_id_Usuario_fkey";

-- DropForeignKey
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_id_Usuario_fkey";

-- DropForeignKey
ALTER TABLE "Professor" DROP CONSTRAINT "Professor_id_Usuario_fkey";

-- DropIndex
DROP INDEX "Professor_id_Usuario_key";

-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "id_Usuario",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT;

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Aluno";

-- DropTable
DROP TABLE "Utilizador";
