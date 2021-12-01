import t from "tap";
import { part1, part2 } from "./1";

const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

t.test("part 1", async (t) => {
  const expected = 7;
  const result = part1(testInput);
  t.equal(result, expected);
});

t.test("part 2", async (t) => {
  const expected = 5;
  const result = part2(testInput);
  t.equal(result, expected);
});
