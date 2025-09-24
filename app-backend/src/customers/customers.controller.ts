import { Controller } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('clientes')
export class CustomersController {

  constructor(private readonly customersService: CustomersService) {}

}