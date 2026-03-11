import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";
import fs from "node:fs";
import path from "node:path";

function getLocalD1DB(): string {
  // Source:
  // - https://github.com/daniel-d7a/hono-drizzle-cloudflare_d1-better_auth-starter/blob/8ee4cc366c7eecfefa4120e0330d83f3ecce4b0f/drizzle.config.ts
  // - https://github.com/LubomirGeorgiev/cloudflare-workers-nextjs-saas-template/blob/97b20346248decaff8018b7fd76269a0199309fd/drizzle.config.ts

  const basePath = path.resolve(
    ".wrangler/state/v3/d1/miniflare-D1DatabaseObject",
  );
  const dbFile = fs.readdirSync(basePath).find((x) => x.endsWith(".sqlite"));

  if (!dbFile) {
    throw new Error("Local DB (*.sqlite file) missing.");
  }

  const url = path.resolve(basePath, dbFile);

  return url;
}

const prodConfig = {
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
} satisfies Config;

const devConfig = {
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: getLocalD1DB(),
  },
} satisfies Config;

export default defineConfig(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig,
);
