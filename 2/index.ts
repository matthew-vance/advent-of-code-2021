import path from "path";
import fs from "fs";
import { part1, part2 } from "./2";

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
  .split("\n");

console.log({ part1: part1(input), part2: part2(input) });
