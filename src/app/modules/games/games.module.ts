import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/database/prisma.module";
import { GamesService } from "./service/games.service";
import { GamesRepository } from "./repository/games.repository";
import { GamesController } from "./controller/games.controller";


@Module({
  imports: [PrismaModule],
  controllers: [GamesController],
  providers: [
    GamesRepository,
    GamesService,
  ],
})

export class GamesModule {}