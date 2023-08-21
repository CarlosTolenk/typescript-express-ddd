import { EntitySchema } from 'typeorm';
import { Order } from '../../domain/Order';
import { StatusEnum } from '../../domain/OrderStatus';

export const OrderEntity = new EntitySchema<Order>({
  name: 'Order',
  tableName: 'orders',
  target: Order,
  columns: {
    id: {
      type: String,
      primary: true
    },
    status: {
      type: String,
      enum: StatusEnum,
      default: StatusEnum.INITIAL
    }
  }
});
