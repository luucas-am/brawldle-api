import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GameStat, GameStatDocument } from '../schemas/gamestat.schema';
import { Model } from 'mongoose';
import { CreateGameStatDto } from '../dto/create-gamestat.dto';

@Injectable()
export class GameStatsService {
  constructor(
    @InjectModel(GameStat.name) private gameStatModel: Model<GameStatDocument>,
  ) {}

  async create(dto: CreateGameStatDto): Promise<GameStat> {
    const doc = new this.gameStatModel({
      ...dto,
      playedAt: new Date()
    });
    return doc.save();
  }

  async findByUser(userId: string): Promise<GameStat[]> {
    return this.gameStatModel.find({ userId }).sort({ playedAt: -1 }).exec();
  }
}
