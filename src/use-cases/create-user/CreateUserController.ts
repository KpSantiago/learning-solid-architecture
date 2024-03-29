import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    /** 
     * S principle
     * O CreateUserController será respnsável por receber as Requisições HTTPS e chamar 
     * o nosso caso de uso que vai responsável porcriar o usário e enviar o email  
     *  
     * D principle
     * A classe não usa direamente a classe CreateUserUseCase, mas a instancia e a usa
     */
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    public async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        try {
            await this.createUserUseCase.execute({ name, email, password })

            return res.status(200).json({
                message: 'User created with sucess'
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message || "Unexpected error."
            })
        }
    }
}