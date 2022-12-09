// 242. Valid Anagram solution in GoLang
// https://leetcode.com/problems/valid-anagram/description/

func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }

    string_map := make(map[rune]int)

    for _, char_s := range s {
        string_map[char_s]++
    }

    for _, char_t := range t {
        string_map[char_t]--
    }

    for _, count := range string_map {
        if count != 0 {
            return false
        }
    }

    return true
}