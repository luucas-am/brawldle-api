import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/database/prisma.module";
import { BrawlersController } from "./controller/brawlers.controller";
import { BrawlersRepository } from "./repository/brawlers.repository";
import { BrawlersService } from "./service/brawlers.service";


@Module({
  imports: [PrismaModule],
  controllers: [BrawlersController],
  providers: [
    BrawlersRepository,
    BrawlersService,
  ],
  exports: [BrawlersService],
})

export class BrawlersModule {}