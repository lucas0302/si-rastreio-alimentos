import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) { }

  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {

    return true;
  }
}
