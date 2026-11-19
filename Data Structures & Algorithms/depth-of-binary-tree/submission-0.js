/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
// int, longest path from farthest leaf node
// need to find the longest
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        let output = 0;

        if (!root) return 0;

        function findMaxDepth(node, depth) {
            // increment depth, accounting for current node
            depth = depth + 1;
            // if at a leaf node, compare depth to the output and set it equal to the larger of the 2
            if (!node.left && !node.right) return output = Math.max(depth, output);
            // continue moving down tree on right and left if both nodes exist
            if (node.left) findMaxDepth(node.left, depth);
            if (node.right) findMaxDepth(node.right, depth);
        }

        // call the recursive function on root
        findMaxDepth(root, 0)

        return output;
    }
}
