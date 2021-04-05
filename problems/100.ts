
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


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true
  }
  if (p?.val !== q?.val) {
    return false
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

export default function () {
  const l = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  const r = new TreeNode(1, new TreeNode(3), new TreeNode(2))
  console.log(isSameTree(l, r))
}