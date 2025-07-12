import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameStatsService } from './service/gamestats.service';
import { GameStatsController } from './controller/gamestats.controller';
import { GameStat, GameStatSchema } from './schemas/gamestat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GameStat.name, schema: GameStatSchema },
    ]),
  ],
  controllers: [GameStatsController],
  providers: [GameStatsService],
  exports: [GameStatsService],
})
export class GamestatsModule {}
