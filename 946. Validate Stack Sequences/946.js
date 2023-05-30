// 946. Validate Stack Sequences solution in JavaScript
// https://leetcode.com/problems/validate-stack-sequences/description/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let len = pushed.length;
    let j = 0;

    for (let i = 0; i < len; i++) {
        stack.push(pushed[i]);

        while (stack.length > 0 && stack[stack.length - 1] == popped[j]) {
            stack.pop();
            j++;
        }
    }

    return stack.length === 0;
};