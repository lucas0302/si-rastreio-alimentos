import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {

  constructor(
    private readonly prisma: PrismaService,
  ) { }

  // Create user
  async create(createProductDto: CreateProductDto) {
    try {
      const findCode = await this.prisma.product.findFirst(
        {
          where: {
            code: Number(createProductDto.code)
          }
        }
      );

      if (Number(createProductDto.code) === findCode?.code) {
        throw new HttpException('Esse produto já existe.', HttpStatus.CONFLICT);
      }

      await this.prisma.product.create({
        data: {
          code: Number(createProductDto.code),
          name: createProductDto.name,
          price: createProductDto.price,
          weight: createProductDto.weight,
          unit: createProductDto.unit,
          expiration: createProductDto.expiration,
          expiration_unit: createProductDto.expiration_unit
        }
      });

      return { message: "Produto cadastrado com sucesso!" };
    } catch (err) {
      console.log(err)
      if (err.status === 409) {
        throw new HttpException('Esse produto já existe.', HttpStatus.CONFLICT);
      }

      throw new HttpException('Erro ao cadastrar produto.', HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    return "Chego";
  }

  findOne(id: number) {
    return "Chego";
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return "Chego";
  }

  remove(id: number) {
    return "Chego";
  }
}
