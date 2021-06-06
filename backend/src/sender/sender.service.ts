import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { IExt } from './interfaces/external.interface';

import axios from 'axios';

@Injectable()
export class SenderService {

  private logger = new Logger('SendersService');

  private generateConfig(data): {} {
    return {
      method: 'post',
      url: 'https://subscriptions.rambler.ru/subscribe/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    }
  }

  async extSend(obj: IExt) {
    const dataForGetId = JSON.stringify({ key: "letidor_ru:supradyn", email: obj.email })
    try {
      const { data } = await axios(this.generateConfig(dataForGetId))
      return data;
    } catch (e) {
      throw new ConflictException({
        error: `Ошибка при получении ключа из api: ${e}`
      });
    }
  }

}
