import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/app/database/prisma.service";

@Injectable()
export class BrawlersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.brawler.findMany({
      orderBy: { name: "asc" },
    });
  }

  async findById(id: string) {
    return this.prisma.brawler.findUnique({
      where: { id },
    });
  }

  async findByName(name: string) {
    return this.prisma.brawler.findFirst({
      where: { name },
    });
  }
}