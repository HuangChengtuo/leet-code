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


function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  let min = Infinity
  const fn = (node: TreeNode, depth: number) => {
    if (node.left || node.right) {
      if (node.left) {
        fn(node.left, depth + 1)
      }
      if (node.right) {
        fn(node.right, depth + 1)
      }
    } else {
      min = Math.min(min, depth)
    }
  }
  fn(root, 1)
  return min
};

export default function () {
  const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
  console.log(minDepth(tree))
}