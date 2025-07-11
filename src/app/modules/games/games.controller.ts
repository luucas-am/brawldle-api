import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Post, Put, Body, Param } from "@nestjs/common";
import { GetGamesService } from "./services/get-games.service";
import { GetGameService } from "./services/get-game.service";
import { GetGameByDateService } from "./services/get-game-by-date.service";
import { CreateGameService } from "./services/create-game.service";
import { UpdateGameService } from "./services/update-game.service";
import { CreateGameDto } from "./dtos/create-game.dto";
import { UpdateGameDto } from "./dtos/update-game.dto";
import { GetGameDto } from "./dtos/get-game.dto";

@ApiTags("Games")
@Controller("games")
export class GamesController {
  constructor(
    private readonly getGamesService: GetGamesService,
    private readonly getGameService: GetGameService,
    private readonly getGameByDateService: GetGameByDateService,
    private readonly createGameService: CreateGameService,
    private readonly updateGameService: UpdateGameService,
  ) {}

  @Get()
  @ApiOkResponse({
    description: "Returns a list of all games",
    type: [GetGameDto],
  })
  async findAll() {
    return this.getGamesService.execute();
  }

  @Get(":id")
  @ApiOkResponse({
    description: "Returns a game by its ID",
    type: GetGameDto,
  })
  async findOne(@Param("id") id: string) {
    return this.getGameService.execute(id);
  }

  @Get("date/:date")
  @ApiOkResponse({
    description: "Returns a game by its creation date",
    type: GetGameDto,
  })
  async findByDate(@Param("date") date: string) {
    return this.getGameByDateService.execute(date);
  }

  @Post()
  @ApiCreatedResponse({
    description: "Creates a new game",
    type: GetGameDto,
  })
  async create(@Body() createGameDto: CreateGameDto) {
    return this.createGameService.execute(createGameDto);
  }

  @Put(":id")
  @ApiOkResponse({
    description: "Updates an existing game",
    type: GetGameDto,
  })
  async update(@Param("id") id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.updateGameService.execute(id, updateGameDto);
  }
}