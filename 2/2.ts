export const part1 = (input: string[]): number => {
  let depth = 0,
    h_position = 0;

  input.forEach((v) => {
    const [dir, val] = v.split(" ");
    const units = +val;
    switch (dir) {
      case "forward":
        h_position += units;
        break;
      case "down":
        depth += units;
        break;
      case "up":
        depth -= units;
    }
  });

  return depth * h_position;
};

export const part2 = (input: string[]): number => {
  let aim = 0,
    depth = 0,
    h_position = 0;

  input.forEach((v) => {
    const [dir, val] = v.split(" ");
    const units = +val;
    switch (dir) {
      case "forward":
        h_position += units;
        depth += aim * units;
        break;
      case "down":
        aim += units;
        break;
      case "up":
        aim -= units;
    }
  });

  return depth * h_position;
};
