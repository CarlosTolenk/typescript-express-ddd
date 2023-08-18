import { EntitySchema } from 'typeorm';
import { Order, StatusEnum } from '../../domain/Order';

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
