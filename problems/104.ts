
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

function maxDepth(root: TreeNode | null): number {
  let result = 0
  if (!root) {
    return result
  }
  const dp = (node: TreeNode, depth: number) => {
    result = Math.max(result, depth + 1)
    if (node.left) {
      dp(node.left, depth + 1)
    }
    if (node.right) {
      dp(node.right, depth + 1)
    }
  }
  dp(root, 0)
  return result
}

export default function () {
  const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
  console.log(maxDepth(tree))
}