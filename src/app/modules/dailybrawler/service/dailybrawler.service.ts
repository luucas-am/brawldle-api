import { Injectable } from '@nestjs/common';
import { DailyBrawlersRepository } from '../repository/dailybrawler.repository';
import { CreateDailyBrawlerDto } from '../dto/create-daily-brawler.dto';

@Injectable()
export class DailybrawlerService {
    constructor(private readonly repository: DailyBrawlersRepository) {}

    async getAllDailyBrawlers() {
        return this.repository.findAll();
    }

    async getLast5DailyBrawlers() {
        return this.repository.findAll().then(brawlers => brawlers.slice(0, 5));
    }

    async getTodayDailyBrawler() {
        const today = new Date();
        const dateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        return this.repository.findAll().then(brawlers => 
            brawlers.find(brawler => brawler.date.toISOString().split('T')[0] === dateOnly.toISOString().split('T')[0])
        );
    }

    async createDailyBrawler(data: CreateDailyBrawlerDto) {
        return this.repository.createDailyBrawler(data);
    }

    async deactivateDailyBrawlerById(id: string) {
        return this.repository.desactivateById(id);
    }
    
}