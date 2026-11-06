/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
// return the new linked list reversed

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // val = 0, next = 1
        // val = 1, next = 2
        // val = 2, next = 3
        // val = 3, next = null

        // val = 3, next = 2
        // val = 2, next = 1
        // val = 1, next = 0
        // val = 0, next = null

        // store current head next
        // set head next to null

        // move to 1, store this nodes next, set this next as the previous node
        // move to 2, store this nodes next, set this next as the previous node

        // set curNode as head, set prev as null
        let curNode = head;
        let prevNode = null;

        // while cur node exists
        while (curNode) {
            // store cur nodes next
            let curNext = curNode.next;
            // set next as the prev node
            curNode.next = prevNode;
            // save this node as the prev node var
            prevNode = curNode;
            // set cur node = save cur node next
            curNode = curNext;
        }
            
        
        // return prev, which will be the start of the new list
        return prevNode;
    }
}
