export const lengthOfLongestSubstring = (s: string): number => {
  if (s.length <= 1) return s.length;

  let maxLength = 0;
  const seen = new Map<string, number>();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const previousIndex = seen.get(char);

    if (previousIndex !== undefined && previousIndex >= left) {
      left = previousIndex + 1;
    }

    seen.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
