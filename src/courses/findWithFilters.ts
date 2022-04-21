import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  // const result = await prismaClient.courses.findMany({
  //   where: {
  //     description: {
  //       startsWith: 'curso',
  //       mode: 'insensitive',
  //     },
  //   },
  // });

  const result = await prismaClient.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: 'reactjs',
            mode: 'insensitive',
          }
        },
        {
          name: {
            contains: 'react native',
            mode: 'insensitive',
          }
        }
      ],
      AND: {
        duration: 200,
      },
    },
  });

  console.log(result);
}

main();