import { Request, Response } from 'express';
import { mock } from 'jest-mock-extended';

import { GetHealthCheckController } from '../../../../../src/modules/health/infrastructure/http/controllers/GetHealthCheck';
import { GetHealthCheck } from '../../../../../src/modules/health/application/useCases/GetHealthCheck';
import { ServerLogger } from '../../../../../src/modules/shared/infrastructure/logger';
import { ErrorHandler } from '../../../../../src/modules/shared/domain/ErrorHandler';
import StatusCode from 'http-status-codes';

describe('GetHealthCheckController', () => {
  it('should invoke HealthCheck Controller', async () => {
    // given
    const loggerMock = mock<ServerLogger>();
    const mockedHealthCheckService = mock<GetHealthCheck>({
      run: jest.fn().mockResolvedValueOnce({})
    });
    const mockedRequest = {} as Request;
    const mockedResponse = mock<Response>({
      json: jest.fn()
    });
    const mockedNext = jest.fn();
    const healthCheckController = new GetHealthCheckController(
      loggerMock,
      mockedHealthCheckService
    );

    // when
    await healthCheckController.invoke(mockedRequest, mockedResponse, mockedNext);

    // then
    expect(mockedHealthCheckService.run).toHaveBeenCalledTimes(1);
    expect(mockedResponse.json).toHaveBeenCalledTimes(1);
  });

  it('should invoke HealthCheck Controller when error', async () => {
    // given
    const loggerMock = mock<ServerLogger>();
    const mockedHealthCheckService = mock<GetHealthCheck>({
      run: jest.fn().mockRejectedValueOnce(new Error('Error'))
    });
    const mockedRequest = {} as Request;
    const mockedResponse = mock<Response>({
      json: jest.fn()
    });
    const mockedNext = jest.fn();
    const healthCheckController = new GetHealthCheckController(
      loggerMock,
      mockedHealthCheckService
    );

    // when
    await healthCheckController.invoke(mockedRequest, mockedResponse, mockedNext);

    // then
    expect(mockedHealthCheckService.run).toHaveBeenCalledTimes(1);
    expect(mockedNext).toHaveBeenCalledTimes(1);
    expect(mockedNext).toBeCalledWith(new ErrorHandler('Error', StatusCode.INTERNAL_SERVER_ERROR));
  });
});
