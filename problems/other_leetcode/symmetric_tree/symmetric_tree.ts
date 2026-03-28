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
