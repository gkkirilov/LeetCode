/*
 * @lc app=leetcode id=1038 lang=javascript
 *
 * [1038] Binary Search Tree to Greater Sum Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  const list = [];
  traverse(root, list);
  return root;
};

const traverse = function (node, list) {
  if (node == null) {
    return;
  }

  traverse(node.right, list);
  list.push(node.val);
  node.val = getSum(node.val, list);
  traverse(node.left, list);
}

const getSum = function (val, list) {
  return list.filter(num => num >= val).reduce((sum, num) => sum += num, 0);
}
