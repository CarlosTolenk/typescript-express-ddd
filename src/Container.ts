import {
  asClass,
  asFunction,
  asValue,
  AwilixContainer,
  createContainer,
  InjectionMode
} from 'awilix';

//Shared infrastructure implementations
import { Server } from './modules/shared/infrastructure/Server';
import { BaseRouter } from './modules/shared/infrastructure/BaseRouter';
import { ErrorMiddleware } from './modules/shared/infrastructure/express/ErrorMiddleware';
import { ServerLogger } from './modules/shared/infrastructure/logger';
import { TypeOrmClientFactory } from './modules/shared/infrastructure/persistence/TypeOrmClientFactory';

// Configuration
import { config } from './config';

// Modules infrastructure implementations
import { HealthModule } from './modules/health/infrastructure/container/HealthModule';
import { OrderModule } from './modules/order/infrastructure/container/OrderModule';

export class Container {
  private readonly container: AwilixContainer;

  constructor() {
    this.container = createContainer({
      injectionMode: InjectionMode.CLASSIC
    });

    this.register();
  }

  public register(): void {
    this.container
      .register({
        server: asClass(Server).singleton(),
        config: asValue(config),
        router: asFunction(BaseRouter).singleton(),
        logger: asClass(ServerLogger).singleton(),
        clientFactoryDB: asFunction(TypeOrmClientFactory).singleton(),
        errorMiddleware: asClass(ErrorMiddleware).singleton()
      })
      .register(HealthModule)
      .register(OrderModule);
  }

  public invoke(): AwilixContainer {
    return this.container;
  }
}
