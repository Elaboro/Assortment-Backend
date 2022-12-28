import dotenv from 'dotenv';

dotenv.config();

const app = {
  PORT: process.env.PORT,

  JWT_SECRET_KEY: `${process.env.JWT_SECRET_KEY}`,
  JWT_ACCESS_EXPIRES_IN: `${process.env.JWT_ACCESS_EXPIRES_IN}`,
  JWT_REFRESH_EXPIRES_IN: `${process.env.JWT_REFRESH_EXPIRES_IN}`,
};

export const cfg = {
  app
};