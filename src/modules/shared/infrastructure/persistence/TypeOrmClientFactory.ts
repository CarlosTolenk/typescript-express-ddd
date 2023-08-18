import {createConnection, DataSource} from 'typeorm';
import path from "path";
import {glob} from "glob";

import {Configuration} from "../../../../config";
import {TypeOrmConfigFactory} from "./TypeOrmConfigFactory";

export const TypeOrmClientFactory = async (config: Configuration): Promise<DataSource> => {
    const entities = glob.sync(path.join(__dirname, "../../../../modules/*/infrastructure/persistence/*.entity.ts"));
    const configuration = TypeOrmConfigFactory.createConfig(config);
    console.log(configuration.target)
    try {
        if (configuration.target !== 'production') {
            return await createConnection({
                type: "sqlite", database: "./database.sqlite", entities: entities, synchronize: false, logging: true
            });
        }

        return await createConnection({
            type: "postgres",
            database: configuration.database,
            host: configuration.host,
            port: configuration.port,
            username: configuration.username,
            password: configuration.password,
            entities: entities,
            synchronize: false,
            logging: true
        });
    } catch (error) {
        throw error;
    }
}


