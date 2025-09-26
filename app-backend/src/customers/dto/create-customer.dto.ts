import { IsString, IsEmail, IsOptional, Length, Matches, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(14, 14, { message: 'CNPJ deve ter 14 dígitos' })
  @Matches(/^\d+$/, { message: 'CNPJ deve conter apenas números' })
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  identificationCode: string;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @IsNotEmpty()
  @IsString()
  paymentTern: string;          // Prazo de pagamento

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;                // Estado

  @IsOptional()
  @IsString()
  legalName: string;            // Razão Social

  @IsNotEmpty()
  @IsString()
  stateRegistration: string;    // Inscrição Estadual
}
