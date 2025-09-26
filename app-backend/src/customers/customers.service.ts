import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      const findCostomers = await this.prisma.customers.findFirst({
        where: {
          cnpj: createCustomerDto.cnpj
        }
      })

      if (findCostomers?.cnpj === createCustomerDto.cnpj) {
        throw new HttpException('Esse cliente já existe.', HttpStatus.CONFLICT);
      }

      const costomers = await this.prisma.customers.create({
        data: {
          name: createCustomerDto.name,
          email: createCustomerDto.email,
          cnpj: createCustomerDto.cnpj,
          address: createCustomerDto.address,
          phone: createCustomerDto.phone,
          identificationCode: createCustomerDto.identificationCode,
          paymentMethod: createCustomerDto.paymentMethod,
          paymentTern: createCustomerDto.paymentTern,
          city: createCustomerDto.city,
          State: createCustomerDto.state,
          legalName: createCustomerDto.legalName,
          stateRegistration: createCustomerDto.stateRegistration,
        }
      })
      return { message: "comprador cadastrado om sucesso!" };

    } catch (err) {
      if (err.status === 409) {
        throw new HttpException('Esse cliente já existe.', HttpStatus.CONFLICT);
      }

      throw new HttpException('falha ao cadastrar o cliente.', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return await this.prisma.customers.findMany();
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a  customer`;
  }

  remove(id: number) {
    return `This action removes customer`;
  }
}
