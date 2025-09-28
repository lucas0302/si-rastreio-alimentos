import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const existingAdmin = await prisma.users.findFirst({
    where: { username: 'admin.admin' },
  });

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash('12345678', 10);
    await prisma.users.create({
      data: {
        name: 'Administrador',
        username: 'admin.admin',
        password: passwordHash,
        role: 'admin',
      },
    });
    console.log('Usuário admin criado com sucesso!');
  } else {
    console.log('Usuário admin já existe.');
  }
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
