import { Module } from '@nestjs/common'
import { WebscrapeController } from './controller/webscrape.controller';

@Module({
  imports: [
  ],
  providers: [
  ],
  controllers: [
    WebscrapeController,
  ],
})
export class WebModule {}
