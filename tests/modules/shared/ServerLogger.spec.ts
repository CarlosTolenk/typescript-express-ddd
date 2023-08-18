import { mockedWinstonLogger as mockedLogger } from '../../__mocks__/winston';
import { ServerLogger } from '../../../src/modules/shared/infrastructure/logger';
import { config } from '../../../src/config';

describe('ServerLogger', () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.clearAllMocks());

  const logText = 'some_log_text';
  const metadata = { action: 'some_action' };

  it('should execute debug function to register a log', () => {
    // given
    const serverLogger = new ServerLogger(config);

    // when
    serverLogger.debug(logText, metadata);

    // then
    expect(mockedLogger.debug).toHaveBeenCalledWith(logText, metadata);
  });

  it('should execute info function to register a log', () => {
    // given
    const serverLogger = new ServerLogger(config);

    // when
    serverLogger.info(logText, metadata);

    // then
    expect(mockedLogger.info).toHaveBeenCalledWith(logText, metadata);
  });

  it('should execute error function to register a log', () => {
    // given
    const serverLogger = new ServerLogger(config);
    // when
    serverLogger.error(logText, metadata);

    // then
    expect(mockedLogger.error).toHaveBeenCalledWith(logText, metadata);
  });

  it('should execute warn function to register a log', () => {
    // given
    const serverLogger = new ServerLogger(config);
    // when
    serverLogger.warning(logText, metadata);

    // then
    expect(mockedLogger.warn).toHaveBeenCalledWith(logText, metadata);
  });

  it('should execute crit function to register a log', () => {
    // given
    const serverLogger = new ServerLogger(config);
    // when
    serverLogger.critical(logText, metadata);

    // then
    expect(mockedLogger.crit).toHaveBeenCalledWith(logText, metadata);
  });
});
