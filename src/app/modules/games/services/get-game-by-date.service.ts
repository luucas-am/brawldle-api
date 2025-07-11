import { Injectable } from "@nestjs/common";
import { GamesRepository } from "../games.repository";

@Injectable()
export class GetGameByDateService {
  constructor(private readonly gamesRepository: GamesRepository) {}

  async execute(date: string) {
    return this.gamesRepository.findGameByDate(new Date(date));
  }
}