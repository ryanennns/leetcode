const findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  let i = 0;
  let j = 0;

  const requiresAverage = nums1.length + (nums2.length % 2) !== 0;
  const medianIndex = Math.min(0, Math.floor((nums1.length + nums2.length) / 2) - 1);

  // console.log(`target median index: ${medianIndex}`);

  let sharedIndex = 0;
  let sharedCurrentValue = undefined;
  do {
    sharedCurrentValue = nums1[i];
    // console.log(`${sharedCurrentValue} -- ${sharedIndex}`);

    if (sharedIndex === medianIndex) {
      // console.log(`median is at index ${sharedIndex}`);
      if (requiresAverage) {
        const competingNumberOne = nums2[j+1] ?? 0;
        const competingNumberTwo = nums1[i+1] ?? 0;

        return (sharedCurrentValue + (competingNumberOne > competingNumberTwo ? competingNumberOne : competingNumberTwo)) / 2
      }

      return sharedCurrentValue;
    }

    if (nums2[j] > nums1[i]) {
      sharedIndex++;
      sharedCurrentValue = nums2[j];
      // console.log(`${sharedCurrentValue} -- ${sharedIndex}`);
      j++;
    }

    if (sharedIndex === medianIndex) {
      // console.log(`median is at index ${sharedIndex}`);
      if (requiresAverage) {
        const competingNumberOne = nums2[j+1] ?? 0;
        const competingNumberTwo = nums1[i+1] ?? 0;

        return (sharedCurrentValue + (competingNumberOne > competingNumberTwo ? competingNumberOne : competingNumberTwo)) / 2
      }

      return sharedCurrentValue;
    }

    i++;
    sharedIndex++;
  } while (i < nums1.length);

  return 0;
};

console.log(findMedianSortedArrays([], [1]));
