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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const CriaUsuario_dto_1 = require("./DTO/CriaUsuario.dto");
const user_entity_1 = require("./user.entity");
const user_repository_1 = require("./user.repository");
const uuid_1 = require("uuid");
const UsersList_dto_1 = require("./DTO/UsersList.dto");
const UpddateUser_dto_1 = require("./DTO/UpddateUser.dto");
let UserController = class UserController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async criaUsuario(dadosDoUsuario) {
        const usuarioEntity = new user_entity_1.UserEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = (0, uuid_1.v4)();
        this.usuarioRepository.salvar(usuarioEntity);
        return {
            usuario: new UsersList_dto_1.UsersListDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'Usuário criado com sucesso!'
        };
    }
    async listaUsers() {
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuarioLista = usuariosSalvos.map(usuario => new UsersList_dto_1.UsersListDTO(usuario.id, usuario.nome));
        return usuarioLista;
    }
    async atualizarUsario(id, novosDados) {
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            message: 'Dados do usuario atualizados com sucesso!'
        };
    }
    async removeUsuario(id) {
        const usuarioRemovido = await this.usuarioRepository.remove(id);
        return {
            usuario: usuarioRemovido,
            message: 'Usuário removido com sucesso!'
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriaUsuario_dto_1.CriaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "criaUsuario", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listaUsers", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpddateUser_dto_1.UpdateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "atualizarUsario", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeUsuario", null);
UserController = __decorate([
    (0, common_1.Controller)('/usuarios'),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map