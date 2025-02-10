/**
 * Date: 10-02-2025
 * 3174.Clear Digits(https://leetcode.com/problems/clear-digits/?envType=daily-question&envId=2025-02-10)
 */

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let arr = s.split('');
    let j = 0;
    let n = s.length;
    for (let i=0; i<n; i++) {
        if (arr[i] >= '0' && arr[i] <= 9) {
            if (j > 0) j--;
        } else {
            arr[j++] = arr[i];
        }
    }

    return arr.slice(0, j).join('');
};