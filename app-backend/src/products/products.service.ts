import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return "Chego";
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
