import { Injectable } from "@nestjs/common";
import { GamesRepository } from "../games.repository";

@Injectable()
export class GetGamesService {
  constructor(private readonly gamesRepository: GamesRepository) {}

  async execute() {
    return this.gamesRepository.findAllGames();
  }
}