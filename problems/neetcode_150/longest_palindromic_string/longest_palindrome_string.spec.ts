import { describe, expect, it } from "vitest";
import { longestPalindrome } from "@/neetcode_150/longest_palindromic_string/longest_palindrome_string.js";

type TestCase = {
  input: string;
  expected: string | string[];
};

const testCases: TestCase[] = [
  { input: "", expected: "" },
  { input: "a", expected: "a" },
  { input: "ac", expected: ["a", "c"] },
  { input: "aa", expected: "aa" },
  { input: "aba", expected: "aba" },
  { input: "abba", expected: "abba" },
  { input: "babad", expected: ["bab", "aba"] },
  { input: "cbbd", expected: "bb" },
  { input: "racecar", expected: "racecar" },
  { input: "aaaa", expected: "aaaa" },
  { input: "bananas", expected: "anana" },
  { input: "forgeeksskeegfor", expected: "geeksskeeg" },
];

describe("longestPalindrome", () => {
  it.each(testCases)(
    "returns the expected palindrome for input $input",
    ({ input, expected }) => {
      const result = longestPalindrome(input);

      if (Array.isArray(expected)) {
        expect(expected).toContain(result);
        return;
      }

      expect(result).toBe(expected);
    },
  );
});
