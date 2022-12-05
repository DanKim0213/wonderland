import Koa from "koa";
import logger from "./logger";

const app = new Koa();
app.use(logger);

app.use(async (ctx) => {
  ctx.log.info("something else");
  ctx.body = "Hello World";
});

app.listen(3000);
