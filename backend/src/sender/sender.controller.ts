import { Body, Controller, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { IExt } from './interfaces/external.interface';
import { SenderService } from './sender.service';

@Controller('sender')
export class SendersController {
  constructor(
    private senderService: SenderService,
  ) {}
  
  @Post()
  async extSend(
    @Body() body: IExt,
    @Req() req
  ) {
    if (req.headers.authorization && req.headers.authorization.replace('Bearer ', '') === '7fZKU#Qy9gZ!_put') {
      return await this.senderService.extSend(body);
    } else {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Доступ к этому API по ключу',
      }, HttpStatus.FORBIDDEN);
    }
  }
}
