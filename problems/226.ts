import { TreeNode } from '../DataStructure'

function invertTree (root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root
  }

  function invertNode (root: TreeNode) {
    if (!root) {
      return
    }
    const temp = root.left
    root.left = root.right
    root.right = temp
    invertNode(root.left)
    invertNode(root.right)
  }

  invertNode(root)
  return root
}

export default function () {
  const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)))
  console.log(invertTree(tree))
}
