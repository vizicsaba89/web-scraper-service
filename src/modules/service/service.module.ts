import { Global, Module } from '@nestjs/common'
import { WebscrapeService } from './component/webscrape.service';

@Global()
@Module({
  providers: [
    WebscrapeService,
  ],
  exports: [
    WebscrapeService,
  ],
})
export class ServiceModule {}
