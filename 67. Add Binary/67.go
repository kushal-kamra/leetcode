// 67. Add Binary solution in GoLang
// https://leetcode.com/problems/add-binary/description/

package leetcode

func addBinary(a string, b string) string {
    result := ""
    i := len(a) - 1
    j := len(b) - 1
    carry := 0

    for i >= 0 || j >= 0 {
        sum := carry
        
        if i >= 0 && string(a[i]) == "1" {
            sum += 1
        }

        if j >= 0 && string(b[j]) == "1" {
            sum += 1
        }

        if sum % 2 == 1 {
            result = "1" + result
        } else {
            result = "0" + result
        }

        if sum < 2 {
            carry = 0
        } else {
            carry = 1
        }

        i--
        j--
    }

    if carry != 0 {
        result = "1" + result
    }

    return result
}