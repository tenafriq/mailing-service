import { MailerModule } from "@nestjs-modules/mailer"
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter"
import { Module } from "@nestjs/common"
import { MailService } from "./mail.service"
import { join } from "path"
import { MailController } from "./mail.controller"

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.example.com",
        port: 587,
        secure: false,
        auth: {
          user: "user@example.com",
          pass: "topsecret",
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
      template: {
        dir: join(__dirname, "templates"),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
  controllers: [MailController],
})
export class MailModule {}
