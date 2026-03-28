import { TreeNode } from "@/types.js";

export const hasPathSum = (root: TreeNode | null, target: number): boolean => {
  let hasSum = false;

  if (!root) {
    return hasSum;
  }

  const recurse = (node: TreeNode, sum: number) => {
    sum += node.val;

    if (!node.left && !node.right && sum === target) {
      hasSum = true;

      return;
    }

    if (node.left) {
      recurse(node.left, sum);
    }

    if (node.right) {
      recurse(node.right, sum);
    }
  };

  recurse(root, 0);

  return hasSum;
};
