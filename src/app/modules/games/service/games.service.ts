import { Injectable } from '@nestjs/common';
import { GamesRepository } from '../repository/games.repository';
import { GameMode } from '@prisma/client';

@Injectable()
export class GamesService {
  constructor(private readonly gamesRepository: GamesRepository) {}

  async createGame(data: { mode: string; description?: string; brawlerId: string }) {
    const gameMode = data.mode as GameMode;
    return this.gamesRepository.createGame({
      ...data,
      mode: gameMode,
    });
  }

  async updateGame(id: string, data: { description?: string; brawlerId?: string }) {
    return this.gamesRepository.updateGame(id, data);
  }

  async getAllGames() {
    return this.gamesRepository.findAllGames();
  }

  async getGameById(id: string) {
    return this.gamesRepository.findGameById(id);
  }

  async getGameByDate(date: string) {
    return this.gamesRepository.findGameByDate(new Date(date));
  }
}