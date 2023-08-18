import { Request, Response } from 'express';
import { createMock } from 'ts-auto-mock';

import { ServerLogger } from '../../../../../src/modules/shared/infrastructure/logger';
import { GetLivenessController } from '../../../../../src/modules/health/infrastructure/http/controllers/GetLiveness';

describe('GetLivenessController', () => {
  it('should invoke Liveness Controller', async () => {
    // given
    const loggerMock = createMock<ServerLogger>();
    const mockedRequest = {} as Request;
    const mockedResponse = createMock<Response>({
      json: jest.fn()
    });
    const mockedNext = jest.fn();
    const getLivenessController = new GetLivenessController(loggerMock);

    // when
    await getLivenessController.invoke(mockedRequest, mockedResponse, mockedNext);

    // then
    expect(mockedResponse.json).toHaveBeenCalledTimes(1);
  });
});
