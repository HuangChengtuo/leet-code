class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let fast = head
  let slow = new ListNode(0, head)
  let result = slow
  while (fast) {
    if (fast.val === val) {
      slow.next = fast.next
    } else {
      slow = fast
    }
    fast = fast.next
  }
  return result.next
};

export default function () {
  console.log(removeElements(new ListNode(1, new ListNode(6, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))), 6))
}