// 61. Rotate List solution in GoLang
// https://leetcode.com/problems/rotate-list/description/

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 package program

 type ListNode struct {
	Val int
	Next *ListNode
}

 func rotateRight(head *ListNode, k int) *ListNode {
    if head == nil || head.Next == nil {
		return head
	}

	old_tail := head
	n := 0

	for n = 1; old_tail.Next != nil; n++ {
		old_tail = old_tail.Next
	}

	old_tail.Next = head
	new_tail := head

	for i := 0; i < n-k%n-1; i++ {
		new_tail = new_tail.Next
	}

	new_head := new_tail.Next
	new_tail.Next = nil

	return new_head
}