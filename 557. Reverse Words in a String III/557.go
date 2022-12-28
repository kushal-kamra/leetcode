// 557. Reverse Words in a String III solution in GoLang
// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

package leetcode

func reverseWords(s string) string {
    words := strings.Split(s, " ")
    var result string

    for i := 0; i < len(words); i++ {
        if len(result) > 0 {
            result = result + " " + reverse(words[i])
        } else {
            result = result + reverse(words[i])
        }
    }

    return result
}

func reverse(word string) string {
    word_array := strings.Split(word, "");

    left, right := 0, len(word_array) - 1

    for left < right {
        temp := word_array[left]
        word_array[left] = word_array[right]
        word_array[right] = temp
        left++
        right--
    }

    return strings.Join(word_array, "")
}