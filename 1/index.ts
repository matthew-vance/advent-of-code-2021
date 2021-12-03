import readInput from "../readInput";
import { part1, part2 } from "./1";

const input = readInput(__dirname).map(Number);

console.log({ part1: part1(input), part2: part2(input) });
