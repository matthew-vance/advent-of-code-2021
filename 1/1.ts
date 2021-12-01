export const part1 = (input: number[]): number =>
  input.reduce((prev, curr, i) => (curr > input[i - 1] ? prev + 1 : prev), 0);

export const part2 = (input: number[]): number =>
  input.reduce(
    (prev, curr, i) =>
      curr + input[i - 1] + input[i - 2] >
      input[i - 1] + input[i - 2] + input[i - 3]
        ? prev + 1
        : prev,
    0
  );
