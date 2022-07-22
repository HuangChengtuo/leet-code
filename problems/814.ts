import { TreeNode } from "../DataStructure";

function pruneTree (root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }

  function isLeaf (node: TreeNode) {
    return !node?.left && !node?.right
  }

  function cut (node: TreeNode) {
    if (node.left) {
      cut(node.left)
    }
    if (node.right) {
      cut(node.right)
    }
    if (node?.left?.val === 0 && isLeaf(node?.left)) {
      node.left = null
    }
    if (node?.right?.val === 0 && isLeaf(node?.right)) {
      node.right = null
    }
  }

  cut(root)
  if (root.val === 0 && isLeaf(root)) {
    return null
  }
  return root
}

export default function () {
  const root = new TreeNode(1, new TreeNode(1), new TreeNode(0, new TreeNode(0), new TreeNode(1)))
  console.log(pruneTree(root))
}

