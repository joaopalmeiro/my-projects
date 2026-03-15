import { intro, isCancel, outro, password, text } from "@clack/prompts";
import { hashPassword } from "better-auth/crypto";
import crypto from "node:crypto";
import fs from "node:fs/promises";

async function main(): Promise<void> {
  intro("My Projects");

  const name = await text({
    message: "Name:",
    validate: (value) => {
      if (!value) return "Name is required";
      return undefined;
    },
  });

  if (isCancel(name)) {
    console.log("Query generation canceled");
    process.exit(0);
  }

  const email = await text({
    message: "Email:",
    validate: (value) => {
      if (!value) return "Email is required";
      return undefined;
    },
  });

  if (isCancel(email)) {
    console.log("Query generation canceled");
    process.exit(0);
  }

  const rawPassword = await password({
    message: "Password:",
    mask: "*",
    validate: (value) => {
      if (!value) return "Password is required";
      return undefined;
    },
  });

  if (isCancel(rawPassword)) {
    console.log("Query generation canceled");
    process.exit(0);
  }

  const userId: string = crypto.randomUUID();
  const now: number = Date.now();
  const passwordHash: string = await hashPassword(rawPassword);

  const userQuery = `INSERT INTO user (id, name, email, created_at, updated_at) VALUES ('${userId}', '${name}', '${email}', ${now}, ${now});`;

  const accountQuery = `INSERT INTO account (id, account_id, provider_id, user_id, password, created_at, updated_at) VALUES ('${crypto.randomUUID()}', '${userId}', 'credential', '${userId}', '${passwordHash}', ${now}, ${now});`;

  const output = `${userQuery}\n${accountQuery}`;
  const outputPath = "./scripts/insert-user.sql";

  await fs.writeFile(outputPath, output);

  outro("Queries generated.");
}

void main();
