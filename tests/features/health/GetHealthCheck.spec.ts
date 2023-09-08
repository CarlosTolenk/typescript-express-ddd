// @ts-ignore
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

import { Server } from '../../../src/modules/shared/infrastructure/Server';
import { Container } from '../../../src/Container';

describe('GetHealthCheck', () => {
  const container = new Container();
  const server = container.invoke().resolve<Server>('server');

  it('should', async () => {
    const app = server.invoke();
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(StatusCodes.OK);
  });
});
