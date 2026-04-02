const { PrismaClient } = require('./lib/generated/prisma/index.js');
const prisma = new PrismaClient();

async function main() {
  const dias = await prisma.diaSemana.findMany();
  console.log("DIAS DA SEMANA:", dias);
  const periodos = await prisma.periodo.findMany();
  console.log("PERIODOS:", periodos);
}

main().finally(() => prisma.$disconnect());
