import { Module } from '@nestjs/common';
import { NotificationService } from './notification.integration';
import { NotificationController } from './notification.controller';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
