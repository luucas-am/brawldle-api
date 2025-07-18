import { Injectable } from '@nestjs/common';
import { BrawlersRepository } from '../repository/brawlers.repository';

@Injectable()
export class BrawlersService {
  
  constructor(private readonly brawlersRepository: BrawlersRepository) {}
  
  async getAllBrawlers() {
    return this.brawlersRepository.findAll();
  }

  async getBrawlerById(id: string) {
    return this.brawlersRepository.findById(id);
  }

  async getBrawlerByName(name: string) {
    return this.brawlersRepository.findByName(name);
  }

  async getRandomBrawler() {
    var brawlers = await this.brawlersRepository.findAll();
    const randomIndex = Math.floor(Math.random() * brawlers.length);
    return brawlers[randomIndex];
  }

}