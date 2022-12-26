export declare class UserRepository {
    private usuarios;
    salvar(usuario: any): Promise<void>;
    listar(): Promise<any[]>;
}
