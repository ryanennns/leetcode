export const canJump = (nums: number[]): boolean => {
  let goalpost = nums.length - 1;

  for (let i = goalpost; i > 0; i--) {
    const previousNumber = nums[i - 1];

    if (previousNumber > goalpost - i) {
      goalpost = i - 1;
    }
  }

  return goalpost === 0;
};
