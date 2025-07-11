import { Injectable } from "@nestjs/common";
import { BrawlersRepository } from "../brawlers.repository";

@Injectable()
export class GetBrawlerService {
  constructor(private readonly brawlersRepository: BrawlersRepository) {}

  async execute(id: string) {
    return this.brawlersRepository.findById(id);
  }
}