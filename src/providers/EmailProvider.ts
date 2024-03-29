interface IAdress {
    email: string;
    name: string;
}

export interface IMessage {
    to: IAdress;
    from: IAdress;
    subject: string;
    body: string;
}

/**
 * L  principle
 * Aqui é onde é aplicado o prinncipio que, minha classe não precisa saber qual dependencia ela vai utilizar
 * ela vai estar apenas se cominicando pela interface, pois facilmente eu posso facilmente mudar a dependencia 
 * encarregada  de enviar os e-maisl que a classe e as regras de negocios continuaão as mesmas
 */
export abstract class EmailProvider {
    public abstract sendEmail(message: IMessage): Promise<void>
}