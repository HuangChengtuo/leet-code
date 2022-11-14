import { ListNode } from '../DataStructure'

function middleNode (head: ListNode | null): ListNode | null {
  if (!head) {
    return head
  }
  let slow = head
  let fast = head
  while (fast.next) {
    slow = slow.next
    fast = fast.next
    if (fast.next) {
      fast = fast.next
    }
  }
  return slow
}

export default function () {
  const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
  console.log(middleNode(null))
}
