import { Module } from '@nestjs/common';
import { DailybrawlerService } from './service/dailybrawler.service';
import { DailyBrawlerCron } from './daily-brawler.cron';
import { DailyBrawlersRepository } from './repository/dailybrawler.repository';
import { BrawlersModule } from '../brawlers/brawlers.module';
import { PrismaService } from 'src/app/database/prisma.service';
import { DailybrawlerController } from './controller/dailybrawler.controller';

@Module({
  imports: [BrawlersModule], // 👈 aqui também
  providers: [
    DailybrawlerService,
    DailyBrawlersRepository,
    DailyBrawlerCron,
    PrismaService,
  ],
  controllers: [DailybrawlerController],
})
export class DailybrawlerModule {}