/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        // created visited obj
        const visited = {}

        // create recursive function
        function dfs(node) {
            // if the node is null, empty return
            if (!node) return null;
            // if it has been visited, pass in the copy
            if (visited[node.val]) return visited[node.val];

            // create a copy of the current node
            const copy = new Node(node.val)
            // add it to visited
            visited[node.val] = copy;
            // loop through neighbors
            for (let neighbor of node.neighbors) {
                // copy.push(recur(neighbor))
                copy.neighbors.push(dfs(neighbor));
            }
                
            // return the copy of the node
            return copy;
        }
            
        
        // return rec(orignal node)
        return dfs(node);
    }
}
