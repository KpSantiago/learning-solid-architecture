import { EmailProvider, IMessage } from "../EmailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// Email dependency
export class MailtrapRepository implements EmailProvider {
    private transport: Mail;
    constructor() {
        this.transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "2ced0e40d4c807",
                pass: "20b2eae14cf5df"
            }
        });
    }
    public async sendEmail(message: IMessage): Promise<void> {
        this.transport.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        });
    }
}