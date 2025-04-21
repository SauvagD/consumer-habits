import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  /*   @Get('google')
  redirectToGoogle() {
    return this.authService.getAuthUrl();
  }

  @Get('google/callback')
  async handleGoogleCallback(@Query('code') code: string) {
    const tokens = await this.authService.getTokensFromCode(code);

    // 💾 Ici tu peux stocker les tokens pour l'utilisateur dans ta DB
    console.log('✅ Tokens récupérés :', tokens);
  } */
}
