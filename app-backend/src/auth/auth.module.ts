import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HashingServiceProtocol } from './hash/hashing.service';
import { BcryptService } from './hash/bcrypt.service';

@Global()
@Module({
  providers: [
    AuthService,
    {
      provide: HashingServiceProtocol,
      useClass: BcryptService
    }
  ],
  exports: [
    HashingServiceProtocol,
  ],
  controllers: [AuthController]
})
export class AuthModule { }
