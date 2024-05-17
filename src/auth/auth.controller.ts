import { GoogleOAuthGuard } from './auth.guard';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req) {
    return 1;
  }

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return {
      message: 'user details from google',
      user: req.user,
    };
  }
}
