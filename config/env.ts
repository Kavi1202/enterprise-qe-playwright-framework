import dotenv from 'dotenv';

const environment = process.env.TEST_ENV || 'qa';

const result = dotenv.config({
  path: `.env.${environment}`
});

if (result.error) {
  throw result.error;
}

export const ENV = {
  baseUrl: process.env.BASE_URL ?? '',
  environment: process.env.ENVIRONMENT ?? '',
  username: process.env.SAUCE_USERNAME ?? '',
  password: process.env.SAUCE_PASSWORD ?? ''
};

console.log('Loaded Environment:', ENV.environment);
console.log('Loaded Base URL:', ENV.baseUrl);
console.log('Loaded Username:', ENV.username);
console.log('Loaded Password:', ENV.password);