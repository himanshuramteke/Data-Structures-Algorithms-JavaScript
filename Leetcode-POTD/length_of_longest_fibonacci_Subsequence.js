/**
 * Date:27-02-2025
 * 873. Length of a longest Fibonacci subsequence(https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/?envType=daily-question&envId=2025-02-27)
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let indexMap = new Map(); 
    let n = arr.length;
    let dp = Array.from({ length: n }, () => new Array(n).fill(2));
    let maxLength = 0;

    for (let i = 0; i < n; i++) {
        indexMap.set(arr[i], i);
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let z = arr[i] - arr[j];

            if (indexMap.has(z) && indexMap.get(z) < j) {
                let k = indexMap.get(z);
                dp[j][i] = dp[k][j] + 1; 
                maxLength = Math.max(maxLength, dp[j][i]);
            }
        }
    }

    return maxLength >= 3 ? maxLength : 0;
};