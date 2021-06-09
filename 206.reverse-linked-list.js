/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  var last = null;
  var newHead = null;
  while (head !== null) {
    newHead = new ListNode(head.val);
    newHead.next = last;
    last = newHead;
    head = head.next;
  };

  return newHead;
};