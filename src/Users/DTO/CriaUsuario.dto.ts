import { IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { EmailUnico } from "../Validator/unique-email.validator";

export class CriaUsuarioDTO {

  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail( undefined, { message: 'O E-mail informado é invalido!' })
  @EmailUnico({ message: 'Já existe um usuário com este E-mail!'})
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 carateres!'})
  senha: string;
}