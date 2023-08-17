import {createConnection, DataSource} from 'typeorm';
import path from "path";
import {glob} from "glob";

import {Configuration} from "../../../../config";
import {TypeOrmConfigFactory} from "./TypeOrmConfigFactory";

export const TypeOrmClientFactory = async (config: Configuration): Promise<DataSource> => {
    const entities = glob.sync(path.join(__dirname, "../../../../modules/*/infrastructure/persistence/*.entity.ts"));
    const configuration = TypeOrmConfigFactory.createConfig(config);
    try {
        if (configuration.target !== 'production') {
            return await createConnection({
                type: "sqlite", database: "./database.sqlite", entities: entities, synchronize: false, logging: true
            });
        }

        return await createConnection({
            type: "mysql",
            database: configuration.database,
            port: configuration.port,
            entities: entities,
            synchronize: false,
            logging: true
        });
    } catch (error) {
        throw error;
    }
}


