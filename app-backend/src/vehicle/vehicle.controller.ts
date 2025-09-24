import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { AuthTokenGuard } from 'src/auth/guard/auth-token.guard';
import { AdminRolesGuard } from 'src/auth/guard/roles/admin-roles.guard';


@UseGuards(AuthTokenGuard, AdminRolesGuard)
@Controller('veiculos')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }

  @Get()
  findAllVehicles() {
    return this.vehicleService.findAllVehicles();
  }

  @Post('cadastrar-veiculo')
  createVehicle(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.createVehicle(createVehicleDto);
  }

}