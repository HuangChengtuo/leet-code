class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const result = head
  while (head?.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }
  return result
}

export default function () {
  //  [1,1,2]
  const a = new ListNode(2)
  const b = new ListNode(1, a)
  const c = new ListNode(1, b)
  console.log(deleteDuplicates(c))
}