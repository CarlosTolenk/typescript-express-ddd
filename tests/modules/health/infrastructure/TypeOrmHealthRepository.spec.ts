import { HealthRepository } from '../../../../src/modules/health/domain/HealthRepository';
import { TypeOrmHealthRepository } from '../../../../src/modules/health/infrastructure/persistence/TypeOrmHealthRepository';
import { TypeOrmClientFactory } from '../../../../src/modules/shared/infrastructure/persistence/TypeOrmClientFactory';

import { config } from '../../../../src/config/index';
import { LoggerMock } from '../../shared/__mocks__/LoggerMock';

describe('TypeOrmHealthRepository', () => {
  let typeOrmHealthRepository: HealthRepository;
  let logger: LoggerMock;

  beforeEach(() => {
    logger = new LoggerMock();
    const client = TypeOrmClientFactory(config, logger);
    typeOrmHealthRepository = new TypeOrmHealthRepository(client);
  });

  it('should check client DB', async () => {
    await typeOrmHealthRepository.check();
  });
});
