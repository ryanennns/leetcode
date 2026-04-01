const twoSum = (nums: Array<number>, target: number): number[] => {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [i, map.get(diff)!];
    } else {
      map.set(nums[i], i);
    }
  }

  return [0, 0];
};

console.log(twoSum([3, 2, 4], 6));
