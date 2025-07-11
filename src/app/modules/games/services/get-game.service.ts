import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { GamesRepository } from "../games.repository";

@Injectable()
export class GetGameService {
  constructor(private readonly gamesRepository: GamesRepository) {}

  async execute(id: string) {
    const game = await this.gamesRepository.findGameById(id);
    
    if (!game) {
      throw new NotFoundException({
        message: "Game not found",
        statusCode: HttpStatus.NOT_FOUND,
        error: "Not Found",
      });
    }

    return game;
  }
}