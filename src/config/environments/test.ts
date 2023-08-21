import { IConfiguration } from '../';

const TEST: IConfiguration = {
  NODE_ENV: 'test',
  PORT: 3000,
  APP_NAME: 'express-ts-test-ddd',
  APP_LOG_LEVEL: 'debug',
  DATABASE_APP_CONTEXT: 'wallet-test',
  DATABASE_APP_PORT: 5432,
  DATABASE_APP_PASSWORD: '',
  DATABASE_APP_USERNAME: '',
  DATABASE_APP_HOST: ''
};

export default TEST;
