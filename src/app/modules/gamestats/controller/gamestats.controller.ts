import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GameStatsService } from '../service/gamestats.service';
import { CreateGameStatDto } from '../dto/create-gamestat.dto';

@Controller('game-stats')
export class GameStatsController {
  constructor(private readonly service: GameStatsService) {}

  @Post()
  async create(@Body() dto: CreateGameStatDto) {
    return await this.service.create(dto);
  }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return await this.service.findByUser(userId);
  }
}
