import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { CustomersModule } from 'src/customers/customers.module';

@Module({
  imports: [PrismaModule, UsersModule, ProductsModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
