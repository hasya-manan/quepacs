import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create role ADMIN if not exists
  const adminRole = await prisma.role.upsert({
    where: { name: "ADMIN" },
    update: {},
    create: {
      name: "ADMIN",
      description: "System administrator",
    },
  });

  // Hash password
  const hashedPassword = await bcrypt.hash("admin123", 12);
  //   const hashedPassword = await bcrypt.hash(password, 12);

  // Create first admin user if not exists
  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      fullname: "Super Admin",
      nationality: "Malaysian",
      nric: "000000000000",
      phone: "0123456789",
      gender: "MALE",
      password_hash: hashedPassword,
      role_id: adminRole.id,
      status: "ACTIVE",
    },
  });
}

main()
  .then(() => {
    console.log("🌱 Seeding completed!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
