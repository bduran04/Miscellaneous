// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const headNode = new ListNode(0);

let curr = headNode;
let carry = 0;
let sum = 0;

while (l1 || l2 || carry) {
    // get the val in each node of the lists
    x = ( l1 ) ? l1.val : 0;
    y = ( l2 ) ? l2.val : 0;

    // sum all values
    sum = x + y + carry;

    // evaluate the remainder
    carry = Math.floor(sum / 10);

    // create a new node with the least significant digit and assign it to curr.next
    curr.next = new ListNode(sum % 10);

    // advance all nodes
    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
}

// return the 
return headNode.next;
};