/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let list = head;
  let pre = null;
  if (!head.next && n === 1) {
    return null;
  }

  while(list) {
    let flag = false;
    let temp = list;

    for (let ix = 0; ix < n; ix++) {
      if (ix === n-1 && !temp.next) {
        flag = true;
      } else {
        temp = temp.next;
      }
    }

    if (flag) {
      if (!pre) {
        head = list.next;
      } else {
        pre.next = list.next;
      }
      break;
    }
    pre = list;
    list = list.next;
  }
  return head;

};
