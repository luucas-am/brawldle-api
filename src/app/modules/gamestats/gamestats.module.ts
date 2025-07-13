import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameStatsService } from './service/gamestats.service';
import { GameStatsController } from './controller/gamestats.controller';
import { GameStat, GameStatSchema } from './schemas/gamestat.schema';
import { DailybrawlerModule } from '../dailybrawler/dailybrawler.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GameStat.name, schema: GameStatSchema },
    ]),
    DailybrawlerModule
  ],
  controllers: [GameStatsController],
  providers: [GameStatsService],
  exports: [GameStatsService],
})
export class GamestatsModule {}
