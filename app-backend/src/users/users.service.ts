import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    // private readonly hasingService: HashingServiceProtocol
  ) { }





  async create(createUserDto: CreateUserDto) {

    try {


      return "deu bom";

    } catch (err) {
      console.log(err);
      throw new HttpException('Erro ao cadastrar usuario.', HttpStatus.BAD_REQUEST);
    }

  }


}
