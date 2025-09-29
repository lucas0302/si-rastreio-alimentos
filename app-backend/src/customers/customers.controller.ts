import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { AuthTokenGuard } from 'src/auth/guard/auth-token.guard';
import { AdminRolesGuard } from 'src/auth/guard/roles/admin-roles.guard';

@UseGuards(AuthTokenGuard)
@Controller('clientes')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @UseGuards(AdminRolesGuard)
  @Post('cadastro-cliente')
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @UseGuards(AdminRolesGuard)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @UseGuards(AdminRolesGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.remove(id);
  }
}
