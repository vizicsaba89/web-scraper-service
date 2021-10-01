import { Controller, Get, HttpException } from "@nestjs/common";
import { WebscrapeService } from "src/modules/service/component/webscrape.service";

@Controller("contents")
export class WebscrapeController {

    constructor(private readonly webscrapeService: WebscrapeService) {}

    @Get()
    async getContents(): Promise<string> {
        try {
            return await this.webscrapeService.getContent('content')
          } catch (err) {
            throw new HttpException(err, 500)
          }
    }

}
