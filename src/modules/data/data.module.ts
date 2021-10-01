import { Global, Module } from '@nestjs/common'
import { WebscrapeRepository } from './repository/webscrape.repository';
import { PuppeteerModule } from 'nest-puppeteer'

@Global()
@Module({
  providers: [
    WebscrapeRepository,
  ],
  exports: [
    WebscrapeRepository,
  ],
  imports: [
    PuppeteerModule.forRoot(),
  ]
})
export class DataModule {}
