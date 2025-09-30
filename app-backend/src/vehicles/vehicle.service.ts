import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { VehicleRepository } from './vehicle.repository';

@Injectable()
export class VehicleService {

  constructor(private readonly vehicleRepository: VehicleRepository) { }

  findAllVehicles() {
    return this.vehicleRepository.findAllVehicles();
  }

  createVehicle(vehicle: CreateVehicleDto) {
    return this.vehicleRepository.createVehicle(vehicle);
  }

}