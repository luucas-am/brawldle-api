import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Param } from "@nestjs/common";
import { BrawlersService } from "../service/brawlers.service";
import { GetBrawlerDto } from "../dto/get-brawler.dto";
import { DailybrawlerService } from "../../dailybrawler/service/dailybrawler.service";
import { GetDailyBrawlerDto } from "../../dailybrawler/dto/get-daily-brawler.dto copy";
import { Console } from "console";

@ApiTags("Brawlers")
@Controller("brawlers")
export class BrawlersController {
  constructor(
    private readonly brawlersService: BrawlersService,
    private readonly dailyBrawlerService: DailybrawlerService,
  ) {}

  @Get()
  @ApiOkResponse({
    description: "Returns a list of all brawlers",
    type: [GetBrawlerDto],
  })
  async findAll() {
    const brawlers = await this.brawlersService.getAllBrawlers();
    return brawlers.map(brawler => Object.assign(new GetBrawlerDto(), brawler));
  }

  @Get("random")
  @ApiOkResponse({
    description: "Returns a random brawler",
    type: GetBrawlerDto,
  })
  async getRandomBrawler() {
    var brawler = await this.brawlersService.getRandomBrawler();
  
    const brawlerDto = Object.assign(new GetBrawlerDto(), brawler);
    return brawlerDto;
  }

  @Get("today")
  @ApiOkResponse({
  description: "Returns a list of all brawlers",
  type: GetDailyBrawlerDto,
  })
  async getTodayDailyBrawler() {
      const brawler = await this.dailyBrawlerService.getTodayDailyBrawler();
      if (!brawler) {
          throw new Error("No daily brawler found for today");
      }

      const brawlerDto = Object.assign(new GetDailyBrawlerDto(), brawler);
      return brawlerDto;
  }

  @Get(":id")
  @ApiOkResponse({
    description: "Returns a brawler by its ID",
    type: GetBrawlerDto,
  })
  async findOne(@Param("id") id: string) {
    var brawler = await this.brawlersService.getBrawlerById(id);
    
    if (!brawler) {
      throw new Error("Brawler not found");
    }
    const brawlerDto = Object.assign(new GetBrawlerDto(), brawler);
    return brawlerDto;
  }

  @Get("name/:name")
  @ApiOkResponse({
    description: "Returns a brawler by its name",
    type: GetBrawlerDto,
  })
  async findByName(@Param("name") name: string) {
    var brawler = await this.brawlersService.getBrawlerByName(name);
    if (!brawler) {
      throw new Error("Brawler not found");
    }
    const brawlerDto = Object.assign(new GetBrawlerDto(), brawler);
    return brawlerDto;
  }
}