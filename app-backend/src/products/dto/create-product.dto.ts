import { IsNotEmpty, IsString, MinLength, MaxLength, Matches, IsEnum, IsInt, IsDecimal, isNotEmpty } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    @IsInt()
    code: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    name: string;

    @IsNotEmpty()
    @IsDecimal()
    price: number;

    @IsNotEmpty()
    @IsDecimal()
    weight: number;

    @IsNotEmpty()
    @IsString()
    unit: string;

    @IsNotEmpty()
    @IsDecimal()
    expiration: string;

    @IsNotEmpty()
    @IsString()
    expiration_unit: string;
}
