import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { KafkaClientModule } from 'src/kafka/kafka-client-module';

@Module({
  imports: [KafkaClientModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
