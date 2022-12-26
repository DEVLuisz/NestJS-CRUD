"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.usuarios = [];
    }
    async salvar(usuario) {
        this.usuarios.push(usuario);
    }
    async listar() {
        return this.usuarios;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map