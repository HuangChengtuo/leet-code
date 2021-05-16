
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

function inorderTraversal(root: TreeNode | null): number[] {
  const result = []
  const fn = (node: TreeNode) => {
    if (!node) {
      return
    }
    if (node.left) {
      fn(node.left)
    }
    result.push(node.val)
    if (node.right) {
      fn(node.right)
    }
  }
  fn(root)
  return result
}

export default function () {
  const tree = new TreeNode(1, null, new TreeNode(2))
  console.log(inorderTraversal(tree))
}