import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { OrderId } from './OrderId';
import { OrderStatus } from './OrderStatus';

interface IOrderPrimitive {
  id: string;
  status: string;
}
export class Order extends AggregateRoot<IOrderPrimitive> {
  id: OrderId;
  status: OrderStatus;

  constructor(id: OrderId, status: OrderStatus) {
    super();
    this.id = id;
    this.status = status;
  }

  static fromPrimitives(plainData: IOrderPrimitive): Order {
    const currentStatus = OrderStatus[plainData.status];
    return new Order(new OrderId(plainData.id), new OrderStatus(currentStatus));
  }

  toPrimitives(): IOrderPrimitive {
    return {
      id: this.id.value,
      status: this.status.value.toString()
    };
  }
}
