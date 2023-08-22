import { ILogger } from '../../../../src/modules/shared/domain/ILogger';

export class LoggerMock implements ILogger {
  private mockLoggerApply = jest.fn();

  assertLogsHaveCalled(messageExpected: string, metadata = {}): void {
    expect(this.mockLoggerApply).toHaveBeenCalledWith(messageExpected, metadata);
  }

  critical(message: string, metadata?: {}): void {
    return this.mockLoggerApply(message, metadata);
  }

  debug(message: string, metadata?: {}): void {
    return this.mockLoggerApply(message, metadata);
  }

  error(message: string, metadata?: {}): void {
    return this.mockLoggerApply(message, metadata);
  }

  info(message: string, metadata?: {}): void {
    return this.mockLoggerApply(message, metadata);
  }

  warning(message: string, metadata?: {}): void {
    return this.mockLoggerApply(message, metadata);
  }
}
