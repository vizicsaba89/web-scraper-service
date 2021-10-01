import { Module } from '@nestjs/common'
import { DataModule } from './modules/data/data.module'
import { ServiceModule } from './modules/service/service.module'
import { WebModule } from './modules/web/web.module'

@Module({
  imports: [
    DataModule,
    ServiceModule,
    WebModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
