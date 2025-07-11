import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Param } from "@nestjs/common";
import { GetBrawlersService } from "./service/get-brawlers.service";
import { GetBrawlerService } from "./service/get-brawler.service";
import { GetBrawlerByNameService } from "./service/get-brawler-by-name.service";
import { GetBrawlerDto } from "./dtos/get-brawler.dto";

@ApiTags("Brawlers")
@Controller("brawlers")
export class BrawlersController {
  constructor(
    private readonly getBrawlersService: GetBrawlersService,
    private readonly getBrawlerService: GetBrawlerService,
    private readonly getBrawlerByNameService: GetBrawlerByNameService,
  ) {}

  @Get()
  @ApiOkResponse({
    description: "Returns a list of all brawlers",
    type: [GetBrawlerDto],
  })
  async findAll() {
    return this.getBrawlersService.execute();
  }

  @Get(":id")
  @ApiOkResponse({
    description: "Returns a brawler by its ID",
    type: GetBrawlerDto,
  })
  async findOne(@Param("id") id: string) {
    return this.getBrawlerService.execute(id);
  }

  @Get("name/:name")
  @ApiOkResponse({
    description: "Returns a brawler by its name",
    type: GetBrawlerDto,
  })
  async findByName(@Param("name") name: string) {
    return this.getBrawlerByNameService.execute(name);
  }
}