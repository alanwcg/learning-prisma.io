import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  let page = 1;
  let take = 2;
  let exists = true;

  while (exists) {
    const result = await prismaClient.courses.findMany({
      skip: (page - 1) * take,
      take,
    });

    if (result.length === 0) {
      exists = false;
      return;
    }

    console.log(`Page: ${page}`, result)
    console.log('------------------------------------------------------------');
    page += 1;
  }
}

main();