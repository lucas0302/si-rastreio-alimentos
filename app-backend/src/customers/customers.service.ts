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
      });

      if (findCostomers?.cnpj === createCustomerDto.cnpj) {
        throw new HttpException('Esse cliente já existe.', HttpStatus.CONFLICT);
      }

      await this.prisma.customers.create({
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
      });
      return { message: "Cliente cadastrado com sucesso!" };

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

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {

    try {
      const user = await this.prisma.customers.findFirst({
        where: {
          id: id
        }
      });

      if (!user) {
        throw new HttpException('Esse cliente não esta na nossa base de dados.', HttpStatus.CONFLICT);
      }

      const updatecustomer = await this.prisma.customers.update({
        where: {
          id: user.id
        },
        data: {
          name: updateCustomerDto?.name ?? user.name,
          email: updateCustomerDto?.email ?? user.email,
          cnpj: updateCustomerDto?.cnpj ?? user.cnpj,
          address: updateCustomerDto?.address ?? user.address,
          phone: updateCustomerDto?.phone ?? user.phone,
          identificationCode: updateCustomerDto?.identificationCode ?? user.identificationCode,
          paymentMethod: updateCustomerDto?.paymentMethod ?? user.paymentMethod,
          paymentTern: updateCustomerDto?.paymentTern ?? user.paymentTern,
          city: updateCustomerDto?.city ?? user.city,
          legalName: updateCustomerDto?.legalName ?? user.legalName,
          stateRegistration: updateCustomerDto?.stateRegistration ?? user.stateRegistration,
        }
      })

      return {
        updatecustomer,
        message: "cliente atualizado com sucesso!"
      }

    } catch (err) {

      throw new HttpException('falha ao atualizar o cliente.', HttpStatus.BAD_REQUEST);
    }

  }

  async remove(id: number) {

    try {
      console.log(id)
      const user = await this.prisma.customers.findFirst({
        where: {
          id: id
        }
      });

      if (!user) {
        throw new HttpException('Esse usuario nao existe.', HttpStatus.BAD_REQUEST);
      }

      await this.prisma.customers.delete({
        where: {
          id: user.id
        }
      });

      return { message: "Usuario deleta com sucesso!" }

    } catch (err) {
      console.log(err);
      throw new HttpException('Falha ao deletar Comprador.', HttpStatus.BAD_REQUEST);
    }
  }
}
