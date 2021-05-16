
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

function isSymmetric(root: TreeNode | null): boolean {
  const compare = (l: TreeNode, r: TreeNode) => {
    if (!l && !r) {
      return true
    }
    if (!l || !r) {
      return false
    }
    return l.val === r.val && compare(l.left, r.right) && compare(l.right, r.left)
  }
  return compare(root, root)
}

export default function () {
  const tree = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)))
  console.log(isSymmetric(tree))
}