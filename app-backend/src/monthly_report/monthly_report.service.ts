import { Injectable } from '@nestjs/common';
import { CreateMonthlyReportDto } from './dto/create-monthly_report.dto';
import { UpdateMonthlyReportDto } from './dto/update-monthly_report.dto';

@Injectable()
export class MonthlyReportService {
  create(createMonthlyReportDto: CreateMonthlyReportDto) {
    return 'This action adds a new monthlyReport';
  }

  findAll() {
    return `This action returns all monthlyReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} monthlyReport`;
  }

  update(id: number, updateMonthlyReportDto: UpdateMonthlyReportDto) {
    return `This action updates a #${id} monthlyReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} monthlyReport`;
  }
}
