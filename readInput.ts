import path from "path";
import fs from "fs";

export default (dir: string): string[] =>
  fs.readFileSync(path.join(dir, "input.txt"), "utf-8").split("\n");
