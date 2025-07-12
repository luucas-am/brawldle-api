import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/app/database/prisma.service";
import { CreateDailyBrawlerDto } from "../dto/create-daily-brawler.dto";

@Injectable()
export class DailyBrawlersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.dailyBrawler.findMany({
      orderBy: { date: "desc" },
      include: {
        brawler: true, // Include related brawler data
      },
    });
  }

  async createDailyBrawler(data: CreateDailyBrawlerDto) {
    return this.prisma.dailyBrawler.create({
      data,
    });
  }

  async desactivateById(id: string) {
    return this.prisma.dailyBrawler.update({
      where: { id },
      data: { active: false },
    });
  }
}