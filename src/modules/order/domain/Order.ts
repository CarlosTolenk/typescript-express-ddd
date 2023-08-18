import {AggregateRoot} from "../../shared/domain/AggregateRoot";

export enum StatusEnum {
    INITIAL = 1, CANCELLED = 2, FINISHED
}

export class Order extends AggregateRoot {
    id: string;
    status: StatusEnum

    toPrimitives(): any {
    }

}
