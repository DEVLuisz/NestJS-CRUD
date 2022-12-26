import { CriaUsuarioDTO } from "./DTO/CriaUsuario.dto";
import { UserEntity } from "./user.entity";
import { UserRepository } from "./user.repository";
import { UsersListDTO } from "./DTO/UsersList.dto";
import { UpdateUserDTO } from "./DTO/UpddateUser.dto";
export declare class UserController {
    private usuarioRepository;
    constructor(usuarioRepository: UserRepository);
    criaUsuario(dadosDoUsuario: CriaUsuarioDTO): Promise<{
        usuario: UsersListDTO;
        message: string;
    }>;
    listaUsers(): Promise<UsersListDTO[]>;
    atualizarUsario(id: string, novosDados: UpdateUserDTO): Promise<{
        usuario: UserEntity;
        message: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: UserEntity;
        message: string;
    }>;
}
