import { Body, Controller, Post } from '@nestjs/common';
import { SingInDto } from './dto/signin.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  SingIn(@Body() singInDto: SingInDto) {

    return this.authService.Authenticate(singInDto)
  }
}
