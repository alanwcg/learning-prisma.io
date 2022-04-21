import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  // const result = await prismaClient.courses.findMany({
  //   include: {
  //     teacher: true,
  //   },
  // });

  // const result = await prismaClient.coursesModules.findMany({
  //   include: {
  //     course: true,
  //     module: true,
  //   },
  // });

  const courses = await prismaClient.courses.findMany({
    include: {
      coursesModules: {
        include: {
          module: true,
        },
      },
    },
  });

  const result = courses.map(course => {
    const { id, name, description, duration, created_at } = course;

    const updatedCourse = {
      id,
      name,
      description,
      duration, created_at,
      modules: course.coursesModules.map(courseModule => courseModule.module)
    };

    return updatedCourse;
  });

  console.log(JSON.stringify(result, null, 2));
}

main();