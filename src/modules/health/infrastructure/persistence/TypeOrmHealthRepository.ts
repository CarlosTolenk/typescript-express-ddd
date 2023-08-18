import { EntitySchema } from 'typeorm';

import { Health } from '../../domain/Health';
import { HealthRepository } from '../../domain/HealthRepository';

import { TypeOrmRepository } from '../../../shared/infrastructure/persistence/TypeOrmRepository';

export class TypeOrmHealthRepository extends TypeOrmRepository<Health> implements HealthRepository {
  protected entitySchema(): EntitySchema<Health> {
    return null;
  }

  async check(): Promise<Health> {
    try {
      const queryRunner = await this.queryRunner();
      await queryRunner.query('SELECT 1 as health');
      return new Health();
    } catch (error) {
      throw error;
    }
  }
}
