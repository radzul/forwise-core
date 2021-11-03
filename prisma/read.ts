import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findUsers() {
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });

  console.log('allUsers :>> ', allUsers);
}

export default findUsers;
