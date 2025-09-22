import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { PaginationDto } from "src/common/dto/pagination.dto";
import { HashingServiceProtocol } from "src/auth/hash/hashing.service";

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hashingService: HashingServiceProtocol,
  ) { }

  // Create user
  async create(createUserDto: CreateUserDto) {

    try {

      const passwordHash = await this.hashingService.hash(createUserDto.password)

      await this.prisma.users.create({
        data: {
          name: createUserDto.name,
          username: createUserDto.username,
          password: passwordHash,
          role: createUserDto.role
        }
      });

      return { message: "Usuario Registrado com sucesso!" };
    } catch (err) {
      console.log(err)
      throw new HttpException('Erro ao cadastrar usuario.', HttpStatus.BAD_REQUEST);
    }
  }

  //Get all users
  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    try {
      const data = await this.prisma.$transaction([
        this.prisma.users.findMany({
          skip: offset,
          take: limit,
          select: {
            id: true,
            name: true,
            username: true,
            role: true
          }
        })
      ]);

      return {
        data,
        limit,
        offset
      };
    } catch (err) {
      throw new HttpException(
        'Erro ao buscar os usuarios',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //update user
  async update() {

  }

  //Delete user
  async delete(id: number) {

    try {
      const findUser = await this.prisma.users.findFirst(
        {
          where: {
            id: id
          }
        }
      )

      if (!findUser) {
        throw new HttpException('Esse usuario nao existe.', HttpStatus.BAD_REQUEST);
      }

      await this.prisma.users.delete(
        {
          where: {
            id: findUser.id
          }
        }
      )

      return { message: "Usuario deletado com sucesso!" }

    } catch (err) {
      throw new HttpException('Falha ao deletar usuario.', HttpStatus.BAD_REQUEST);

    }
  }


}
