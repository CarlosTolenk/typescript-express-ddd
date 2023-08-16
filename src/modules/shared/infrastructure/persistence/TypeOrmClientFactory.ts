import {createConnection, DataSource, getConnection} from 'typeorm';
import path from "path";
import {glob} from "glob";
import {Configuration} from "../../../../config";

export const TypeOrmClientFactory = async (config: Configuration): Promise<DataSource> => {
    const entities = glob.sync(path.join(__dirname, "../../../../modules/*/infrastructure/persistence/*.entity.ts"));
    try {
        const connection = await createConnection({
            type: "sqlite",
            database: "./database.sqlite",
            entities: entities,
            synchronize: true,
            logging: true
        });

        return connection;
    } catch (error) {
        throw error;
    }
}


