import { Injectable } from "@nestjs/common"
import { MailerService } from "@nestjs-modules/mailer"

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendUserConfirmation(user: any, token: string) {
    const url = `example.com/auth/confirm?token=${token}`

    await this.mailerService.sendMail({
      to: "dennisrkibet@gmail.com",
      subject: "Welcome to Our App! Confirm your Email",
      template: "./confirmation",
      context: {
        name: "dennisrkibet@gmail.com",
        url,
      },
    })
  }
}
