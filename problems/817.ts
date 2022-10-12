/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from '../DataStructure'

function numComponents (head: ListNode | null, nums: number[]): number {
  const set = new Set<number>()
  for (const num of nums) {
    set.add(num)
  }
  let result = 0
  let prevHas = false
  while (head) {
    const has = set.has(head.val)
    if (has && !prevHas) {
      result++
    }
    prevHas = has
    head = head.next
  }
  return result
}

export default function () {
  const list = new ListNode(0)
  const nums = []
  console.log(numComponents(list, nums))
}
