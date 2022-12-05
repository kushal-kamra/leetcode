// 94. Binary Tree Inorder Traversal iterative solution in GoLang
// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

 // Stack Implementation from below
 // https://github.com/golang-collections/collections/blob/master/stack/stack.go

package leetcode

// Definition for a binary tree node.
type TreeNode struct {
	Val int
 	Left *TreeNode
 	Right *TreeNode
}

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
func inorderTraversal(root *TreeNode) []int {
    stack := New()
    var output []int
    curr := root

    for ;curr != nil  || stack.Len() != 0; {
        for ;curr != nil; {
            stack.Push(curr)
            curr = curr.Left
        }

        curr = stack.Pop().(*TreeNode)
        output = append(output, curr.Val)
        curr = curr.Right
    }

    return output
}