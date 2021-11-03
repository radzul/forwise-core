import { User } from '.prisma/client';
import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:name')
  getHelloName(@Param('name') name: string): string {
    return this.appService.getHelloName(name);
  }

  @Get('/users')
  async getUserList() {
    return this.userService.findAll();
  }
}
