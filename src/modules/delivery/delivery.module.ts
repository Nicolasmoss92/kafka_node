import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.integration';
import { DeliveryController } from './delivery.controller';

@Module({
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
