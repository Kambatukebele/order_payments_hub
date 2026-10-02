import express from "express";
import logger from "./lib/logger.js";
import pinoHttp from "pino-http";
import { randomUUID } from "node:crypto";

const app = express();

app.use(
  pinoHttp({
    logger,

    genReqId: (req) => {
      return req.headers["x-request-id"] || randomUUID();
    },
  }),
);

app.use((req, res, next) => {
  res.setHeader("X-Request-Id", req.id);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

export default app;
