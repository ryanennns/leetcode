export const findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  let i = 0;
  let j = 0;

  const requiresRounding = (nums1.length + nums2.length) % 2 === 0;
  let medianIndex = Math.floor((nums1.length + nums2.length) / 2);
  let sharedIndex = 0;
  const incrementSharedIndex = () => {
    sharedIndex++;
  };

  let currentValue: undefined | number = undefined;
  let previousValue: undefined | number = undefined;
  const setCurrentValue = (num: number) => {
    previousValue = currentValue;
    currentValue = num;
  };

  const returnValue = () => {
    return requiresRounding
      ? (currentValue! + previousValue!) / 2
      : currentValue;
  };
  while (sharedIndex < nums1.length + nums2.length) {
    if (nums1[i] <= (nums2[j] ?? Infinity)) {
      setCurrentValue(nums1[i]);
      console.log({ currentValue, sharedIndex, i, j });

      if (sharedIndex === medianIndex) {
        return returnValue();
      }

      incrementSharedIndex();
      i++;
    }

    if (nums2[j] <= (nums1[i] ?? Infinity)) {
      setCurrentValue(nums2[j]);
      console.log({ currentValue, sharedIndex, i, j });

      if (sharedIndex === medianIndex) {
        return returnValue();
      }

      incrementSharedIndex();
      j++;
    }
  }

  return;
};
