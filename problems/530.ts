class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function getMinimumDifference(root: TreeNode | null): number {
  let min = Infinity
  let pre = -1
  const dfs = (head: TreeNode) => {
    if (!head) {
      return
    }
    dfs(head.left)
    if (pre === -1) {
      pre = head.val
    } else {
      min = Math.min(min, head.val - pre);
      pre = head.val
    }
    dfs(head.right)
  }
  dfs(root)
  return min
}

export default function () {
  [4, 2, 6, 1, 3]
  const head = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6))
  console.log(getMinimumDifference(head))
}
