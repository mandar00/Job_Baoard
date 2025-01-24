import { Job } from "@prisma/client";

const { placeholderJobs } = require("./placeholder-data");
const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();

async function main() {
  await Promise.all(
    placeholderJobs.map(async (job:Job) => {
      await prismaClient.job.upsert({
        where: {
          slug: job.slug,
        },
        update: job,
        create: job,
      });
    }),
  );
}

main()
  .then(async () => { 
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error while seeding database:", e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
