import {asClass, asFunction, asValue, AwilixContainer, createContainer, InjectionMode} from 'awilix';
import {Server} from './modules/shared/infrastructure/Server';
import {Router} from './modules/shared/infrastructure/Router';


//Shared infrastructure implementations
import {ErrorMiddleware} from './modules/shared/infrastructure/express/ErrorMiddleware';
import {ServerLogger} from './modules/shared/infrastructure/logger';
import {TypeOrmClientFactory} from "./modules/shared/infrastructure/persistence/TypeOrmClientFactory";


// Configuration
import {config} from './config';

// Modules infrastructure implementations
import {ModuleHealth} from "./modules/health/infrastructure/container/ModuleHealth";

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
                //core components
                server: asClass(Server).singleton(),
                config: asValue(config),
                router: asFunction(Router).singleton(),
                logger: asClass(ServerLogger).singleton(),
                _clientFactoryDB: asFunction(TypeOrmClientFactory).singleton(),
            })
            .register({
                errorMiddleware: asClass(ErrorMiddleware).singleton(),
            })
            .register(ModuleHealth)
    }

    public invoke(): AwilixContainer {
        return this.container;
    }
}
