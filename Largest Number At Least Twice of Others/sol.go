//Largest Number At Least Twice of Others solution in Golang
//https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1147/

package leetcode

func dominantIndex(nums []int) int {
    max_index, max_number := -1, -1
    
    for i := 0; i < len(nums); i++ {
        if nums[i] > max_number {
            max_number = nums[i]
            max_index = i
        }
    }
    
    for i := 0; i < len(nums); i++ {
        if i != max_index && 2 * nums[i] > max_number {
            return -1
        }
    }
    
    return max_index
}