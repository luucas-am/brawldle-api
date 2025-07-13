import { Module, forwardRef } from '@nestjs/common';
import { PrismaModule } from "src/app/database/prisma.module";
import { BrawlersController } from "./controller/brawlers.controller";
import { BrawlersRepository } from "./repository/brawlers.repository";
import { BrawlersService } from "./service/brawlers.service";
import { DailybrawlerModule } from "../dailybrawler/dailybrawler.module";

@Module({
  imports: [
    PrismaModule,
    forwardRef(() => DailybrawlerModule),
  ],
  controllers: [BrawlersController],
  providers: [
    BrawlersRepository,
    BrawlersService,
  ],
  exports: [BrawlersService],
})
export class BrawlersModule {}
