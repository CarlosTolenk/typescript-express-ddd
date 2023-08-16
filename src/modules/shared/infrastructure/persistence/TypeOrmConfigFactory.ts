import {TypeOrmConfig} from "./TypeOrmConfig";


export class TypeOrmConfigFactory {
    static createConfig(): TypeOrmConfig {
        return {
            host: '',
            username: '',
            password: '',
            port: 5000,
            database: ''
        }
    }
}
