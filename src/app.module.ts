import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
      OrderModule,
      ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env',
    }),
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
