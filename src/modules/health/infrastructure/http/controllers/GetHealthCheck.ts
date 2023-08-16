import {NextFunction, Request, Response} from "express";
import StatusCode from 'http-status-codes'

import {ErrorHandler} from "../../../../shared/domain/ErrorHandler";
import {IController} from "../../../../shared/infrastructure/express/IController";
import {ServerLogger} from "../../../../shared/infrastructure/logger";

export class GetHealthCheckController implements IController {

    constructor(private logger: ServerLogger) {
    }

    public async invoke(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            this.logger.info('Try Invoke', {controller: GetHealthCheckController.name});
            return res.json({status: "OK Health"})
        } catch (error) {
            next(new ErrorHandler('Error health check', StatusCode.BAD_GATEWAY));
        }
    }

}
