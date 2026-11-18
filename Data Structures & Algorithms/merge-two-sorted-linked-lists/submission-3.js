/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// return head of new list
// in order
// between 0 and 100
// node val -100 and 100 (not important)

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // create dummy list
        const dummy = new ListNode();
        let curDummy = dummy;
        // while list1 and list2 nodes exists
        while (list1 && list2) {
            // determine which list we are working with
            if (list1.val >= list2.val) {
                const isoNode = list2;
                let list2Next = list2.next

                isoNode.next = null;

                curDummy.next = isoNode;
                curDummy = curDummy.next;

                list2 = list2Next
            } else {
                const isoNode = list1;
                let list1Next = list1.next;

                isoNode.next = null;

                curDummy.next = isoNode;
                curDummy = curDummy.next;

                list1 = list1Next
            }
        }

        list1 ? curDummy.next = list1 : curDummy.next = list2;

        return dummy.next;
    }
}
