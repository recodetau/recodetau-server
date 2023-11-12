import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

import { User } from "@/users/models/users.model";

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendUserConfirmation(user: User, key: string) {
        const url = `https://${process.env.SERVER_HOST}/api/users/email-verify?key=${key}`;

        await this.mailerService.sendMail({
            to: user.email,
            subject: "Welcome to Nice App! Confirm your Email",
            template: "./transactional",
            context: {
                name: user.first_name,
                url,
            },
        });
    }
}
