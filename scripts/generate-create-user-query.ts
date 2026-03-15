import { hashPassword } from "better-auth/crypto";
import crypto from "node:crypto";
import fs from "node:fs/promises";

async function main(name: string, email: string, password: string): Promise<void> {
  const userId: string = crypto.randomUUID();
  const now: number = Date.now();
  const passwordHash: string = await hashPassword(password);

  const userQuery = `INSERT INTO user (id, name, email, created_at, updated_at) VALUES ('${userId}', '${name}', '${email}', ${now}, ${now});`;

  const accountQuery = `INSERT INTO account (id, account_id, provider_id, user_id, password, created_at, updated_at) VALUES ('${crypto.randomUUID()}', '${userId}', 'credential', '${userId}', '${passwordHash}', ${now}, ${now});`;

  const output = `${userQuery}\n${accountQuery}`;
  const outputPath = "./scripts/insert-user-local.sql";

  await fs.writeFile(outputPath, output);
}

main("admin", "admin@admin.admin", "adminadmin");
