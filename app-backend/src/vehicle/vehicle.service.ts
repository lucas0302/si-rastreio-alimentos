import { Injectable } from '@nestjs/common';

@Injectable()
export class VehicleService {

  findAll() {
    return `This action returns all vehicle`;
  }

}