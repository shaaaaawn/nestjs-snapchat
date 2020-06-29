import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnapStrategy } from './snapchat.strategy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SnapStrategy],
})
export class AppModule {}
