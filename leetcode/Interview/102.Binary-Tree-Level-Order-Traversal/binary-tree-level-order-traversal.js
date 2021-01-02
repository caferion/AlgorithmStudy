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
var levelOrder = function(root) {
  let queue = [];
  let result = [];
  let node;

  if (!root) {
    return result;
  }

  queue.push(root);
  while(queue.length) {
    const cnt = queue.length;
    const subList = [];

    for (let i = 0; i < cnt; i++) {
      node = queue.shift();

      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
      subList.push(node.val);
    }
    result.push(subList);
  }
  return result;
};
