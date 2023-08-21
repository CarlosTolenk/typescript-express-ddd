import { IConfiguration } from '../';

const Development: IConfiguration = {
  NODE_ENV: 'development',
  PORT: +(process.env.PORT || 3000),
  APP_NAME: process.env.APP_NAME || 'typescript-express-ddd',
  APP_LOG_LEVEL: process.env.APP_LOG_LEVEL || 'debug',
  DATABASE_APP_CONTEXT: 'wallet-development',
  DATABASE_APP_PORT: 5432,
  DATABASE_APP_PASSWORD: '',
  DATABASE_APP_USERNAME: '',
  DATABASE_APP_HOST: ''
};

export default Development;
