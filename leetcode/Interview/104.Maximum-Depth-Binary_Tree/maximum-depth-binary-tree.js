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
 * @return {number}
 */
var maxDepth = function (root) {
  let result = 0;
  let node;
  let queue = [];

  if (!root) {
    return 0;
  }
  queue.push(root);
  while (queue.length) {
    const cnt = queue.length;
    for (let i = 0; i < cnt; i++) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result++;
  }

  return result;
};
