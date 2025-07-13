import { Module, forwardRef } from '@nestjs/common';
import { DailybrawlerService } from './service/dailybrawler.service';
import { DailyBrawlerCron } from './daily-brawler.cron';
import { DailyBrawlersRepository } from './repository/dailybrawler.repository';
import { PrismaService } from 'src/app/database/prisma.service';
import { DailybrawlerController } from './controller/dailybrawler.controller';
import { BrawlersModule } from '../brawlers/brawlers.module';

@Module({
  imports: [forwardRef(() => BrawlersModule)],
  providers: [
    DailybrawlerService,
    DailyBrawlersRepository,
    DailyBrawlerCron,
    PrismaService,
  ],
  exports: [DailybrawlerService],
  controllers: [DailybrawlerController],
})
export class DailybrawlerModule {}