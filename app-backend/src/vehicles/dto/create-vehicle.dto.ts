import { IsString } from "class-validator";

export class CreateVehicleDto {
 
    @IsString()
    model: string;

    @IsString()
    plate: string;

    @IsString()
    category: string;

    @IsString()
    brand: string;

}