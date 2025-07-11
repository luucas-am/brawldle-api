import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { GamesModule } from './modules/games/games.module';
import { BrawlersModule } from './modules/brawlers/brawlers.module';

@Module({
  imports: [
    PrismaModule,
    BrawlersModule,
    GamesModule,
  ],
  providers: [],
})

export class AppModule {}
