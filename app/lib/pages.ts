import fs from "fs/promises";
import path from "path";

export function getPageContent(page: string) {
  const filePath = path.join(process.cwd(), `content/pages/${page}.md`);
  return fs.readFile(filePath, "utf8");
}
