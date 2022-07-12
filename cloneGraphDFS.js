//Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

// /**
//  * @param {Node} node
//  * @return {Node}
//  */

 var cloneGraph = function(node) {
    //Maintain a hashtable to store our new nodes' values, create a helper dfs function that takes the node as a parameter and store the new node value in the hash table, then map through the neighbors and run a recursive DFS on every neighbor to then store the result of that function in the hashtable.
    let hash = {};
    if (node != null) return dfs(node);
    else return null
    
  function dfs(node) {
    if (!node) return node;
    if (!hash[node.val]) {
      hash[node.val] = new Node(node.val);
      hash[node.val].neighbors = node.neighbors.map(dfs);
    }
    return hash[node.val];
  }
};