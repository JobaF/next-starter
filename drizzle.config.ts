import "dotenv/config";
import { defineConfig } from "drizzle-kit";

import { env } from "@/env/server";

export default defineConfig({
  schema: "./src/db/schema/index.ts",
  dialect: "postgresql",
  out: "./src/db/migrations",
  dbCredentials: {
    url: env.DB_URL,
  },
});
