import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";

@Injectable()
export class VehicleRepository {

  constructor(private readonly prisma: PrismaService) { }

  findAllVehicles() {
    return this.prisma.vehicle.findMany()
  }

  createVehicle(vehicle: CreateVehicleDto) {
    return this.prisma.vehicle.create({
      data: vehicle
    })
  }

//   async updateVehicle(id: number, vehicle: UpdateVehicleDto) {
//     return this.prisma.vehicle.update({
//       where: {
//         id
//       },
//       data: vehicle
//     })
//   }

  // async deleteVehicle(id: number) {
  //   return this.prisma.vehicle.delete({
  //     where: {
  //       id
  //     }
  //   })
  // }

}