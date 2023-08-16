import * as dotenv from 'dotenv';

dotenv.config();

import PRODUCTION from './environments/production';
import DEVELOPMENT from './environments/development';
import TEST from './environments/test';

const { NODE_ENV } = process.env;

export type Configuration = {
  NODE_ENV: string;
  PORT: number;
  APP_NAME: string;
  APP_DATABASE_URL: string;
  APP_LOG_LEVEL: string;
  APP_CONTEXT_DATABASE: string
};

let currentConfig: Configuration = DEVELOPMENT;

switch (NODE_ENV) {
  case 'production':
    currentConfig = PRODUCTION;
    break;
  case 'test':
    currentConfig = TEST;
    break;
  default:
    currentConfig = DEVELOPMENT;
}

export { currentConfig as config };
