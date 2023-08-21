import { AggregateRoot } from '../../shared/domain/AggregateRoot';

export enum StatusEnum {
  INITIAL = 1,
  CANCELLED = 2,
  FINISHED
}
interface IOrderPrimitive {
  id: string;
  status: string;
}
export class Order extends AggregateRoot<IOrderPrimitive> {
  id: string;
  status: StatusEnum;

  toPrimitives(): IOrderPrimitive {
    return {
      id: this.id,
      status: this.status.toString()
    };
  }
}
