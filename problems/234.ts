import { ListNode } from '../DataStructure'

function isPalindrome (head: ListNode | null): boolean {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let l = 0
  let r = arr.length - 1
  while (l < r) {
    if (arr[l] !== arr[r]) {
      return false
    }
    l++
    r--
  }
  return true
}

export default function () {
  const list = new ListNode(1, new ListNode(2))
  console.log(isPalindrome(null))
}
