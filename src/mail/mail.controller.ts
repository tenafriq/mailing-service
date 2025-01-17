import { Controller, Post, Body } from "@nestjs/common"
import { MailService } from "./mail.service"

@Controller()
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post("register")
  async register(@Body() createUserDto: any) {
    await this.mailService.sendUserConfirmation(createUserDto, "some-token")
  }
}
