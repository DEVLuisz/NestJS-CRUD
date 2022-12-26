import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";
export declare class UniqueEmail implements ValidatorConstraintInterface {
    private usuarioRepository;
    constructor(usuarioRepository: UserRepository);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const EmailUnico: (opcoesDeValidacao: ValidationOptions) => (object: Object, props: string) => void;
