import { describe, expect, it } from "vitest";
import { TreeNode } from "@/types.js";
import { isSameTree } from "@/other_leetcode/binary_trees/same_tree/same_tree.js";
import { hasPathSum } from "@/other_leetcode/binary_trees/path_sum/path_sum.js";

describe("hasPathSum", () => {
  it("root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22", () => {
    const root = new TreeNode(
      5,
      new TreeNode(
        4,
        new TreeNode(
          11,
          new TreeNode(7, null, null),
          new TreeNode(2, null, null),
        ),
        null,
      ),
      new TreeNode(
        8,
        new TreeNode(13, null, null),
        new TreeNode(4, null, new TreeNode(1, null, null)),
      ),
    );

    expect(hasPathSum(root, 22)).toBe(true);
  });
});
