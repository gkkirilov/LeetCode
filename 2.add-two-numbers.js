/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
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

 function ListNode(val, next) {
     this.val = val===undefined ? 0 : val
     this.next = next===undefined ? null : next
 }

 function extractNumber(l1) {
    var number = ''
    while(l1.next) {
      number += l1.val
      l1 = l1.next
    }
    number += l1.val

    return number;
}

function createLinkedList(number) {
  number = number.toString().split('')
  var start = new ListNode()
  start.val = parseInt(number[0])

  let currentNode = start
  for (let i = 1; i < number.length; i++) {
    const element = number[i];
    currentNode.next = new ListNode()
    currentNode = currentNode.next
    currentNode.val = parseInt(element)
  }

  return start
}

var addTwoNumbers = function(l1, l2) {
    var n1 = extractNumber(l1)
    var n2 = extractNumber(l2)

    var length = Math.max(n1.length, n2.length)

    var remainder = 0, result = ''

    for (let index = 0; index < length; index++) {
        var sum = parseInt(n1[index] ? n1[index] : 0) + parseInt(n2[index] ? n2[index] : 0)
        if (sum + remainder > 9) {
            result += (sum - 10 + remainder).toString()
            remainder = 1
        } else {
            result += (sum + remainder).toString()
            remainder = 0
        }
    }
    if (remainder === 1) {
      result += '1'
    }

    var linkedListResult = createLinkedList(result)
    return linkedListResult
};
// @lc code=end


function main() {
  var l1 = createLinkedList(56)
  var l2 = createLinkedList(549)
  addTwoNumbers(l1, l2)
}

main()
