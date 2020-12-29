/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let result = true;
  let stack = [];
  function traversal(node) {
    if (node.left) {
      traversal(node.left);
    }

    if(!stack.length) {
      stack.push(node.val);
    } else if (stack[stack.length-1] >= node.val) {
      result = false;
      return;
    } else {
      stack.push(node.val);
    }

    if (node.right) {
      traversal(node.right);
    }
  }
  traversal(root);
  return result;
};
