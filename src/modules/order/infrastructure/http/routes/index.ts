import { Router } from 'express';

export const OrderRouter = (getAllOrdersController): Router => {
  const orderRouter = Router();

  orderRouter.get('/orders', getAllOrdersController.invoke.bind(getAllOrdersController));

  return orderRouter;
};
