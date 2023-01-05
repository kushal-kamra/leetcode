//724. Find Pivot Index solution in Golang
//https://leetcode.com/problems/find-pivot-index/description/

package main

func pivotIndex(nums []int) int {
	sum, leftSum, length := 0, 0, len(nums)

	for n := 0; n < length; n++ {
		sum = sum + nums[n]
	}

	for n := 0; n < length; n++ {
		if leftSum == sum-leftSum-nums[n] {
			return n
		}

		leftSum = leftSum + nums[n]
	}

	return -1
}
