import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

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

  async findAll(paginationDto: PaginationDto) {
    const { limit = 13, offset = 0 } = paginationDto;

    try {
      const [vehicles, total] = await this.prisma.$transaction([
        this.prisma.vehicle.findMany({
          skip: offset,
          take: limit,
          orderBy: { id: 'desc' },
        }),
        this.prisma.vehicle.count(),
      ]);

      return {
        data: vehicles,
        limit,
        offset,
        total,
      };
    } catch (err) {
      throw new HttpException(
        'Erro ao buscar veiculos.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteVehicle(id: number) {
    try {
      const vehicle = await this.prisma.vehicle.findUnique({
        where: { id },
      });

      if (!vehicle) {
        throw new HttpException(
          "Esse veículo não existe.",
          HttpStatus.NOT_FOUND,
        );
      }

      await this.prisma.vehicle.delete({
        where: { id: vehicle.id },
      });

      return { message: "Veículo deletado com sucesso!" };
    } catch (err) {
      if (err instanceof HttpException) {
        throw err;
      }

      throw new HttpException(
        "Falha ao deletar veículo.",
        HttpStatus.BAD_REQUEST,
      );
    }
  }

}
