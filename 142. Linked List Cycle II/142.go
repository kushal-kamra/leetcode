// 142. Linked List Cycle II solution in GoLang
// https://leetcode.com/problems/linked-list-cycle-ii/description/

package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	intersection_node := getIntersection(head)
	if intersection_node == nil {
		return nil
	}

	ptr1 := head
	ptr2 := intersection_node

	for ptr1 != ptr2 {
		ptr1 = ptr1.Next
		ptr2 = ptr2.Next
	}

	return ptr1
}

func getIntersection(head *ListNode) *ListNode {
	slow := head
	fast := head

	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next

		if fast == slow {
			return slow
		}
	}

	return nil
}
