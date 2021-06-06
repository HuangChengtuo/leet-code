import { TreeNode } from '../DataStructure'

function preorderTraversal(root: TreeNode | null): number[] {
  const result = []
  const fn = (node: TreeNode) => {
    if (node?.val) {
      result.push(node.val)
      fn(node.left)
      fn(node.right)
    }
  }
  fn(root)
  return result
};

export default function () {
  const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
  console.log(preorderTraversal(tree))
}