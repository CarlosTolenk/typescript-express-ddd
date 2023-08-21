import * as express from 'express';
import { mock } from 'jest-mock-extended';
import { ServerLogger } from '../../../src/modules/shared/infrastructure/logger';
import { ErrorMiddleware } from '../../../src/modules/shared/infrastructure/express/ErrorMiddleware';
import { BaseRouter } from '../../../src/modules/shared/infrastructure/BaseRouter';

describe('Router', () => {
  it('should return router', () => {
    // given

    const healthRouter = express.Router();
    const orderRouter = express.Router();
    const mockedServerLogger = mock<ServerLogger>();
    const errorMiddleware = new ErrorMiddleware(mockedServerLogger);

    // when
    const router = BaseRouter(healthRouter, orderRouter, errorMiddleware);

    // then
    expect(router).toBeDefined();
  });
});
