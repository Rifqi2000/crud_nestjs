import { Controller, Get,Post, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  //lOGIN
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);  //return jwt
  }

  @UseGuards(JwtAuthGuard)
  //PROTECTED
  @Get('protected')
  getHello(@Request() req): string {
    return req.user; //return bearer token,validate token
  }
}
