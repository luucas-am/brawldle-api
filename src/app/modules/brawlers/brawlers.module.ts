import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/database/prisma.module";
import { BrawlersController } from "./brawlers.controller";
import { BrawlersRepository } from "./brawlers.repository";
import { GetBrawlersService } from "./service/get-brawlers.service";
import { GetBrawlerService } from "./service/get-brawler.service";
import { GetBrawlerByNameService } from "./service/get-brawler-by-name.service";

@Module({
  imports: [PrismaModule],
  controllers: [BrawlersController],
  providers: [
    BrawlersRepository,
    GetBrawlersService,
    GetBrawlerService,
    GetBrawlerByNameService,
  ],
})

export class BrawlersModule {}