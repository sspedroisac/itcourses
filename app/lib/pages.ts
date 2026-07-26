import fs from "node:fs/promises";
import path from "node:path";

export function getPageContent(page: string) {
  const filePath = path.join(process.cwd(), `content/pages/${page}.md`);
  return fs.readFile(filePath, "utf8");
}
