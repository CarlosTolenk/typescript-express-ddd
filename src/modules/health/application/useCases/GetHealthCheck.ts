import { HealthRepository } from '../../domain/HealthRepository';
import { Health } from '../../domain/Health';

export class GetHealthCheck {
  private healthRepository: HealthRepository;

  constructor(healthRepository: HealthRepository) {
    this.healthRepository = healthRepository;
  }

  public invoke(): Promise<Health> {
    try {
      return this.healthRepository.check();
    } catch (error) {
      throw error;
    }
  }
}
