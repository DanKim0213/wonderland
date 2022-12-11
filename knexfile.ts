import * as dotenv from "dotenv";
import type { Knex } from "knex";

dotenv.config();
// Update with your config settings.

const init = {
  client: process.env.DATABASE,
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 3306,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
};
const config: { [key: string]: Knex.Config } = {
  development: {
    ...init,
  },
  production: {
    client: init.client,
    connection: {
      ...init.connection,
      database: process.env.DATABASE_NAME_FOR_PRODUCTION,
    },
  },
};

export default config;
