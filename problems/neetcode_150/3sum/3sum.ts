const threeSum = (nums: Array<number>) => {
  const combinations = new Set<string>();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      for (let k = j; k < nums.length; k++) {
        if (
            nums[i] + nums[j] + nums[k] === 0 &&
            i !== j && i !== k && j !== k
        ) {
          combinations.add([nums[i], nums[j], nums[k]].sort().join())
        }
      }
    }
  }

  return [...combinations].map(v=>v.split(",").map(v=>Number(v)))
};

console.log(threeSum([-1,0,1,2,-1,-4]))