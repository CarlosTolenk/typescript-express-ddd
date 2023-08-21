import { asClass, asFunction } from 'awilix';

// Uses cases
import { GetAllOrders } from '../../application/useCases/GetAllOrders';

// Infrastructure routes
import { OrderRouter } from '../http/routes';

// Infrastructure controllers
import { GetAllOrdersController } from '../http/controllers/GetAllOrders';

// Infrastructure persistence
import { TypeOrmOrderRepository } from '../persistence/TypeOrmOrderRepository';

export const OrderModule = {
  orderRouter: asFunction(OrderRouter).singleton(),
  orderRepository: asClass(TypeOrmOrderRepository).singleton(),
  getAllOrdersController: asClass(GetAllOrdersController).singleton(),
  getAllOrders: asClass(GetAllOrders).singleton()
};
