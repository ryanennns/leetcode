import { TreeNode } from "@/types.js";

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  let invalidCombo = false;

  if (!p || !q) {
    return !p && !q;
  }

  const recurse = (a: TreeNode, b: TreeNode) => {
    if (
      Boolean(a.left) !== Boolean(b.left) ||
      Boolean(a.right) !== Boolean(b.right) ||
      a.val !== b.val
    ) {
      invalidCombo = true;
    }

    if (a.left && b.left) {
      recurse(a.left, b.left);
    }

    if (a.right && b.right) {
      recurse(a.right, b.right);
    }
  };

  recurse(p, q);

  return !invalidCombo;
};
