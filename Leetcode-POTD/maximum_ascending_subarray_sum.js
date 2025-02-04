/**
 * Date:04-02-2025
 * 1800.Maximum Ascending Subarray sum(https://leetcode.com/problems/maximum-ascending-subarray-sum/description/?envType=daily-question&envId=2025-02-04)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    if (nums.length === 0) return 0;

    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentSum += nums[i];
        } else {
            currentSum = nums[i];
        }
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};