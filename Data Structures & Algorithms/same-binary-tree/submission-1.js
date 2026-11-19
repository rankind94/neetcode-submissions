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
// given 2 trees
// return boolean, true if they match or false if they dont
// 

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (p == null && q == null) return true; 
        if (p == null && q != null || p != null & q == null) return false;
        // if p and q vals are not the same, return false
        if (p.val != q.val) return false;
        // if both p and q left and right values are null, return true
        if (p.left == null && p.right == null && q.left == null && q.right == null) return true;

        return this.isSameTree(p.left, q.left) == true && this.isSameTree(p.right, q.right) == true;
    }
}
