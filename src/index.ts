import * as dotenv from "dotenv";
import Koa from "koa";
import logger from "./logger";

dotenv.config();
const app = new Koa();
app.use(logger);

app.use(async (ctx) => {
  ctx.log.info("something else");
  ctx.body = "Hello World";
});

app.listen(3000);

console.log(
  "env: ",
  process.env.DATABASE_NAME,
  process.env.MEANINGLESS,
  process.env.MEANINGLESS2
);
