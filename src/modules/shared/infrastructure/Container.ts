import {asClass, asFunction, asValue, AwilixContainer, createContainer, InjectionMode} from 'awilix';
import {Server} from './Server';
import {Router} from './Router';


//Shared infrastructure implementations
import {ErrorMiddleware} from './express/ErrorMiddleware';
import {ApiRouter} from "./express/ApiRouter";
import {ServerLogger} from './logger';
import {config} from '../../../config';

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
            })
            .register({
                errorMiddleware: asClass(ErrorMiddleware).singleton(), apiRouter: asFunction(ApiRouter).singleton()
            })
    }

    public invoke(): AwilixContainer {
        return this.container;
    }
}
