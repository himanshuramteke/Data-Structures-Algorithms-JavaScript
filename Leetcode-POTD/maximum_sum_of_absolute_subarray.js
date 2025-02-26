/**
 * Date:26-02-2025
 * 1749.Maximum Absolute Sum of Any Subarray.(https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/?envType=daily-question&envId=2025-02-26)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let maxSum = 0, minSum = 0, currMax = 0, currMin = 0;

    for (let num of nums) {
        currMax = Math.max(num, currMax + num);
        maxSum = Math.max(maxSum, currMax);

        currMin = Math.min(num, currMin + num);
        minSum = Math.min(minSum, currMin);
    }

    return Math.max(maxSum, Math.abs(minSum));
};