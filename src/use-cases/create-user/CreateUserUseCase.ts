import { User } from "../../entities/User";
import { EmailProvider } from "../../providers/EmailProvider";
import { UserRepository } from "../../repositories/UserRepository";
import { CreaetUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    /** 
     * S principle
     * O CreateUserUseCase.ts é o arquivo que será responsável por implementarnossa regra de negócio.
     * Ele será responsável por criar o usário e  enviar o email para  o usuário
     * 
     * D principle
     * A classe não usa direamente as classes UseRepository e EmailProvider, mas a instancia e a usa
    */
    constructor(
        private userRepository: UserRepository,
        private emailProvider: EmailProvider
    ) { }

    public async execute(data: CreaetUserDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = new User(data);

        await this.userRepository.save(user);

        this.emailProvider.sendEmail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Equipe x',
                email: 'equipex@gmail.com'
            },
            subject: 'Seja bem vindo à plataforma x',
            body: '<p>Você já pode fazer login em nossa plataforma!</p>'
        });
    }
}