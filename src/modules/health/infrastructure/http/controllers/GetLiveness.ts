import { NextFunction, Request, Response } from 'express';

import { IController } from '../../../../shared/infrastructure/express/IController';
import { ILogger } from '../../../../shared/domain/ILogger';

export class GetLivenessController implements IController {
  constructor(private logger: ILogger) {}

  public async invoke(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    this.logger.info('Try Invoke', { controller: GetLivenessController.name });
    return res.json({ status: 'OK Liveness' });
  }
}
