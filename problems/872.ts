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


function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let result = true
  const l = []
  const r = []
  const dfs = (node: TreeNode, arr: number[]) => {
    if (!node.left && !node.right) {
      arr.push(node.val)
    }
    if (node.left) {
      dfs(node.left, arr)
    }
    if (node.right) {
      dfs(node.right, arr)
    }
  }
  dfs(root1, l)
  dfs(root2, r)
  console.log(l, r)
  for (let i = 0; i < Math.max(l.length, r.length); i++) {
    if (l[i] !== r[i]) {
      result = false
    }
  }
  return result
};

export default function () {
  const l = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(9), new TreeNode(8)))
  const r = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(7)), new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8))))
  console.log(leafSimilar(l, r))
}