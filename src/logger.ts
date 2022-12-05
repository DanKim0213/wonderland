import pino from "koa-pino-logger";
const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      hideObject: true, // hide objects such as ["req", "res"]
      translateTime: "SYS:standard",
      colorize: true,
      ignore: "pid,hostname",
      messageFormat: "{req.method} {req.url} {res.statusCode} - {msg}",
    },
  },
});

export default logger;
