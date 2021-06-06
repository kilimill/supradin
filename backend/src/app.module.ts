import { Module } from '@nestjs/common';
import { SendersModule } from './sender/sender.module';

@Module({
  imports: [
    SendersModule,
  ],
})
export class AppModule {}
