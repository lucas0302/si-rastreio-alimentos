import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }

  @Get()
  findAllVehicles() {
    return this.vehicleService.findAllVehicles();
  }

  @Post()
  createVehicle(@Body() createVehicleDto: CreateVehicleDto) {
    this.vehicleService.createVehicle(createVehicleDto);
  }

}