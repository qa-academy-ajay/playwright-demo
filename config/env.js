import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.ENV || 'dev'}`
});

export const env = {
  baseURL: process.env.BASE_URL,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  apiURL: process.env.API_URL
};