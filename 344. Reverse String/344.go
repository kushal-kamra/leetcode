// 344. Reverse String solution in GoLang
// https://leetcode.com/problems/reverse-string/description/

package leetcode

func reverseString(s []byte)  {
    left := 0
    right := len(s) - 1

    for ;left < right; {
        char := s[left]
        s[left] = s[right]
        s[right] = char
        left++
        right--
    }
}