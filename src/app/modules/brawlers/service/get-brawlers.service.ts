import { Injectable } from "@nestjs/common";
import { BrawlersRepository } from "../brawlers.repository";

@Injectable()
export class GetBrawlersService {
  constructor(private readonly brawlersRepository: BrawlersRepository) {}

  async execute() {
    return this.brawlersRepository.findAll();
  }
}