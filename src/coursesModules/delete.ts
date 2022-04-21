import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  const result = await prismaClient.coursesModules.delete({
    where: {
      id: 'd457ca19-0ee5-4478-b6b1-9016576e8886',
    }
  });

  console.log(result);
}

main();