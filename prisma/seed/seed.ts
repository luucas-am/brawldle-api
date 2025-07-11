import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.brawler.count();
  if (existing > 0) {
    console.log(`🛑 Seed cancelado: já existem ${existing} brawlers no banco.`);
    return;
  }

  console.log("🌱 Seeding brawlers...");

  const filePath = path.resolve(__dirname, '../../../brawlers.json'); // ajuste conforme necessário
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const brawlers = JSON.parse(jsonData) as Array<{
    name: string;
    rarity: string;
    role: string;
    gender: string;
    releaseYear: number;
    imageUrl: string;
  }>;

  for (const brawler of brawlers) {
    await prisma.brawler.create({
      data: {
        id: brawler.name,
        name: brawler.name,
        rarity: brawler.rarity,
        role: brawler.role,
        gender: brawler.gender,
        releaseYear: brawler.releaseYear,
        imageUrl: brawler.imageUrl,
      },
    });
  }

  console.log(`✅ Seeded ${brawlers.length} brawlers.`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
