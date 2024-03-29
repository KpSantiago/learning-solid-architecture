import { MailtrapRepository } from "../../providers/implementations/MailtrapRepository";
import { GhostUserRepository } from "../../repositories/implamentations/GhostUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

//  Aqui eu farei a conexão de todos os meus arquivos
const ghostRepository = new GhostUserRepository();
const mailtrapRepository = new MailtrapRepository();

const createUserUseCase = new CreateUserUseCase(
    ghostRepository,
    mailtrapRepository
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }