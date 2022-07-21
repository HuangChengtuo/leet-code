import { ListNode } from "../DataStructure";

function reverseList (head: ListNode | null): ListNode | null {
  let a = head
  let b = head?.next
  let c = head?.next?.next
  if (!b) {
    return a
  }
  if (!c) {
    b.next = a
    a.next = null
    return b
  }
  a.next = null
  while (c) {
    b.next = a
    a = b
    b = c
    c = c.next
  }
  b.next = a
  return b
}

export default function () {
  const list = new ListNode(1,new ListNode(2))
  console.log(reverseList(list))
}
