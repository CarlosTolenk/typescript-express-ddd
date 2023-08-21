import { IConfiguration } from '../';

const Production: IConfiguration = {
  NODE_ENV: process.env.NODE_ENV || 'production',
  PORT: +(process.env.PORT || 3000),
  APP_NAME: process.env.APP_NAME || 'typescript-express-ddd',
  APP_LOG_LEVEL: process.env.APP_LOG_LEVEL || 'info',
  DATABASE_APP_CONTEXT: 'wallet-production',
  DATABASE_APP_PORT: 5432,
  DATABASE_APP_PASSWORD: '',
  DATABASE_APP_USERNAME: '',
  DATABASE_APP_HOST: ''
};

export default Production;
