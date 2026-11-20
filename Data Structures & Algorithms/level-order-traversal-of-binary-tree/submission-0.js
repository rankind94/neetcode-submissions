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
// return an array of arrays, each level from left to right

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [ ];

        // create output array
        const output = []
        // create addLevel function passing in the root and the current level
        function addLevel(node, curLevel) {
            // add node at the array at output[curLevel]
            output[curLevel] ? output[curLevel].push(node.val) : output[curLevel] = [node.val];
            // call function on the left and right nodes
            if (node.left) addLevel(node.left, curLevel + 1);
            if (node.right) addLevel(node.right, curLevel + 1);
        }

        // call function on the root
        addLevel(root, 0);
            
        //return output array
        return output;
    }
}
