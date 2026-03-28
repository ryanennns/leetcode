import { describe, expect, it } from "vitest";
import { TreeNode } from "@/types.js";
import { isSameTree } from "@/other_leetcode/binary_trees/same_tree/same_tree.js";

describe("isSameTree", () => {
  it("example 1", () => {
    const p = new TreeNode(
      1,
      new TreeNode(2, null, null),
      new TreeNode(3, null, null),
    );

    const q = new TreeNode(
      1,
      new TreeNode(2, null, null),
      new TreeNode(3, null, null),
    );

    expect(isSameTree(p, q)).toBe(true);
  });

  it("example 2", () => {
    const p = new TreeNode(1, new TreeNode(2, null, null), null);

    const q = new TreeNode(1, null, new TreeNode(2, null, null));

    expect(isSameTree(p, q)).toBe(false);
  });

  it("example 3", () => {
    const p = new TreeNode(
      1,
      new TreeNode(2, null, null),
      new TreeNode(1, null, null),
    );

    const q = new TreeNode(
      1,
      new TreeNode(1, null, null),
      new TreeNode(2, null, null),
    );

    expect(isSameTree(p, q)).toBe(false);
  });

  it("example 4", () => {
    expect(isSameTree(null, null)).toBe(true);
  });
});
