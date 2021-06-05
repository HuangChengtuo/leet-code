
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false
  }
  let fast = head.next
  let slow = head
  while (true) {
    if (!fast || !slow) {
      return false
    }
    if (fast === slow) {
      return true
    }
    fast = fast?.next?.next
    slow = slow.next
  }
}

export default function () {
  const list = new ListNode(1, new ListNode(5, new ListNode(8)))
  console.log(hasCycle(list))
}