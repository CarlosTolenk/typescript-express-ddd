import {EntitySchema} from 'typeorm';

import {OrderRepository} from '../../domain/OrderRepository';
import {Order} from '../../domain/Order';

import {TypeOrmRepository} from '../../../shared/infrastructure/persistence/TypeOrmRepository';
import {OrderEntity} from './Order.entity';

export class TypeOrmOrderRepository extends TypeOrmRepository<Order> implements OrderRepository {
  protected entitySchema(): EntitySchema<Order> {
    return OrderEntity;
  }
  async getAll(): Promise<Order[]> {
    const repository = await this.repository();
    return await repository.find();
  }
}
