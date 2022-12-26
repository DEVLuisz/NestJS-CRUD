import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";

@Injectable()
@ValidatorConstraint({ async: true})
export class UniqueEmail implements ValidatorConstraintInterface {

  constructor(private usuarioRepository: UserRepository) {  }

  async validate(value: any, validationArguments?: ValidationArguments):Promise<boolean> { 
    const usuarioComEmailExiste = await this.usuarioRepository.existWithEmail(value);
    return !usuarioComEmailExiste;
    }
}

export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
  return ( object: Object, props: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: props,
      options: opcoesDeValidacao,
      constraints: [],
      validator: UniqueEmail
    });
  }
}