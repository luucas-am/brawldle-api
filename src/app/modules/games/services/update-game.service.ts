import { Injectable } from "@nestjs/common";
import { GamesRepository, IUpdateGame } from "../games.repository";

@Injectable()
export class UpdateGameService {
  constructor(private readonly gamesRepository: GamesRepository) {}

  async execute(gameId: string, updateGameDto: IUpdateGame) {
    return this.gamesRepository.updateGame(gameId, updateGameDto);
  }
}