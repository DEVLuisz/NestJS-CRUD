"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDTO = void 0;
const class_validator_1 = require("class-validator");
const unique_email_validator_1 = require("../Validator/unique-email.validator");
class UpdateUserDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: 'O E-mail informado é invalido!' }),
    (0, unique_email_validator_1.EmailUnico)({ message: 'Já existe um usuário com este E-mail!' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: 'A senha precisa ter pelo menos 6 carateres!' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "senha", void 0);
exports.UpdateUserDTO = UpdateUserDTO;
//# sourceMappingURL=UpddateUser.dto.js.map