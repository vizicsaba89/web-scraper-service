import { Injectable } from "@nestjs/common";
import { WebScrapeResult } from "src/modules/data/model/webscrape-result.entity";
import { WebscrapeRepository } from "src/modules/data/repository/webscrape.repository";

@Injectable()
export class WebscrapeService {

    constructor(private readonly webscrapeRepository: WebscrapeRepository) {}

    async getContent(template: string): Promise<string> {
        const webscrapeResult: WebScrapeResult = await this.webscrapeRepository.getContent(template)

        return webscrapeResult.result
    }
}
