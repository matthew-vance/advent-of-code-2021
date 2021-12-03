import t from "tap";
import { part1, part2 } from "./2";

const testInput = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];

t.test("part 1", async (t) => {
  const expected = 150;
  const result = part1(testInput);
  t.equal(result, expected);
});

t.test("part 2", async (t) => {
  const expected = 900;
  const result = part2(testInput);
  t.equal(result, expected);
});
