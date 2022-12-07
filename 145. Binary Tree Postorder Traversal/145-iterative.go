// 145. Binary Tree Postorder Traversal iterative solution in GoLang
// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

package leetcode

type (
	Stack struct {
		top *node
		length int
	}
	node struct {
		value interface{}
		prev *node
	}	
)
// Create a new stack
func New() *Stack {
	return &Stack{nil,0}
}
// Return the number of items in the stack
func (this *Stack) Len() int {
	return this.length
}
// View the top item on the stack
func (this *Stack) Peek() interface{} {
	if this.length == 0 {
		return nil
	}
	return this.top.value
}
// Pop the top item of the stack and return it
func (this *Stack) Pop() interface{} {
	if this.length == 0 {
		return nil
	}
	
	n := this.top
	this.top = n.prev
	this.length--
	return n.value
}
// Push a value onto the top of the stack
func (this *Stack) Push(value interface{}) {
	n := &node{value,this.top}
	this.top = n
	this.length++
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func postorderTraversal(root *TreeNode) []int {
    stack1 := New()
    stack2 := New()
    var output []int

    if root == nil {
        return output
    }

    stack1.Push(root)

    for ;stack1.Len() != 0; {
        curr := stack1.Pop().(*TreeNode)

        stack2.Push(curr.Val)

        if curr.Left != nil {
            stack1.Push(curr.Left)
        }
        if curr.Right != nil {
            stack1.Push(curr.Right)
        }
    }

    for ;stack2.Len() != 0; {
        output = append(output, stack2.Pop().(int))
    }

    return output
}