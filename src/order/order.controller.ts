import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('orders')
  async createOrder() {

    // Chama o serviço para publicar o evento
    return this.orderService.createOrder();
  }

  @Post('delivery')
  async deliveryOrder() {

    // Chama o serviço para publicar o evento
    return this.orderService.deliveryOrder();
  }
}
