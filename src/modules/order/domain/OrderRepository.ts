import {Order} from "./Order";

export interface OrderRepository {
    getAll(): Promise<Order[]>
}
