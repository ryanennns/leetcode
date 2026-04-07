const threeSum = (nums: Array<number>) => {
  let combinations = new Set<string>();

  for (let i = 0; i < nums.length; i++) {
    let currentSum = nums[i];

    console.log(currentSum);
    for (let j = 0; j <= Math.abs(currentSum); j++) {
      if (currentSum < 0) {
        let l = j;
        let r = currentSum + j;

        console.log([l, r]);
      }

      if (currentSum > 0) {
        let l = j;
        let r = currentSum + j;

        console.log([l, r]);
      }
    }
  }

  return combinations.size;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
