import { Injectable, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) { }

  // Método para publicar um evento no Kafka
  async createOrder() {
    const eventOrder = {
      event: 'order.created',
    };

    // Publica a mensagem no tópico 'order-events'
    this.kafkaClient.emit('v1-order', eventOrder);
    console.log('Evento publicado no Kafka:', eventOrder);

    return { message: 'Pedido criado com sucesso!' };
  }

  async deliveryOrder() {
    const event = {
      event: 'order.ready_for_delivery',
    };

    // Publica a mensagem no tópico 'order-events'
    this.kafkaClient.emit('v1-order', event);
    console.log('Evento publicado no Kafka:', event);

    return { message: 'Entrega criado com sucesso!' };
  }
}