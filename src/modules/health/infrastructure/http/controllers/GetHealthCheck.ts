import { NextFunction, Request, Response } from 'express';
import StatusCode from 'http-status-codes';

import { ErrorHandler } from '../../../../shared/domain/ErrorHandler';
import { IController } from '../../../../shared/infrastructure/express/IController';
import { GetHealthCheck } from '../../../application/useCases/GetHealthCheck';
import { ILogger } from '../../../../shared/domain/ILogger';

export class GetHealthCheckController implements IController {
  private logger: ILogger;
  private getHealthCheck: GetHealthCheck;

  constructor(logger: ILogger, getHealthCheck: GetHealthCheck) {
    this.logger = logger;
    this.getHealthCheck = getHealthCheck;
  }

  public async invoke(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      this.logger.info('Try Invoke', { controller: GetHealthCheckController.name });
      const health = await this.getHealthCheck.run();
      return res.json({ health });
    } catch (error) {
      next(new ErrorHandler(error.message, StatusCode.INTERNAL_SERVER_ERROR));
    }
  }
}
