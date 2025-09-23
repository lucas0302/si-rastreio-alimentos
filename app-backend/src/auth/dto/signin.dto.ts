import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SingInDto {
  @IsString()
  username: string

  @IsString()
  @MinLength(6, { message: "A senha deve ter pelomenos 6 digitos" })
  @IsNotEmpty()
  password: string

}