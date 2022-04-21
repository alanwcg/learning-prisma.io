import { PrismaClient, Prisma, Courses } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  const result = await prismaClient.$queryRaw<Courses[]>(
    Prisma.sql`
      SELECT
        c.id,
        c.name,
        c.description,
        c.duration,
        c.created_at,
        m.id AS module_id,
        m.name AS module_name,
        m.description AS module_description,
        m.created_at AS module_created_at
      FROM
        courses AS c
      LEFT JOIN
        courses_modules AS cm ON c.id = cm.course_id
      LEFT JOIN
        modules AS m ON m.id = cm.module_id
      WHERE
        c.name ILIKE 'react native'
    `,
  );

  console.log(result);
}

main();