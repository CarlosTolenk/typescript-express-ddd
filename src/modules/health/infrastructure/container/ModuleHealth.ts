import {asClass, asFunction} from "awilix";

// Routes
import {HealthRouter} from "../http/routes";

// Controllers
import {GetHealthCheckController} from "../http/controllers/GetHealthCheck";
import {GetLivenessController} from "../http/controllers/GetLiveness";

export const ModuleHealth = {
    healthRouter: asFunction(HealthRouter).singleton(),
    getHealthController: asClass(GetHealthCheckController).singleton(),
    getLivenessController: asClass(GetLivenessController).singleton()
}
