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
        return this.dailyBrawlerService.getTodayDailyBrawler();
    }




}