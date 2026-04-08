export const maxAreaOfIsland = (grid: number[][]): number => {
  const processed = new Set<string>();
  let maxArea = 0;

  interface Neighbour {
    value: number;
    i: number;
    j: number;
  }

  const coordinateKey = (i: number, j: number) => `${i},${j}`;

  const getNeighbours = (i: number, j: number): Array<Neighbour> => {
    let above, below, left, right;

    const a = grid[i - 1];
    const b = grid[i + 1];

    if (a !== undefined) {
      above = { value: grid[i - 1][j], i: i - 1, j };
    }
    if (b !== undefined) {
      below = { value: grid[i + 1][j], i: i + 1, j };
    }

    left = { value: grid[i][j - 1], i, j: j - 1 };
    right = { value: grid[i][j + 1], i, j: j + 1 };

    return [above, below, left, right].filter(
      (n) => n !== undefined && n.value === 1,
    ) as Array<Neighbour>;
  };

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 0 || processed.has(coordinateKey(i, j))) {
        continue;
      }
      processed.add(`${i},${j}`);

      let islandNodes = new Set<string>([coordinateKey(i, j)]);
      const neighbours = getNeighbours(i, j);

      const recurse = (neighbours: Array<Neighbour>) => {
        neighbours.forEach((neighbour) => {
          const coordinates = coordinateKey(neighbour.i, neighbour.j);

          if (islandNodes.has(coordinates)) {
            return;
          }

          islandNodes.add(coordinates);
          processed.add(coordinates);

          recurse(getNeighbours(neighbour.i, neighbour.j));
        });
      };

      recurse(neighbours);

      maxArea = Math.max(maxArea, islandNodes.size);
    }
  }

  return maxArea;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);
