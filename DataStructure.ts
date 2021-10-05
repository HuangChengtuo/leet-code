export class ListNode {
  val: number
  next: ListNode

  constructor (val = 0, next: ListNode = null) {
    this.val = val
    this.next = next
  }
}

export class TreeNode {
  val: number
  left: TreeNode
  right: TreeNode

  constructor (val = 0, left: TreeNode = null, right: TreeNode = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}
export interface Iterator {
  hasNext: () => boolean
  next: () => number
}
