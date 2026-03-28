import { describe, expect, it } from "vitest";
import { maxDepth } from "@/other_leetcode/maximum_depth_binary_tree/maximum_depth_tree.js";
import { TreeNode } from "@/types.js";

describe("[1,2,1] - 2", () => {
  it("does a thing", () => {
    const p = new TreeNode(
      1,
      new TreeNode(2, null, null),
      new TreeNode(1, null, null),
    );

    expect(maxDepth(p)).toBe(2);
  });

  it("[1,2,2,null,3,null,3] - 3", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3, null, null)),
      new TreeNode(2, null, new TreeNode(3, null, null)),
    );

    expect(maxDepth(root)).toBe(3);
  });

  it("[1] - 1", () => {
    const root = new TreeNode(1);

    expect(maxDepth(root)).toBe(1);
  });

  it("[] - 0", () => {
    expect(maxDepth(null)).toBe(0);
  });
});
