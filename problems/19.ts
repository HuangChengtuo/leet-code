
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head.next === null) {
    return null
  }
  let result = head
  let slow = head
  let fast = head
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  if (!fast) {
    result = result.next
    return result
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return result
};

export default function () {
  const list = new ListNode(1, new ListNode(2))
  console.log(removeNthFromEnd(list, 2))
}