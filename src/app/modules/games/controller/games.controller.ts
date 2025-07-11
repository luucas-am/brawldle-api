import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Post, Put, Body, Param } from "@nestjs/common";
import { GamesService } from "../service/games.service";
import { GetGameDto } from "../dto/get-game.dto";
import { CreateGameDto } from "../dto/create-game.dto";
import { UpdateGameDto } from "../dto/update-game.dto";

@ApiTags("Games")
@Controller("games")
export class GamesController {
  constructor(
    private readonly gamesService: GamesService
  ) {}

  @Get()
  @ApiOkResponse({
    description: "Returns a list of all games",
    type: [GetGameDto],
  })
  async findAll() {
    return this.gamesService.getAllGames();
  }

  @Get(":id")
  @ApiOkResponse({
    description: "Returns a game by its ID",
    type: GetGameDto,
  })
  async findOne(@Param("id") id: string) {
    return this.gamesService.getGameById(id);
  }

  @Get("date/:date")
  @ApiOkResponse({
    description: "Returns a game by its creation date",
    type: GetGameDto,
  })
  async findByDate(@Param("date") date: string) {
    return this.gamesService.getGameByDate(date);
  }

  @Post()
  @ApiCreatedResponse({
    description: "Creates a new game",
    type: GetGameDto,
  })
  async create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.createGame(createGameDto);
  }

  @Put(":id")
  @ApiOkResponse({
    description: "Updates an existing game",
    type: GetGameDto,
  })
  async update(@Param("id") id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.updateGame(id, updateGameDto);
  }
}