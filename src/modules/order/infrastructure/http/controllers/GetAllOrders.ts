import { NextFunction, Request, Response } from 'express';
import StatusCode from 'http-status-codes';

import { IController } from '../../../../shared/infrastructure/express/IController';
import { ErrorHandler } from '../../../../shared/domain/ErrorHandler';
import { ServerLogger } from '../../../../shared/infrastructure/logger';

// UseCases
import { GetAllOrders } from '../../../application/useCases/GetAllOrders';

export class GetAllOrdersController implements IController {
  constructor(private logger: ServerLogger, private getAllOrders: GetAllOrders) {}
  async invoke(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      this.logger.info('Try Invoke', { controller: GetAllOrdersController.name });
      const orders = await this.getAllOrders.run();
      return res.json({ orders: orders });
    } catch (error) {
      next(new ErrorHandler(error.message, StatusCode.INTERNAL_SERVER_ERROR));
    }
  }
}
