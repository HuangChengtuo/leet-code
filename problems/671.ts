import { TreeNode } from '../DataStructure'

function findSecondMinimumValue (root: TreeNode | null): number {
  const set = new Set<number>()
  const fn = (node: TreeNode) => {
    set.add(node.val)
    if (node.left) {
      fn(node.left)
    }
    if (node.right) {
      fn(node.right)
    }
  }
  fn(root)
  const arr = [...set].sort((a, b) => a - b)
  console.log(arr)
  return arr[1] || -1
};

export default function () {
  // const tree = new TreeNode(2, new TreeNode(2), new TreeNode(5, new TreeNode(5), new TreeNode(7)))
  const tree = new TreeNode(2, new TreeNode(2), new TreeNode(2))
  console.log(findSecondMinimumValue(tree))
}