import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { GamesModule } from './modules/games/games.module';
import { BrawlersModule } from './modules/brawlers/brawlers.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DailybrawlerModule } from './modules/dailybrawler/dailybrawler.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PrismaModule,
    BrawlersModule,
    GamesModule,
    DailybrawlerModule
  ],
  providers: [],
})

export class AppModule {}
