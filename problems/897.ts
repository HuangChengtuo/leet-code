class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number, left?: TreeNode, right?: TreeNode) {
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

function increasingBST(root: TreeNode | null): TreeNode | null {
  const arr: number[] = []
  const fn = (node: TreeNode) => {
    if (!node) {
      return
    }
    fn(node.left)
    arr.push(node.val)
    fn(node.right)
  }
  fn(root)

  const result = new TreeNode(-1)
  let temp = result
  for (const val of arr) {
    temp.right = new TreeNode(val)
    temp = temp.right
  }
  return result.right
};


export default function () {
  const tree = new TreeNode(5, new TreeNode(1), new TreeNode(7))
  console.log(increasingBST(tree))
}