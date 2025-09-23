import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Injectable()
export class VehicleService {

  private readonly vehicles: CreateVehicleDto[] = [];

  findAllVehicles(): CreateVehicleDto[] {
    return this.vehicles;
  }

  createVehicle(vehicle: CreateVehicleDto) {
    this.vehicles.push(vehicle);
  }

}