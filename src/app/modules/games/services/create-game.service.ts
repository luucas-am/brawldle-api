import { Injectable } from "@nestjs/common";
import { GamesRepository, ICreateGame } from "../games.repository";

@Injectable()
export class CreateGameService {
  constructor(private readonly gamesRepository: GamesRepository) {}

  async execute(createGameDto: ICreateGame) {
    return this.gamesRepository.createGame(createGameDto);
  }
}