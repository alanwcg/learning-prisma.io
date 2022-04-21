import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  const result = await prismaClient.courses.findFirst({
    take: -1,
  });

  console.log(result);
}

main();