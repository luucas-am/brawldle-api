import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './database/prisma.module';
import { GamesModule } from './modules/games/games.module';
import { BrawlersModule } from './modules/brawlers/brawlers.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DailybrawlerModule } from './modules/dailybrawler/dailybrawler.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GamestatsModule } from './modules/gamestats/gamestats.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    ScheduleModule.forRoot(),
    PrismaModule,
    BrawlersModule,
    GamesModule,
    DailybrawlerModule,
    GamestatsModule,

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI'),
      }),
    }),
  ],
})
export class AppModule {}
