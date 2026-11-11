/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    // between 1 and 30 nodes
    // val between 1 and 100
    // think slow fast with dummy
    removeNthFromEnd(head, n) {
        // find length of the full list
        let len = 0;
        const dummyList = new ListNode(0, head);
        let curNode = head;

        while (curNode != null) {
            len++;
            curNode = curNode.next;
        }
        // create dummy list with head as next
        // find target node (adding plus one because starting at dummy list we created)
        let tar = len - n;
        let prev = dummyList;
        // navigate to node before the one to be removed
        while (tar > 0) {
            tar--;
            prev = prev.next;
        }
        // remove the node by setting its next to the cur next
        prev.next = prev.next.next;

        // return the next value in dummy list (head value of copy list)
        return dummyList.next;
    }
}
