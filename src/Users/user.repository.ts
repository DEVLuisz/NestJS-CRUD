import { Injectable } from "@nestjs/common/decorators";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
  private usuarios: UserEntity[] = [];

  async salvar(usuario: UserEntity) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async existWithEmail (email: string) { 

    const possivelUsuario = this.usuarios.find(
      usuario => usuario.email === email
      );
      return possivelUsuario !== undefined;
    }

    private buscaPorId(id: string) {
      const possivelUsuario = this.usuarios.find(
        usuarioSalvo => usuarioSalvo.id === id
      );

      if(!possivelUsuario) {
        throw new Error('Usuário não existe!');
      }

      return possivelUsuario;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<UserEntity>) {
      const usuario = this.buscaPorId(id);

      Object.entries(dadosDeAtualizacao).forEach(([key, value]) => {
        if(key === 'id') {
          return;
        }

        usuario[key] = value;
      });

      return usuario;
    }

    async remove(id: string) {
      const usuario = this.buscaPorId(id);
      this.usuarios = this.usuarios.filter(
        usuarioSalvo => usuarioSalvo.id !== id
      );

      return usuario;
    }
}
