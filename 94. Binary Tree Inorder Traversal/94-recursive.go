// 94. Binary Tree Inorder Traversal recursive solution in GoLang
// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func inorderTraversal(root *TreeNode) []int {
	if root == nil {
		return nil
	}

	var output []int
	traverse(root, &output)

	return output
}

func traverse(root *TreeNode, output *[]int) {
	if root == nil {
		return
	}

	traverse(root.Left, output)
	*output = append(*output, root.Val)
	traverse(root.Right, output)
}
