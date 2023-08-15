import {Router} from "express";

export const ApiRouter = (): Router => {
    const apiRouter = Router();
    const v1Router = Router();

    apiRouter.use('/api/v1', v1Router);
    return apiRouter;
}
