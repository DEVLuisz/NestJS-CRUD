import { IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { EmailUnico } from "../Validator/unique-email.validator";

export class UpdateUserDTO {

  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail( undefined, { message: 'O E-mail informado é invalido!' })
  @EmailUnico({ message: 'Já existe um usuário com este E-mail!'})
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 carateres!'})
  @IsOptional()
  senha: string;
}