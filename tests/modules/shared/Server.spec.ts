import { Router as ExpressRouter } from 'express';
import { createMock } from 'ts-auto-mock';
import { ServerLogger } from '../../../src/modules/shared/infrastructure/logger';
import { Server } from '../../../src/modules/shared/infrastructure/Server';
import { config } from '../../../src/config';

describe('Server', () => {
  const mockedServerLogger = createMock<ServerLogger>();
  const server = new Server(ExpressRouter(), mockedServerLogger, config);

  it('should return an express Application instance', () => {
    // when
    const app = server.invoke();

    // then
    expect(app).toBeDefined();
  });

  it('should initiate and stop a server instance', async () => {
    // given
    jest.spyOn(server, 'start');
    jest.spyOn(server, 'stop');

    // when
    await server.start();
    await server.stop();

    // then
    expect(server.start).toHaveBeenCalledTimes(1);
    expect(server.stop).toHaveBeenCalledTimes(1);
  }, 1000);
});
