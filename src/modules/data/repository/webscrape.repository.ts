import { Injectable } from "@nestjs/common";
import { InjectPage } from "nest-puppeteer";
import { Page } from "puppeteer";
import { WebScrapeResult } from "../model/webscrape-result.entity";

@Injectable()
export class WebscrapeRepository {

    constructor(@InjectPage() private readonly page: Page) {}

    async getContent(template: string): Promise<WebScrapeResult> {
        await this.page.goto('https://graffiter.com/app/walls', { waitUntil: 'load' })
        const content = await this.page.evaluate(() => {
            const data = document.querySelector('.wall_section')
            console.log('data', data)

            return data.innerHTML
        })

        return new Promise( (resolve, reject) => resolve(new WebScrapeResult(content)) )
    }

}
