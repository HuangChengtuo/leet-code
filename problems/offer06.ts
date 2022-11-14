import { ListNode } from '../DataStructure'

function reversePrint (head: ListNode | null): number[] {
  const result: number[] = []
  if (!head) {
    return result
  }

  function deep (node: ListNode) {
    node.next && deep(node.next)
    result.push(node.val)
  }

  deep(head)
  return result
}

export default function () {
  console.log(reversePrint(new ListNode(1, new ListNode(3, new ListNode(2)))))
}