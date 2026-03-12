export const lengthOfLongestSubstring = (s: string) => {
  if (s.length === 1) return 1;

  let array = s.split("");
  let max = 0;

  let l = 0;
  let r = 1;

  while (r <= array.length) {
    const slice = array.slice(l, r);

    if (slice.length === new Set(slice).size) {
      max = Math.max(max, slice.length);
      r++;
    } else {
      l++;
    }
  }

  return max;
};
