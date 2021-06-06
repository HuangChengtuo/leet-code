import { TreeNode } from '../DataStructure'

function postorderTraversal(root: TreeNode | null): number[] {
  const result = []
  const fn = (node: TreeNode) => {
    if (node?.val) {
      fn(node.left)
      fn(node.right)
      result.push(node.val)
    }
  }
  fn(root)
  return result
};

export default function () {
  const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
  console.log(postorderTraversal(tree))
}