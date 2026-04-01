import { describe, expect, it } from "vitest";
import { TreeNode } from "@/types.js";
import { goodNodes } from "@/other_leetcode/binary_trees/count_good_nodes_in_binary_tree/count_good_nodes_in_binary_tree.js";

describe("goodNodes", () => {
  it("[3,1,4,3,null,1,5] - 4", () => {
    const root = new TreeNode(
      3,
      new TreeNode(1, new TreeNode(3), null),
      new TreeNode(4, new TreeNode(1), new TreeNode(5)),
    );

    expect(goodNodes(root)).toBe(4);
  });

  it("[9,null,3,6] - 1", () => {
    const root = new TreeNode(9, null, new TreeNode(3, new TreeNode(6), null));

    expect(goodNodes(root)).toBe(1);
  });

  // it("[3,3,null,4,2] - 3", () => {
  //   const root =
  // })
});
