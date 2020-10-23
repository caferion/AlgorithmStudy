/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode();
  let temp = result;
  let plus = 0;
  while (l1 || l2) {
    const l1Value = l1 ? l1.val : 0;
    const l2Value = l2 ? l2.val : 0;
    const sum = l1Value + l2Value + plus;

    if (sum >= 10) {
      plus = 1;
    } else  {
      plus = 0;
    }
    temp.next = new ListNode(sum%10);
    temp = temp.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (plus ===1) {
    temp.next = new ListNode(1);
  }
  return result.next;
};
