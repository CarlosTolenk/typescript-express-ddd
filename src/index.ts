import {Server} from "./modules/shared/infrastructure/Server";
import {Container} from "./modules/shared/infrastructure/Container";
import {Configuration} from "./config";

const container = new Container();
const server = container.invoke().resolve<Server>('server');
const config = container.invoke().resolve<Configuration>('config');

server
    .start()
    .then(async () => {
        console.log(`Environment: ${config.NODE_ENV}`);
        console.log(`Log level: ${config.APP_LOG_LEVEL}`);
    })
    .catch((err: Error) => {
        console.log(err);
        process.exit(1);
    });

