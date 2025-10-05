import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehicleService {

  constructor(private readonly prisma: PrismaService) { }

  async createVehicle(vehicle: CreateVehicleDto) {
    return this.prisma.vehicle.create({
      data: {
        maximumLoad: vehicle.maximumLoad,
        model: vehicle.model,
        plate: vehicle.plate,
        phone: vehicle.phone,
        description: vehicle.description,
      },
    });
  }

  async findAll() {
    return this.prisma.vehicle.findMany();
  }

}