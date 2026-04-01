import { TreeNode } from "@/types.js";

export const goodNodes = (root: TreeNode | null): number => {
  let numberOfNodes = 0;
  let numberOfBadNodes = 0;

  if (!root) {
    return 0;
  }

  const recurse = (node: TreeNode, previousValues: Array<number>) => {
    numberOfNodes++;

    if (!previousValues.every((v) => v <= node.val)) {
      numberOfBadNodes++;
    }

    const nextArray = [...previousValues, node.val];
    if (node.left) {
      recurse(node.left, nextArray);
    }

    if (node.right) {
      recurse(node.right, nextArray);
    }
  };

  recurse(root, []);

  return numberOfNodes - numberOfBadNodes;
};
