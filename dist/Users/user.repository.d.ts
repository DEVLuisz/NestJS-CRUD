import { UserEntity } from "./user.entity";
export declare class UserRepository {
    private usuarios;
    salvar(usuario: UserEntity): Promise<void>;
    listar(): Promise<UserEntity[]>;
    existWithEmail(email: string): Promise<boolean>;
    private buscaPorId;
    atualiza(id: string, dadosDeAtualizacao: Partial<UserEntity>): Promise<UserEntity>;
    remove(id: string): Promise<UserEntity>;
}
