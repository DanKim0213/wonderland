import * as dotenv from "dotenv";
import Koa from "koa";
import logger from "./logger";
import Knex from "knex";
import knexConfig from "../knexfile";
import { Model } from "objection";

dotenv.config();
// Initialize knex.
const knex = Knex(
  process.env.NODE_ENV === "production"
    ? knexConfig.production
    : knexConfig.development
);
// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex() method.
Model.knex(knex);
const app = new Koa();
app.use(logger);

app.use(async (ctx) => {
  ctx.log.info("something else");
  ctx.body = "Hello World";
});

app.listen(3000);

console.log("env: ", process.env.DATABASE_NAME, process.env.MEANINGLESS);

console.log("good to see u my friend :)");
