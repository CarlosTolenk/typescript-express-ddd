import { OrderRepository } from '../../domain/OrderRepository';
import { Order } from '../../domain/Order';
import { UseCase } from '../../../shared/domain/useCase';
import { ILogger } from '../../../shared/domain/ILogger';

export class GetAllOrders implements UseCase<Order[]> {
  private orderRepository: OrderRepository;
  private logger: ILogger;

  constructor(orderRepository: OrderRepository, logger: ILogger) {
    this.orderRepository = orderRepository;
    this.logger = logger;
  }

  public run(): Promise<Order[]> {
    try {
      return this.orderRepository.getAll();
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }
}
