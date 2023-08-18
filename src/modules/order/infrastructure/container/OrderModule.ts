import { asClass, asFunction } from 'awilix';
import { TypeOrmOrderRepository } from '../persistence/TypeOrmOrderRepository';
import { OrderRouter } from '../http/routes';
import { GetAllOrdersController } from '../http/controllers/GetAllOrders';
import { GetAllOrders } from '../../application/useCases/GetAllOrders';

export const OrderModule = {
  orderRouter: asFunction(OrderRouter).singleton(),
  orderRepository: asClass(TypeOrmOrderRepository).singleton(),
  getAllOrdersController: asClass(GetAllOrdersController).singleton(),
  getAllOrders: asClass(GetAllOrders).singleton()
};
