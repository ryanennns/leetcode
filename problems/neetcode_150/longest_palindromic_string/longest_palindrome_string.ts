export const longestPalindrome = (s: string): string => {
  let longestPalindrome = "";
  const setLongestPalindrome = (candidate: string) =>
    (longestPalindrome =
      candidate.length > longestPalindrome.length
        ? candidate
        : longestPalindrome);

  const findLongestPalindrome = (s: string, l: number, r: number) => {
    while (s[l] === s[r]) {
      setLongestPalindrome(s.slice(l, r + 1));
      l-- && r++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    findLongestPalindrome(s, i, i);
    findLongestPalindrome(s, i, i + 1);
  }

  return longestPalindrome;
};

console.log(longestPalindrome("cbbd"));
