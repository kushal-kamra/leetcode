//138. Copy List with Random Pointer solution in Golang
//https://leetcode.com/problems/copy-list-with-random-pointer/description/

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Random *Node
 * }
 */

package program

type Node struct {
	Val int
	Next *Node
	Random *Node
}

func copyRandomList(head *Node) *Node {
    if head == nil {
        return head
    }

    var ptr = head
    var new_ptr_map = make(map[*Node]*Node)

    for ptr != nil {
        new_ptr_map[ptr] = &Node{Val: ptr.Val}
        ptr = ptr.Next
    }

    ptr = head

    for ptr != nil {
        if new_ptr_map[ptr.Next] != nil {
            new_ptr_map[ptr].Next = new_ptr_map[ptr.Next]
        } else {
            new_ptr_map[ptr].Next = nil
        }

        if new_ptr_map[ptr.Random] != nil {
            new_ptr_map[ptr].Random = new_ptr_map[ptr.Random]
        } else {
            new_ptr_map[ptr].Random = nil
        }

        ptr = ptr.Next
    }

    return new_ptr_map[head]
}
