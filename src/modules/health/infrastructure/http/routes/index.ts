import { Router } from 'express';

export const HealthRouter = (getHealthController, getLivenessController): Router => {
  const healthRouter = Router();

  healthRouter.get('/health', getHealthController.invoke.bind(getHealthController));
  healthRouter.get('/liveness', getLivenessController.invoke.bind(getLivenessController));

  return healthRouter;
};
