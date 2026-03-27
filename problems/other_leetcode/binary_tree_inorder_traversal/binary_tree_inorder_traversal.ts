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

export const inorderTraversal = (root: TreeNode | null): Array<number> => {
  const inOrder: Array<number> = [];

  if (!root) {
    return inOrder;
  }

  const recurse = (node: TreeNode) => {
    if (node.left) {
      recurse(node.left);
    }

    inOrder.push(node.val);

    if (node.right) {
      recurse(node.right);
    }
  };

  recurse(root);

  return inOrder;
};
