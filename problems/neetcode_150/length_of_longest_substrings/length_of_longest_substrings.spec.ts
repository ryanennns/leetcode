import { TestCase } from "@/core.js";
import { describe, expect, it } from "vitest";
import { lengthOfLongestSubstring } from "@/neetcode_150/length_of_longest_substrings/length_of_longest_substring.js";

const testCases: TestCase[] = [
  { input: "", expected: 0 },
  { input: "a", expected: 1 },
  { input: "aa", expected: 1 },
  { input: "ab", expected: 2 },
  { input: "abcabcbb", expected: 3 },
  { input: "bbbbb", expected: 1 },
  { input: "pwwkew", expected: 3 },
  { input: "abba", expected: 2 },
  { input: "dvdf", expected: 3 },
  { input: "anviaj", expected: 5 },
  { input: "tmmzuxt", expected: 5 },
  { input: "ohomm", expected: 3 },
  { input: " ", expected: 1 },
  { input: "au", expected: 2 },
  { input: "abcdefghijklmnopqrstuvwxyz", expected: 26 },
];

describe("lengthOfLongestSubstring", () => {
  it.each(testCases)(
    "returns $expected for input $input",
    ({ input, expected }) => {
      expect(lengthOfLongestSubstring(input)).toBe(expected);
    },
  );
});
