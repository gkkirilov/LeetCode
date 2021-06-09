class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBinarySearchTree(treeRoot) {
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY
  });

  while (nodeAndBoundsStack.length) {
    const {
      node,
      lowerBound,
      upperBound
    } = nodeAndBoundsStack.pop();

    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value
      })
    }

    if (node.right) {
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound,
        upperBound: node.value
      })
    }
  }

  return true;
}