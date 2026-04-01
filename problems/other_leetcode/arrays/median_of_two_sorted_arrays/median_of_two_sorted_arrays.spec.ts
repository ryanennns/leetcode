import { describe, expect, it } from "vitest";
import { findMedianSortedArrays } from "@/other_leetcode/arrays/median_of_two_sorted_arrays/median_of_two_sorted_arrays.js";

describe("findMedianSortedArrays", () => {
  it("returns 2 for nums1=[1,3] nums2=[2]", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  it("returns 2.5 for nums1=[1,2] nums2=[3,4]", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  it("returns 0 for nums1=[0,0] nums2=[0,0]", () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0);
  });

  it("returns 1 for nums1=[] nums2=[1]", () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
  });

  it("returns 2 for nums1=[2] nums2=[]", () => {
    expect(findMedianSortedArrays([2], [])).toBe(2);
  });

  it("returns 2.0", () => {
    expect(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 2, 4, 4])).toBe(2);
  });

  it("returns 9.0", () => {
    expect(
      findMedianSortedArrays(
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      ),
    ).toBe(9);
  });

  it("returns -8", () => {
    expect(findMedianSortedArrays([-10, -9, -8], [1, 2])).toBe(-8);
  });
});
