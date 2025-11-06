import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from "class-validator";

export class ProductItemDto {
  @IsInt()
  @Min(1)
  code!: number;

  @IsInt()
  @Min(0)
  quantity!: number;

  @IsOptional()
  @IsString()
  description?: string;
}

export class CreateDailyReportDto {
  @IsInt()
  @Min(0)
  quantity!: number;

  @IsInt()
  @Min(1)
  invoiceNumber!: number;

  // Timestamp (ISO string)
  @IsDateString()
  productionDate!: string;

  @Type(() => Number)
  @IsNumber()
  vehicleTemperature!: number;

  @IsBoolean()
  hasGoodSanitaryCondition!: boolean;

  @IsString()
  @IsNotEmpty()
  driver!: string;

  @IsInt()
  userId!: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductItemDto)
  products!: ProductItemDto[];

  // Código do cliente (BigInt no banco, aceitamos number aqui)
  @IsInt()
  customerCode!: number;
  // Somente 'SIF' | 'SISBI' ou ausente (NULL)
  @IsOptional()
  @IsString()
  @IsIn(["SIF", "SISBI"])
  sifOrSisbi?: string;

  @Type(() => Number)
  @IsNumber()
  productTemperature!: number;

  @IsDateString()
  fillingDate!: string;

  // Removido: shipmentDate não existe mais no schema

  @IsOptional()
  @IsString()
  deliverVehicle?: string;
}