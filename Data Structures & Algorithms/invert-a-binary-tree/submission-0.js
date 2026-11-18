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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        // created a recursive function that swaps left and right node
        function swapNodes(node) {
            if (!node) return;
            const oldLeft = node.left;
            const oldRight = node.right;

            node.left = oldRight
            swapNodes(node.left)

            node.right = oldLeft;
            swapNodes(node.right);
        }
        // call the recursive function
        swapNodes(root);
        // return the root
        return root;
    }
}
