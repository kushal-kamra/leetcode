// 144. Binary Tree Preorder Traversal solution in GoLang
// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

package leetcode

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

 // Stack Implementation from below
 // https://github.com/golang-collections/collections/blob/master/stack/stack.go

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

func preorderTraversal(root *TreeNode) []int {
    var output []int

    if root == nil {
        return output
    }

    stack := New()
    stack.Push(root)

    for ;stack.Len() != 0; {
        node := stack.Pop().(*TreeNode)
        output = append(output, node.Val)

        if node.Right != nil {
            stack.Push(node.Right)
        }
        if node.Left != nil {
            stack.Push(node.Left)
        }
    }

    return output
}