import { createLogger, format, transports, Logger } from 'winston';
import appRoot from 'app-root-path';
import path from 'path';
import fs from 'fs';

import { ILogger } from '../../domain/ILogger';
import { IConfiguration } from '../../../../config';

export class ServerLogger implements ILogger {
  private logger: Logger;
  private readonly logsDirectory: string;

  constructor(private config: IConfiguration) {
    this.logsDirectory = path.resolve(`${appRoot}`, 'logs');
    fs.existsSync(this.logsDirectory) || fs.mkdirSync(this.logsDirectory);

    const options = {
      infofile: {
        level: 'info',
        filename: path.resolve(this.logsDirectory, 'info.log'),
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5
      },
      errorfile: {
        level: 'error',
        filename: path.resolve(this.logsDirectory, 'error.log'),
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5
      }
    };

    const loggerTransports = {
      console: new transports.Console({
        format: format.combine(format.colorize(), format.simple())
      }),
      info: new transports.File(options.infofile),
      error: new transports.File(options.errorfile)
    };

    this.logger = createLogger({
      level: this.config.APP_LOG_LEVEL || 'info',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
      ),
      transports: [loggerTransports.console, loggerTransports.info, loggerTransports.error],
      exitOnError: false
    });
  }

  public debug(message: string, metadata = {}): void {
    this.logger.debug(message, metadata);
  }

  public info(message: string, metadata = {}): void {
    this.logger.info(message, metadata);
  }

  public error(message: string, metadata = {}): void {
    this.logger.error(message, metadata);
  }

  public warning(message: string, metadata = {}): void {
    this.logger.warn(message, metadata);
  }

  public critical(message: string, metadata = {}): void {
    this.logger.crit(message, metadata);
  }
}
