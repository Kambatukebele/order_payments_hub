import pino from "pino";
import ENV from "../config/env.js";

const logger = pino({
  level: "info",

  transport:
    ENV.NODE_ENV !== "production"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
        }
      : undefined,
});

export default logger;
