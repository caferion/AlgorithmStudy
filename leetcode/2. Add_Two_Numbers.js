/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let first = [l1.val];
  let second = [l2.val];
  let sum;
  let reuslt;
  let temp;
  while (l1.next) {
    l1 = l1.next;
    first.push(l1.val);
  }
  while (l2.next) {
    l2 = l2.next;
    second.push(l2.val);
  }
  sum = +first.reverse().join('') + +second.reverse().join('');
  console.log(sum /10)
  result = new ListNode(sum%10);
  temp = result
  while(sum /10 >= 1) {
    console.log(sum /10)
    sum = Number.parseInt(sum/10);
    temp.next = new ListNode(sum%10);
    temp = temp.next;
  }
  return result;
};
