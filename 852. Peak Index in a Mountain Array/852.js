// 852. Peak Index in a Mountain Array solution in JavaScript
// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};