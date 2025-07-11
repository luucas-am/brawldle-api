import { Injectable } from "@nestjs/common";
import { BrawlersRepository } from "../brawlers.repository";

@Injectable()
export class GetBrawlerByNameService {
  constructor(private readonly brawlersRepository: BrawlersRepository) {}

  async execute(name: string) {
    return this.brawlersRepository.findByName(name);
  }
}