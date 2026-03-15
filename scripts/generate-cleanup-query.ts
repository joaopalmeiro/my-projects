import fs from "node:fs/promises";

async function main(): Promise<void> {
  const userQuery = "DELETE FROM user;";

  const outputPath = "./scripts/cleanup.sql";

  await fs.writeFile(outputPath, userQuery);
}

void main();
