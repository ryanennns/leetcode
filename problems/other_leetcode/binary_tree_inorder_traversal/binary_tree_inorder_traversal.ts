import { TreeNode } from "@/types.js";

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
