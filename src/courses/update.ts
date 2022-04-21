import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  const result = await prismaClient.courses.update({
    where: {
      id: '14b463ab-b6e5-4e14-b1e1-e0c00b438f98',
    },
    data: {
      name: 'Elixir',
      description: 'Curso de Elixir',
      duration: 400,
    }
  });

  console.log(result);
}

main();