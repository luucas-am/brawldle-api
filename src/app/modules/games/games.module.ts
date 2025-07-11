import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/database/prisma.module";
import { GamesController } from "./games.controller";
import { GamesRepository } from "./games.repository";
import { GetGamesService } from "./services/get-games.service";
import { GetGameService } from "./services/get-game.service";
import { GetGameByDateService } from "./services/get-game-by-date.service";
import { CreateGameService } from "./services/create-game.service";
import { UpdateGameService } from "./services/update-game.service";

@Module({
  imports: [PrismaModule],
  controllers: [GamesController],
  providers: [
    GamesRepository,
    GetGamesService,
    GetGameService,
    GetGameByDateService,
    CreateGameService,
    UpdateGameService,
  ],
})

export class GamesModule {}