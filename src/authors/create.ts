import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  // const result = await prismaClient.authors.create({
  //   data: {
  //     name: 'Robert C. Martin',
  //     books: {
  //       create: {
  //         name: 'Código Limpo'
  //       }
  //     },
  //   },
  // });

  const result = await prismaClient.authors.create({
    data: {
      name: 'Miyk Brito',
      books: {
        createMany: {
          data: [
            {
              name: 'Como começar na programação',
            },
            {
              name: 'Como ser muito produtivo',
            },
          ],
        },
      },
    },
  });

  console.log(result);
}

main();