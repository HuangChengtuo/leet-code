/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const result = []

  /**
   *
   * @param {number} node
   * @param {number[]} route
   */
  function fn(node, route) {
    if (node === graph.length - 1) {
      result.push([...route, node])
    }
    for (const nextNode of graph[node]) {
      fn(nextNode, [...route, node])
    }
  }

  fn(0, [])
  return result
};

console.log(allPathsSourceTarget([[2], [], [1]]))
