import { ListNode } from '../DataStructure'

function getKthFromEnd (head: ListNode | null, k: number): ListNode | null {
  let slow = head
  let fast = head
  for (let i = 1; i < k; i++) {
    fast = fast.next
  }
  while (fast.next) {
    slow = slow.next
    fast = fast.next
    if (!fast.next) {
      return slow
    }
  }
  return slow
};

export default function () {
  const list = new ListNode(1)
  console.log(getKthFromEnd(list, 1))
}
