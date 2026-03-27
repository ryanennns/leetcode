export const change = (amount: number, coins: number[]): number => {
  let possibleCombinations = 0;

  const recurse = (current: number, available: number[]) => {
    for (let i = 0; i < available.length; i++) {
      const newCurrent = current - available[i];

      const possible = available.filter((c) => c <= newCurrent);
      if (possible.length > 0) {
        recurse(newCurrent, possible);
      }

      if (newCurrent === 0) {
        possibleCombinations += 1;
      }
    }
  };

  recurse(amount, coins);

  return possibleCombinations;
};
