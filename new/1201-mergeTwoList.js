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
var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) {
        return null;
    } else if (!l1 || !l2) {
        return !l1 ? l2 :l1;
    }
    let result = l1.val <= l2.val ? l1 : l2;
    let flag = true;
    let first = l1.val <= l2.val ? l1.next : l1;
    let second = l1.val <= l2.val ? l2 : l2.next;
    let temp = result

    while (flag) {
        if(first && second) {
            if (first.val <= second.val) {
                temp.next = first;
                first = first.next;
            } else {
                temp.next = second;
                second = second.next;
            }
            temp = temp.next;
        } else if (!first && !second) {
            flag = false;
        } else {
            temp.next = !first ? second : first;
            flag = false;
        }
    }
    return result;
};