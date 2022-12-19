// 142. Linked List Cycle II solution in JavaScript
// https://leetcode.com/problems/linked-list-cycle-ii/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head == null) return head;

    let intersection_node = getIntersection(head);
    if (intersection_node == null) return null;

    let ptr1 = head;
    let ptr2 = intersection_node;

    while (ptr1 != ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return ptr1;
};

function getIntersection(head) {
    let slow = head
    let fast = head

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast == slow) {
            return slow;
        }
    }

    return null;
}