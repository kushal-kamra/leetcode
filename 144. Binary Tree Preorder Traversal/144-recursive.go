// 144. Binary Tree Preorder Traversal recursive solution in GoLang
// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

package main

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func preorderTraversal(root *TreeNode) []int {
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

	*output = append(*output, root.Val)
	traverse(root.Left, output)
	traverse(root.Right, output)
}
