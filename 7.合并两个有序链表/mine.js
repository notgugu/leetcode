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
var mergeTwoLists = function(l1, l2) { // 递归写法
  // 当l1节点为null时即代表l1链表到尾了，返回剩余的l2链表
  if(l1 == null) {
    return l2;
  }
  // 当l2节点为null时即代表l2链表到尾了，返回剩余的l1链表
  if(l2 == null) {
    return l1;
  }
  if(l1.val < l2.val) {
    // 递归  l1的val小于l2的val时  l1节点指向l1节点的next和l2节点val比值大的节点
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    // 递归  l2的val小于等于l1的val时  l2节点指向l2节点的next和l1节点val比值大的节点
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

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
var mergeTwoLists = function(l1, l2) { // 迭代写法
  // 创建一个新的链表 用于连接l1和l2节点
  let head = new ListNode();
  // 建立一个新的变量指向head  确保head一直指向头节点
  let currentNode = head;
  while(l1 != null && l2 != null) {
    //当l1或l2节点为null时，说明l1或l2链表到尾了，跳出循环
    if(l1.val < l2.val) {
      // 当l1节点的val小于l2节点的val时，使新链表的表头的next指向l1节点
      currentNode.next = l1;
      // 同时，使l1节点指向l1的next节点
      l1 = l1.next;
    } else {
      // l2同理
      currentNode.next = l2;
      l2 = l2.next;
    }
    // head链表指向l1或l2完毕后，指向他自己的next节点即指向的l1或l2节点
    currentNode = currentNode.next;
  }
  // 当l1或l2链表到尾后，将剩下的链表节点加到head链表的下一个指向
  currentNode.next = l1 === null ? l2 : l1;
  // 返回除了头结点以外的新链表
  return head.next;
};