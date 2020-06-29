import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('snapchat'))
  async googleAuth(@Req() req) {}

  @Get('callback')
  @UseGuards(AuthGuard('snapchat'))
  googleAuthRedirect(@Req() req) {
    return this.appService.snapchatLogin(req);
  }
}
