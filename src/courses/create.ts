import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  // const result = await prismaClient.courses.create({
  //   data: {
  //     name: 'NodeJS',
  //     description: 'Curso de NodeJS',
  //     duration: 200,
  //     teacher: {
  //       connectOrCreate: {
  //         where: {
  //           name: 'Alan Cintra',
  //         },
  //         create: {
  //           name: 'Alan Cintra',
  //         },
  //       },
  //     },
  //   },
  // });

  // const result = await prismaClient.courses.create({
  //   data: {
  //     name: 'ReactJS',
  //     description: 'Curso de ReactJS',
  //     duration: 200,
  //     teacher: {
  //       connect: {
  //         id: '0915f701-53c9-4129-bcae-2a3c19b6769d',
  //       },
  //     },
  //   },
  // });

  // const result = await prismaClient.courses.create({
  //   data: {
  //     name: 'React Native',
  //     description: 'Curso de React Native',
  //     duration: 300,
  //     teacher: {
  //       create: {
  //         name: 'Rodrigo'
  //       }
  //     },
  //   },
  // });

  const result = await prismaClient.courses.create({
    data: {
      name: 'Elixir',
      description: 'Curso de Elixir',
      duration: 400,
      teacher_id: '984f5056-c472-4557-a4e3-df6919a3fea9',
    },
  });

  console.log(result);
}

main();