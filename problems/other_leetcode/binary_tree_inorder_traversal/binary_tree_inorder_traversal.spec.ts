import { describe, expect, it } from "vitest";
import {
  inorderTraversal,
  TreeNode,
} from "@/other_leetcode/binary_tree_inorder_traversal/binary_tree_inorder_traversal.js";

describe("inorderTraversal", () => {
  it("should traverse", () => {
    const root = new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(4, null, null),
        new TreeNode(
          5,
          new TreeNode(6, null, null),
          new TreeNode(7, null, null),
        ),
      ),
      new TreeNode(3, null, new TreeNode(8, new TreeNode(9, null, null), null)),
    );

    expect(inorderTraversal(root)).toEqual([4, 2, 6, 5, 7, 1, 3, 9, 8]);
  });
});
