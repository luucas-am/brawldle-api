import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DailybrawlerService } from './service/dailybrawler.service';
import { BrawlersService } from '../brawlers/service/brawlers.service';

@Injectable()
export class DailyBrawlerCron implements OnModuleInit {
  private readonly logger = new Logger(DailyBrawlerCron.name);

  constructor(
    private readonly dailyBrawlerService: DailybrawlerService,
    private readonly brawlerService: BrawlersService
  ) {}

  async onModuleInit() {
    this.logger.log('Executando cron manualmente na inicialização...');
    await this.handleDailyBrawlerSelection();
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleDailyBrawlerSelection() {
    const today = new Date();
    const dateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const existing = await this.dailyBrawlerService.getTodayDailyBrawler();

    if (existing) {
      this.logger.log('Já existe um Brawler do dia.');
      return;
    }

    const brawlers = await this.brawlerService.getAllBrawlers();
    const last5Brawlers = await this.dailyBrawlerService.getLast5DailyBrawlers();
    const last5Ids = last5Brawlers.map(b => b.brawlerId);

    const eligibleBrawlers = brawlers.filter(b => !last5Ids.includes(b.id));

    if (eligibleBrawlers.length === 0) {
      this.logger.warn('Não há brawlers elegíveis para sorteio (todos foram usados recentemente).');
      return;
    }

    const randomIndex = Math.floor(Math.random() * eligibleBrawlers.length);
    const random = eligibleBrawlers[randomIndex];

    if (last5Brawlers.length > 0){
      await this.dailyBrawlerService.deactivateDailyBrawlerById(last5Brawlers[0].id);
    }
      

    await this.dailyBrawlerService.createDailyBrawler({
      brawlerId: random.id,
      date: dateOnly,
      active: true,
    });

    this.logger.log(`Brawler do dia definido`);
  }
}
