import {IController} from "../../../../shared/infrastructure/express/IController";
import {ServerLogger} from "../../../../shared/infrastructure/logger";
import {ErrorHandler} from "../../../../shared/domain/ErrorHandler";
import StatusCode from "http-status-codes";
import {NextFunction, Request, Response} from "express";

export class GetLivenessController implements IController {
    constructor(private logger: ServerLogger) {
    }

    public async invoke(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            this.logger.info('Try Invoke', {controller: GetLivenessController.name});
            return res.json({status: "OK Liveness"})
        } catch (error) {
            next(new ErrorHandler('Error liveness check', StatusCode.BAD_GATEWAY));
        }
    }
}
