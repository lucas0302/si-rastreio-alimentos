import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Buscar os dados de um user (check)
// cadastrar um user (check)
//deletar um user 
// atualizar um user

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get(':id')
  findUser(@Param('id', ParseIntPipe) id: number) {

  }

}
