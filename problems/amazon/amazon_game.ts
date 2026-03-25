export const amazonGame = (array: Array<number>, k: number): number => {
  let max = array.filter((n) => n === k).length;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j <= array.length; j++) {
      const subArray = array.slice(i, j);

      const frequencyMap: Record<number, number> = {};

      subArray.forEach((n) => {
        if (frequencyMap[n] === undefined) {
          frequencyMap[n] = 0;
        }

        frequencyMap[n] += 1;
      });

      let maxOccurringValue: number | undefined = undefined;

      Object.keys(frequencyMap).forEach((k) => {
        if (maxOccurringValue === undefined) {
          maxOccurringValue = Number(k);
        }

        if (frequencyMap[Number(k)] > frequencyMap[maxOccurringValue]) {
          maxOccurringValue = Number(k);
        }
      });

      if (!maxOccurringValue) {
        continue;
      }

      const diff = k - maxOccurringValue;

      const newArray = [...array].map((v, index) => {
        if (index < i || index >= j) {
          return v;
        }

        return v + diff;
      });

      const q = newArray.filter((n) => n === k).length;
      max = q > max ? q : max;
    }
  }

  return max;
};
