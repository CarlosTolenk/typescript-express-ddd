import { HealthRepositoryMock } from '../__mocks__/HealthRepositoryMock';

import { GetHealthCheck } from '../../../../src/modules/health/application/useCases/GetHealthCheck';
import { LoggerMock } from '../../shared/__mocks__/LoggerMock';

describe('GetHealthCheck', () => {
  let repository: HealthRepositoryMock;
  let useCase: GetHealthCheck;
  let logger: LoggerMock;

  beforeEach(() => {
    logger = new LoggerMock();
    repository = new HealthRepositoryMock();
    useCase = new GetHealthCheck(repository, logger);
  });

  it('should check DB', async () => {
    await useCase.run();

    logger.assertLogsHaveCalled('Try health check', {});
    repository.assertCheckedStatus();
  });
});
