// 28. Find the Index of the First Occurrence in a String solution in GoLang
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

package leetcode

func strStr(haystack string, needle string) int {
    if len(needle) == 0 || needle == haystack {
        return 0
    }

    if len(haystack) == 0 {
        return -1
    }

    for i := 0; i <= len(haystack) - len(needle); i++ {
        if len(haystack) - i < len(needle) {
            return -1
        }

        if haystack[i] == needle[0] {
            for j := 0; j < len(needle); j++ {
                if haystack[i + j] != needle[j] {
                    break;
                } else if j == len(needle) - 1 {
                    return i
                }
            }
        }
    }

    return -1
}