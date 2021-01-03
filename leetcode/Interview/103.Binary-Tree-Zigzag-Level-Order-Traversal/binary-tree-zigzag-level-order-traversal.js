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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let node;
  let result = [];
  let queue = [];
  let reverse = false;

  if (!root) {
    return result;
  }

  queue.push(root);

  while(queue.length) {
    const cnt = queue.length;
    const subList = [];

    for (let i = 0; i < cnt; i++) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      subList.push(node.val);
    }

    if (reverse) {
      subList.reverse();
    }
    result.push(subList);
    reverse = !reverse;
  }

  return result;
};
