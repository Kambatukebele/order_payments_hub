import prisma from "../src/db/prisma.js";
import ENV from "../src/config/env.js";
import bcrypt from "bcrypt";

const seedOwner = async () => {
  const email = ENV.SEEDER_OWNER_EMAIL;
  const password = ENV.SEEDER_OWNER_PASSWORD;

  if (!email || !password) {
    throw new Error(
      "SEEDER_OWNER_EMAIL and SEEDER_OWNER_PASSWORD are required",
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const owner = await prisma.user.create({
    data: {
      name: "kamba",
      email,
      passwordHash,
      role: "owner",
    },
  });

  return owner;
};

seedOwner()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
