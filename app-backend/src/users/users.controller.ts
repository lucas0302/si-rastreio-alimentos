import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { AuthTokenGuard } from 'src/auth/guard/auth-token.guard';

// Buscar os dados de um user (check)
// cadastrar um user (check)
//deletar um user 
// atualizar um user
@UseGuards(AuthTokenGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findUsers(@Query() paginationDto: PaginationDto) {

    return this.usersService.findAll(paginationDto)
  }

  @Put(':id')
  updateUser(@Body() @Param('id', ParseIntPipe) id: number) {
    return "Deu bom PUT"
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id)
  }

}
