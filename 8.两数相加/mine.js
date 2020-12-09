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
var addTwoNumbers = function(l1, l2) { // 根据迭代算法的思路写出来的
  // 新建一个链表节点
  let head = new ListNode();
  // 使currentNode指向head  使head一直指向head
  let currentNode = head;
  // 定义进位  默认0
  let carry = 0;
  // 当l1和l2有一个走到尾时跳出
  while(l1 != null && l2 != null) {
    // 新建一个节点  val存放l1、l2以及carry的和值
    let postNode = new ListNode();
    postNode.val = l1.val + l2.val + carry;
    // 当val大于等于10时，进1位  当前节点的值保留余数
    if(postNode.val >= 10) {
      carry = 1;
      postNode.val = postNode.val % 10;
    } else {
      carry = 0;
    }
    // 使currentNode的next指向postNode
    currentNode.next = postNode;
    // 使currentNode指向currentNode的next 便成功存储了一位和值
    currentNode = currentNode.next;
    // l1、l2指向它们的next
    l1 = l1.next;
    l2 = l2.next;
  }
  // 当两链表长度不一时，对剩下的链表做相同的操作 只注意剩下链表节点的val和carry的和值
  let remainingList = l1 === null ? l2 : l1;
  while(remainingList != null) {
    let postNode = new ListNode();
    postNode.val = remainingList.val + carry;
    if(postNode.val >= 10) {
      carry = 1;
      postNode.val = postNode.val % 10;
    } else {
      carry = 0;
    }
    currentNode.next = postNode;
    currentNode = currentNode.next;
    remainingList = remainingList.next;
  }
  // 最后一位有进位时  额外加个节点
  if(carry > 0) {
    let postNode = new ListNode();
    postNode.val = carry;
    currentNode.next = postNode;
    currentNode = currentNode.next;
  }
  return head.next;
};


var addTwoNumbers = function(l1, l2) { // 官方解法 把长度短的链表补零和加法操作合并到了一起  代码简洁了许多，但思路和我想得差不多，时间复杂度也差不多，但我代码还是写的复杂了，不够简洁
  let head = null, tail = null;
  let carry = 0;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head;
};