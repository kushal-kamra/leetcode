// 744. Find Smallest Letter Greater Than Target solution in GoLang
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

package leetcode

func nextGreatestLetter(letters []byte, target byte) byte {
    len_letters := len(letters)

    if letters[len_letters - 1] < target || len_letters == 1 {
        return letters[0]
    }
    
    left := 0
    right := len_letters - 1

    for ;left <= right; {
        mid := left + ((right - left) / 2)

        if letters[mid] <= target {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    if left == len_letters {
        return letters[0]
    } else {
        return letters[left]
    }
}