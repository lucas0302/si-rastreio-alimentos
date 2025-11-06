import { Module } from '@nestjs/common';
import { MonthlyReportService } from './monthly_report.service';
import { MonthlyReportController } from './monthly_report.controller';

@Module({
  controllers: [MonthlyReportController],
  providers: [MonthlyReportService],
})
export class MonthlyReportModule {}
