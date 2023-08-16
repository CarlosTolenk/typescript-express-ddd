export interface ILogger {
  debug(message: string, metadata = {}): void;
  info(message: string, metadata = {}): void;
  error(message: string, metadata = {}): void;
  warning(message: string, metadata = {}): void;
  critical(message: string, metadata = {}): void;
}
