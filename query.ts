import { PrismaClient } from "./lib/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const dias = await prisma.diaSemana.findMany();
  console.log("Dias da Semana na BD:");
  console.dir(dias);

  const periodos = await prisma.periodo.findMany();
  console.log("Periodos na BD:");
  console.dir(periodos);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
