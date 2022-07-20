import { TreeNode } from '../DataStructure'

function searchBST (root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null
  }
  if (root.val === val) {
    return root
  } else {
    return searchBST(root.left, val) || searchBST(root.right, val)
  }
}

export default function () {
  const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7))
  const val = 4
  console.log(searchBST(root, val))
}