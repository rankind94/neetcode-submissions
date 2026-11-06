/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
// if cycle, return true
// if no cycle return fa
// is index an internal property i can see?
// are values unique?
// how can we detect a cycle

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // create seen node set
        const seenNodes = new Set();
        let curNode = head;
        if (!curNode) return false;
        // loop through nodes
        while (curNode.next) {
            // if seen node set has the current node, return true
            if (seenNodes.has(curNode)) return true;
            // add node to seen nodes
            seenNodes.add(curNode);
            // change curNode to the next one
            curNode = curNode.next;
        }

        // return false if the while loop ends
        return false; 
    }
}
