import { Module } from '@nestjs/common';
import { SenderService } from './sender.service';
import { SendersController } from './sender.controller';

@Module({
  providers: [SenderService],
  controllers: [SendersController],
})
export class SendersModule {}
