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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    // return the head of one sorted list
    // thinking of starting dummy list
    mergeTwoLists(list1, list2) {
        // create a dummy list
        let dummyList = new ListNode();
        // create curDummyNode and set it to the start of the dummy list
        let curDummyNode = dummyList;
        // while list1 || list2 exist
        while (list1 && list2) {
            // grab which list val is less or actually still there (important for last pass)
            // decide which one to pop off
            if (list1.val <= list2.val) {
                // set curDummyNode.next = popped of val
                curDummyNode.next = list1;
                // increment the popped off list
                list1 = list1.next;
            } else if (list2.val < list1.val) {
                // set curDummyNode.next = popped of val
                curDummyNode.next = list2;
                // increment the popped off list
                list2 = list2.next;
            }

            // increment curDummyNode
            curDummyNode = curDummyNode.next;     
        }

        // add whichever list is remaining
        if (!list1) {
            curDummyNode.next = list2;
        } else if (!list2) {
            curDummyNode.next = list1;
        }
            
        // return dummy list next value
        return dummyList.next;
    }
}
