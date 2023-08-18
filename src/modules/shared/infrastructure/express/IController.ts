import { NextFunction, Request, Response } from 'express';

export interface IController {
  invoke(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
