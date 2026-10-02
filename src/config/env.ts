import dotenv from "dotenv";
dotenv.config({ quiet: true });

const ENV = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  LOG_LEVEL: process.env.LOG_LEVEL,
  SEEDER_OWNER_EMAIL: process.env.owner_email,
  SEEDER_OWNER_PASSWORD: process.env.owner_password,
};

export default ENV;
