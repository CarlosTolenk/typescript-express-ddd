import { OrderRepository } from '../../domain/OrderRepository';
import { Order } from '../../domain/Order';
import { UseCase } from '../../../shared/domain/useCase';

export class GetAllOrders implements UseCase<Order[]> {
  private orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  public run(): Promise<Order[]> {
    try {
      return this.orderRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
