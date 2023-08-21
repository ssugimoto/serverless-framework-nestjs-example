import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log('controller start.');
    return this.appService.getHello();
  }

  @Get('say')
  getSay(): string {
    return 'say.';
  }
}
