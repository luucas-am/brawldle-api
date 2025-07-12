import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { GamesModule } from './modules/games/games.module';
import { BrawlersModule } from './modules/brawlers/brawlers.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DailybrawlerModule } from './modules/dailybrawler/dailybrawler.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GamestatsModule } from './modules/gamestats/gamestats.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PrismaModule,
    BrawlersModule,
    GamesModule,
    DailybrawlerModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    GamestatsModule
  ],
  providers: [],
})

export class AppModule {}
