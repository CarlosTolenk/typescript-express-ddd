import * as dotenv from 'dotenv';
import PRODUCTION from './environments/production';
import DEVELOPMENT from './environments/development';
import TEST from './environments/test';

dotenv.config();

const { NODE_ENV } = process.env;

export type Configuration = {
  NODE_ENV: string;
  PORT: number;
  APP_NAME: string;
  APP_LOG_LEVEL: string;
  DATABASE_APP_CONTEXT: string;
  DATABASE_APP_HOST: string;
  DATABASE_APP_PORT: number;
  DATABASE_APP_USERNAME: string;
  DATABASE_APP_PASSWORD: string;
};

const environment = {
  production: PRODUCTION,
  test: TEST
};
const currentConfig: Configuration = environment[NODE_ENV] ?? DEVELOPMENT;

export { currentConfig as config };
