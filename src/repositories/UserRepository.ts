import { User } from "../entities/User";

/**
 * L  principle
 * Aqui é onde é aplicado o prinncipio que, minha classe não precisa saber qual dependencia ela vai utilizar
 * ela vai estar apenas se cominicando pela interface, pois eu posso utilizar qualquer outro banco de dados
 * e toda a regra de nogocio continuará a mesma
 */
export abstract class UserRepository {
    public abstract findByEmail(email: string): Promise<User>;
    public abstract save(user: User): Promise<void>;
}