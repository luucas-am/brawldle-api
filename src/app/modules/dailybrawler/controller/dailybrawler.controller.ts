import { Controller, Get } from '@nestjs/common';
import { DailybrawlerService } from '../service/dailybrawler.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetDailyBrawlerDto } from '../dto/get-daily-brawler.dto copy';

@ApiTags('Daily Brawler')
@Controller('dailybrawler')
export class DailybrawlerController {
    constructor(
        private readonly dailyBrawlerService: DailybrawlerService,
    ) {}

    @Get("today")
    @ApiOkResponse({
    description: "Returns a list of all brawlers",
    type: [GetDailyBrawlerDto],
    })
    async getTodayDailyBrawler() {
        const brawler = await this.dailyBrawlerService.getTodayDailyBrawler();

        if (!brawler) {
            throw new Error("No daily brawler found for today");
        }

        const brawlerDto = new GetDailyBrawlerDto();
        brawlerDto.id = brawler.id;
        brawlerDto.date = brawler.date;
        brawlerDto.active = brawler.active;
        brawlerDto.brawler = brawler.brawler;
        return brawlerDto;
    }




}