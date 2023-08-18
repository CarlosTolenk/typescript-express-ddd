import {asClass, asFunction} from "awilix";

// Routes
import {HealthRouter} from "../http/routes";

// Controllers
import {GetHealthCheckController} from "../http/controllers/GetHealthCheck";
import {GetLivenessController} from "../http/controllers/GetLiveness";

// Infrastructure
import {TypeOrmHealthRepository} from "../persistence/TypeOrmHealthRepository";

// UseCases
import {GetHealthCheck} from "../../application/useCases/GetHealthCheck";

export const HealthModule = {
    healthRouter: asFunction(HealthRouter).singleton(),
    getHealthController: asClass(GetHealthCheckController).singleton(),
    getLivenessController: asClass(GetLivenessController).singleton(),
    getHealthCheck: asClass(GetHealthCheck).singleton(),
    healthRepository: asClass(TypeOrmHealthRepository).singleton(),
}
