import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      const existingCustomer = await this.prisma.customers.findFirst({
        where: {
          OR: [
            { code: BigInt(createCustomerDto.code) },
            { cnpj_cpf: createCustomerDto.cnpj_cpf },
          ],
        },
      } as any);

      if (existingCustomer) {
        throw new HttpException("Esse cliente já existe.", HttpStatus.CONFLICT);
      }

      await this.prisma.customers.create({
        data: {
          code: BigInt(createCustomerDto.code),
          fantasy_name: createCustomerDto.fantasy_name,
          legal_name: createCustomerDto.legal_name,
          cnpj_cpf: createCustomerDto.cnpj_cpf,
          state_subscrition: createCustomerDto.state_subscrition,
          neighborhood: createCustomerDto.neighborhood,
          state: createCustomerDto.state,
          address: createCustomerDto.address,
          cep: createCustomerDto.cep,
          corporate_network: createCustomerDto.corporate_network,
          email: createCustomerDto.email,
          phone: createCustomerDto.phone,
          payment_method: createCustomerDto.payment_method,
        } as any,
      } as any);
      return { message: "Cliente cadastrado com sucesso!" };
    } catch (err) {
      if (err?.status === 409) {
        throw new HttpException("Esse cliente já existe.", HttpStatus.CONFLICT);
      }
      throw new HttpException(
        "Falha ao cadastrar o cliente.",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findAll() {
    return await this.prisma.customers.findMany({
      orderBy: { code: "desc" } as any,
    } as any);
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    try {
      const customer: any = await this.prisma.customers.findFirst({
        where: {
          code: BigInt(id),
        },
      } as any);

      if (!customer) {
        throw new HttpException(
          "Esse cliente não está na nossa base de dados.",
          HttpStatus.CONFLICT
        );
      }

      const updatecustomer: any = await this.prisma.customers.update({
        where: {
          code: customer.code,
        },
        data: {
          fantasy_name:
            updateCustomerDto?.fantasy_name ?? customer.fantasy_name,
          legal_name: updateCustomerDto?.legal_name ?? customer.legal_name,
          cnpj_cpf: updateCustomerDto?.cnpj_cpf ?? customer.cnpj_cpf,
          address: updateCustomerDto?.address ?? customer.address,
          neighborhood:
            updateCustomerDto?.neighborhood ?? customer.neighborhood,
          state: updateCustomerDto?.state ?? customer.state,
          cep: updateCustomerDto?.cep ?? customer.cep,
          corporate_network:
            updateCustomerDto?.corporate_network ?? customer.corporate_network,
          email: updateCustomerDto?.email ?? customer.email,
          phone: updateCustomerDto?.phone ?? customer.phone,
          payment_method:
            updateCustomerDto?.payment_method ?? customer.payment_method,
          state_subscrition:
            updateCustomerDto?.state_subscrition ?? customer.state_subscrition,
        } as any,
      } as any);

      return {
        updatecustomer,
        message: "Cliente atualizado com sucesso!",
      };
    } catch (err) {
      throw new HttpException(
        "Falha ao atualizar o cliente.",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async remove(id: number) {
    try {
      const customer: any = await this.prisma.customers.findFirst({
        where: { code: BigInt(id) },
      } as any);

      if (!customer) {
        throw new HttpException(
          "Esse cliente não está na nossa base de dados.",
          HttpStatus.BAD_REQUEST
        );
      }

      await this.prisma.customers.delete({
        where: { code: customer.code },
      } as any);

      return { message: "Cliente deletado com sucesso!" };
    } catch (err) {
      throw new HttpException(
        "Falha ao deletar Cliente.",
        HttpStatus.BAD_REQUEST
      );
    }
  }
}