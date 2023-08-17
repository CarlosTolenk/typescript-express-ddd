import {Configuration} from "../../../../config";
import {TypeOrmConfig} from "./TypeOrmConfig";


export class TypeOrmConfigFactory {
    static createConfig(configuration: Configuration): TypeOrmConfig {
        return {
            type: "mysql",
            host: configuration.DATABASE_APP_HOST,
            username: configuration.DATABASE_APP_USERNAME,
            password: configuration.DATABASE_APP_PASSWORD,
            port: configuration.DATABASE_APP_PORT,
            database: configuration.DATABASE_APP_CONTEXT,
            target: 'production'
        }
    }
}
