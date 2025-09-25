import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { PaginationDto } from "src/common/dto/pagination.dto";
import { BcryptService } from "src/auth/hash/bcrypt.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { role } from "generated/prisma";

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcryptService: BcryptService,
  ) { }

  // Create user
  async create(createUserDto: CreateUserDto) {

    try {

      const passwordHash = await this.bcryptService.hash(createUserDto.password)

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
  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.prisma.users.findFirst({ where: { id } });

      if (!user) {
        throw new HttpException('Esse usuário não existe.', HttpStatus.NOT_FOUND);
      }

      const dataUser: {
        name?: string;
        username?: string;
        password?: string;
        active?: boolean;
        role?: role
      } = {};

      if (updateUserDto.username) {
        dataUser.username = updateUserDto.username;
      }

      if (updateUserDto.password) {
        dataUser.password = await this.bcryptService.hash(updateUserDto.password);
      }

      // if (typeof updateUserDto.active === 'boolean') {
      //   dataUser.active = updateUserDto.active;
      // }

      if (updateUserDto.role) {
        dataUser.role = updateUserDto.role;
      }

      const updateUser = await this.prisma.users.update({
        where: { id: user.id },
        data: dataUser,
        select: {
          id: true,
          username: true,
          name: true,
          role: true,
          active: true,
        },
      });

      return {
        updateUser,
        message: 'Usuário atualizado!',
      };
    } catch (err) {
      throw new HttpException('Falha ao atualizar usuário.', HttpStatus.BAD_REQUEST);
    }
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