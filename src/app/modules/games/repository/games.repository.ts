import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/app/database/prisma.service";
import { GameMode } from "@prisma/client";

interface ICreateGame {
  mode: GameMode;
  description?: string;
  brawlerId: string;
}

interface IUpdateGame {
  description?: string;
  brawlerId?: string;
}

@Injectable()
class GamesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createGame(data: ICreateGame) {
    return this.prisma.game.create({
      data,
      include: { brawler: true },
    });
  }

  async updateGame(id: string, data: IUpdateGame) {
    return this.prisma.game.update({
      where: { id },
      data,
      include: { brawler: true },
    });
  }

  async findAllGames() {
    return this.prisma.game.findMany({
      orderBy: { createdAt: "desc" },
      include: { brawler: true },
    });
  }

  async findGameById(id: string) {
    return this.prisma.game.findUnique({
      where: { id },
      include: { brawler: true },
    });
  }

  async findGameByDate(date: Date) {
    return this.prisma.game.findFirst({
      where: {
        createdAt: {
          gte: new Date(date.setHours(0, 0, 0, 0)),
          lt: new Date(date.setHours(23, 59, 59, 999)),
        },
      },
      include: { brawler: true },
    });
  }
}

export { GamesRepository, ICreateGame, IUpdateGame };