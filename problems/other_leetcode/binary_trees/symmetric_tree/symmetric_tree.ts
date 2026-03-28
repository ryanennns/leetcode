import { TreeNode } from "@/types.js";

export const isSymmetric = (root: TreeNode | null): boolean => {
  let isSymmetric = true;

  if (!root) {
    return true;
  }

  const recurse = (left: TreeNode | null, right: TreeNode | null) => {
    if (left === null || right === null) {
      isSymmetric = left === right;

      return;
    }

    if (left.val !== right.val) {
      isSymmetric = false;

      return;
    }

    if (!!left.left !== !!right.right) {
      isSymmetric = false;

      return;
    }

    if (!!left.right !== !!right.left) {
      isSymmetric = false;

      return;
    }

    if (left.left && right.right) {
      recurse(left.left, right.right);
    }

    if (left.right && right.left) {
      recurse(left.right, right.left);
    }
  };

  recurse(root.left, root.right);

  return isSymmetric;
};
