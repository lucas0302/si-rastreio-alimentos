import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import jwtConfig from './config/jwt.config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { SignInDto } from './dto/signin.dto';
import { BcryptService } from './hash/bcrypt.service';

@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService,
    private readonly hashingService: BcryptService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly jwtService: JwtService
  ) { }

  async Authenticate(signInDto: SignInDto) {

    const user = await this.prisma.users.findFirst({
      where: {
        username: signInDto.username,
        active: true
      }
    })

    if (!user) {
      throw new HttpException("Falha ao autenticar o usuário.", HttpStatus.UNAUTHORIZED)
    }

    const passwordIsValid = await this.hashingService.compare(signInDto.password, user.password);

    if (!passwordIsValid) {
      throw new HttpException("Usuário ou Senha incorretos.", HttpStatus.UNAUTHORIZED)
    }

    const token = await this.jwtService.signAsync(
      {
        sub: user.id,
        username: user.username,
        role: user.role
      },
      {
        secret: this.jwtConfiguration.secret,
        expiresIn: this.getExpiresIn(),
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer
      }
    )

    return {
      id: user.id,
      name: user.name,
      username: user.username,
      active: user.active,
      role: user.role,
      token: token
    }

  }

  private getExpiresIn(): JwtSignOptions['expiresIn'] {
    const ttl = this.jwtConfiguration.jwtTtl;
    if (!ttl) {
      return undefined;
    }

    const numericValue = Number(ttl);
    return Number.isNaN(numericValue) ? ttl : numericValue;
  }

}
