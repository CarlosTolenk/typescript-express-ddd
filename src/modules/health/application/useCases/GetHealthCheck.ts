import { HealthRepository } from '../../domain/HealthRepository';
import { Health } from '../../domain/Health';
import { UseCase } from '../../../shared/domain/useCase';

export class GetHealthCheck implements UseCase<Health> {
  private healthRepository: HealthRepository;

  constructor(healthRepository: HealthRepository) {
    this.healthRepository = healthRepository;
  }

  public run(): Promise<Health> {
    try {
      return this.healthRepository.check();
    } catch (error) {
      throw error;
    }
  }
}
