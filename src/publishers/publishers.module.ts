import { Module } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { PublishersController } from './publishers.controller';

@Module({
  providers: [PublishersService],
  controllers: [PublishersController]
})
export class PublishersModule {}
