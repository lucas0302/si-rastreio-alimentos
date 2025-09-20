import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { CustomersModule } from 'src/customers/customers.module';
import { VehicleModule } from 'src/vehicle/vehicle.module';

@Module({
  imports: [PrismaModule, UsersModule, ProductsModule, CustomersModule, VehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
