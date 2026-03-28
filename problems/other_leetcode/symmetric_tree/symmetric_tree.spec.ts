import { describe, expect, it } from "vitest";
import { isSymmetric } from "@/other_leetcode/symmetric_tree/symmetric_tree.js";
import { TreeNode } from "@/types.js";

describe("isSymmetric", () => {
  it("symmetric tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null)),
      new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null)),
    );

    expect(isSymmetric(root)).toBe(true);
  });

  it("not symmetric tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, null, null), null),
      new TreeNode(2, null, new TreeNode(3, null, null)),
    );

    expect(isSymmetric(root)).toBe(true);
  });

  it("not symmetric - [1,2,2,null,3,null,3]", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3, null, null)),
      new TreeNode(2, null, new TreeNode(3, null, null)),
    );

    expect(isSymmetric(root)).toBe(false);
  });

  it("symmetric - [1]", () => {
    const root = new TreeNode(1, null, null);

    expect(isSymmetric(root)).toBe(true);
  });

  it("not symmetric - [1,0]", () => {
    const root = new TreeNode(1, new TreeNode(0, null, null), null);

    expect(isSymmetric(root)).toBe(false);
  });

  it("not symmetric - [1,2,3]", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, null, null),
      new TreeNode(3, null, null),
    );

    expect(isSymmetric(root)).toBe(false);
  });
});
