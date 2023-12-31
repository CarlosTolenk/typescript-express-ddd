import { createConnection, DataSource } from 'typeorm';
import path from 'path';
import { glob } from 'glob';

import { IConfiguration } from '../../../../config';
import { TypeOrmConfigFactory } from './TypeOrmConfigFactory';
import { ILogger } from '../../domain/ILogger';

export const TypeOrmClientFactory = async (
  config: IConfiguration,
  logger: ILogger
): Promise<DataSource> => {
  const entities = glob.sync(
    path.join(__dirname, '../../../../modules/*/infrastructure/persistence/*.entity.ts')
  );
  const configuration = TypeOrmConfigFactory.createConfig(config);
  try {
    if (configuration.target !== 'production') {
      return await createConnection({
        type: 'sqlite',
        database: './database.sqlite',
        entities: entities,
        synchronize: true,
        logging: true
      });
    }

    return await createConnection({
      type: 'postgres',
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
    logger.error(error.message);
    throw error;
  }
};
