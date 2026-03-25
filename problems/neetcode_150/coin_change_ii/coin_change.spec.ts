import { describe, expect, it } from "vitest";
import { change } from "@/neetcode_150/coin_change_ii/coin_change.js";

const testCases = [{ input: { amount: 5, coins: [1, 2, 5] }, expected: 4 }];

describe("change", () => {
  it.each(testCases)(
    "returns $expected for input $input",
    ({ input, expected }) => {
      expect(change(input.amount, input.coins)).toBe(expected);
    },
  );
});
