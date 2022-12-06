require("dotenv").config();
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: process.env.DATABASE,
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 3306,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database:
      process.env.NODE_ENV === "production"
        ? process.env.DATABASE_NAME_FOR_PRODUCTION
        : process.env.DATABASE_NAME,
  },
};
