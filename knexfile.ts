import * as dotenv from "dotenv";
import type { Knex } from "knex";

dotenv.config();
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: process.env.DATABASE,
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 3306,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
  },
  production: {
    client: process.env.DATABASE,
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 3306,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME_FOR_PRODUCTION,
    },
  },
};

export default config;
