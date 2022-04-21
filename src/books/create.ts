import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  const result = await prismaClient.books.create({
    data: {
      name: 'Arquitetura Limpa',
      author_id: 'd917ef20-41da-4bc5-aeb4-4be64a75140e',
    },
  });

  console.log(result);
}

main();