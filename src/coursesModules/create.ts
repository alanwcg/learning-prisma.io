import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  // const result = await prismaClient.modules.create({
  //   data: {
  //     name: 'Firebase',
  //     description: 'Aprendendo Firebase do zero',
  //     coursesModules: {
  //       create: {
  //         course: {
  //           connect: {
  //             id: '70142429-edb1-445c-a48d-12e5cb6ade2e',
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  // const result = await prismaClient.coursesModules.create({
  //   data: {
  //     course_id: '70142429-edb1-445c-a48d-12e5cb6ade2e',
  //     module_id: '8e13ad72-7c0d-40a9-a8cb-b022bc469981',
  //   },
  // });

  const result = await prismaClient.coursesModules.create({
    data: {
      course: {
        create: {
          name: 'Java',
          description: 'Curso de Java',
          duration: 500,
          teacher: {
            create: {
              name: 'Wolney',
            },
          },
        },
      },
      module: {
        create: {
          name: 'Spring Boot',
          description: 'Curso completo de spring boot'
        }
      },
    },
  });

  console.log(result);
}

main();