import { IConfiguration } from '../../../../config';
import { TypeOrmConfig } from './TypeOrmConfig';

const environment = {
  production: 'production',
  test: 'test'
};

export class TypeOrmConfigFactory {
  static createConfig(configuration: IConfiguration): TypeOrmConfig {
    const currentTarget = environment[configuration.NODE_ENV] ?? 'development';
    return {
      host: configuration.DATABASE_APP_HOST,
      username: configuration.DATABASE_APP_USERNAME,
      password: configuration.DATABASE_APP_PASSWORD,
      port: configuration.DATABASE_APP_PORT,
      database: configuration.DATABASE_APP_CONTEXT,
      target: currentTarget
    };
  }
}
