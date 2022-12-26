import { Body, Controller, Get, Post, Put, Param, Delete } from "@nestjs/common";
import { CriaUsuarioDTO } from "./DTO/CriaUsuario.dto";
import { UserEntity } from "./user.entity";
import { UserRepository } from "./user.repository";
import { v4 as uuid } from "uuid";
import { UsersListDTO } from "./DTO/UsersList.dto";
import { UpdateUserDTO } from "./DTO/UpddateUser.dto";

@Controller('/usuarios')

export class UserController {

  constructor (private usuarioRepository: UserRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UserEntity();
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity);
    return { 
      usuario: new UsersListDTO(usuarioEntity.id, usuarioEntity.nome),
      message: 'Usuário criado com sucesso!' 
    }
  }

  @Get()
  async listaUsers() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    const usuarioLista = usuariosSalvos.map(
      usuario => new UsersListDTO(
        usuario.id,
        usuario.nome
      )
    );
    return usuarioLista;
  }

  @Put('/:id')
  async atualizarUsario(@Param('id') id: string, @Body() novosDados: UpdateUserDTO) {

    const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

    return{
      usuario: usuarioAtualizado,
      message: 'Dados do usuario atualizados com sucesso!'
    }
  } 

  @Delete('/:id')
  async removeUsuario(@Param('id') id:string) {
    const usuarioRemovido = await this.usuarioRepository.remove(id);

    return {
      usuario: usuarioRemovido,
      message: 'Usuário removido com sucesso!'
    }
  }
}