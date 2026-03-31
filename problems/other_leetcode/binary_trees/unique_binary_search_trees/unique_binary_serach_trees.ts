export const numTrees = (n: number): number => {
  const numberOfCombinations: Record<number, number> = {
    0: 1,
  };

  const recurse = (depth: number): number => {
    const newDepth = depth - 1;

    if (numberOfCombinations[depth] !== undefined) {
      return numberOfCombinations[depth];
    }

    let sum = 0;

    for (let i = 0; i <= newDepth; i++) {
      const left = i;
      const right = newDepth - i;

      sum += recurse(left) * recurse(right);
    }

    numberOfCombinations[depth] = sum;

    return sum;
  };

  recurse(n);

  return numberOfCombinations[n];
};
