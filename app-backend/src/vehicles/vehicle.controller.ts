import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { VehicleService } from "./vehicle.service";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { AuthTokenGuard } from "src/auth/guard/auth-token.guard";
import { AdminRolesGuard } from "src/auth/guard/roles/admin-roles.guard";

@UseGuards(AuthTokenGuard)
@Controller("vehicles")
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @UseGuards(AdminRolesGuard)
  @Post("register-vehicle")
  createVehicle(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.createVehicle(createVehicleDto);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

}