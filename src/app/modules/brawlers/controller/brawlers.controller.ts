import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Param } from "@nestjs/common";
import { BrawlersService } from "../service/brawlers.service";
import { GetBrawlerDto } from "../dto/get-brawler.dto";

@ApiTags("Brawlers")
@Controller("brawlers")
export class BrawlersController {
  constructor(
    private readonly brawlersService: BrawlersService,
  ) {}

  @Get()
  @ApiOkResponse({
    description: "Returns a list of all brawlers",
    type: [GetBrawlerDto],
  })
  async findAll() {
    return this.brawlersService.getAllBrawlers();
  }

  @Get(":id")
  @ApiOkResponse({
    description: "Returns a brawler by its ID",
    type: GetBrawlerDto,
  })
  async findOne(@Param("id") id: string) {
    return this.brawlersService.getBrawlerById(id);
  }

  @Get("name/:name")
  @ApiOkResponse({
    description: "Returns a brawler by its name",
    type: GetBrawlerDto,
  })
  async findByName(@Param("name") name: string) {
    return this.brawlersService.getBrawlerByName(name);
  }
}