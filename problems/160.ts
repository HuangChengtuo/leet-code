import { ListNode } from '../DataStructure'

function getIntersectionNode (headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let p1 = headA
  let p2 = headB
  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next
    p2 = p2 === null ? headA : p2.next
  }
  return p1
};

export default function () {
  const c = new ListNode(2, new ListNode(6, new ListNode(4)))
  const a = new ListNode(2, new ListNode(6, new ListNode(4)))
  const b = new ListNode(1, new ListNode(5))
  console.log(getIntersectionNode(null, null))
}