import { HealthRepository } from '../../domain/HealthRepository';
import { Health } from '../../domain/Health';
import { UseCase } from '../../../shared/domain/useCase';
import { ILogger } from '../../../shared/domain/ILogger';

export class GetHealthCheck implements UseCase<Health> {
  private healthRepository: HealthRepository;
  private logger: ILogger;

  constructor(healthRepository: HealthRepository, logger: ILogger) {
    this.healthRepository = healthRepository;
    this.logger = logger;
  }

  public run(): Promise<Health> {
    this.logger.info('Try health check', {});
    return this.healthRepository.check();
  }
}
