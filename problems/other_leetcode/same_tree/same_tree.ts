export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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
