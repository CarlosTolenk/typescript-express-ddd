import { OrderRepository } from '../../domain/OrderRepository';
import { Order } from '../../domain/Order';

export class GetAllOrders {
  private orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  public invoke(): Promise<Order[]> {
    try {
      return this.orderRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
