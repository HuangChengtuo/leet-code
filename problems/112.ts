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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false
  }
  let result = false
  const fn = (node: TreeNode, sum: number) => {
    sum += node.val
    if (node.left || node.right) {
      if (node.left) {
        fn(node.left, sum)
      }
      if (node.right) {
        fn(node.right, sum)
      }
    } else if (targetSum === sum) {
      result = true
    }
  }
  fn(root, 0)
  return result
};

export default function () {
  const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  console.log(hasPathSum(tree, 5))
}