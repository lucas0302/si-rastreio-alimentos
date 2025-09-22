import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { BcryptService } from './hash/bcrypt.service';

@Global()
@Module({
  providers: [
    AuthService,
    BcryptService
  ],
  exports: [
    BcryptService,
  ],
  controllers: [AuthController]
})
export class AuthModule { }
