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

export const maxDepth = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }

  let max = 0;

  const recurse = (node: TreeNode, depth: number = 0) => {
    depth += 1;

    max = max > depth ? max : depth;

    if (node.left === null && node.right === null) {
      return;
    }

    if (node.left) {
      recurse(node.left, depth);
    }

    if (node.right) {
      recurse(node.right, depth);
    }
  };

  recurse(root);

  return max;
};
