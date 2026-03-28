import { TreeNode } from "@/types.js";

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
