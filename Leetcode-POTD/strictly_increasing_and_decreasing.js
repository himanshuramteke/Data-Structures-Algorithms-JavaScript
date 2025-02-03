/**
 * Date:03-02-2025
 * 3105.Longest Strictly Increasing and Strictly Decreasing subarray(https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/?envType=daily-question&envId=2025-02-03)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let n = nums.length;
    if (n === 1) return 1;

    let inc = 1, dec = 1, maxLen = 1;

    for(let i=1; i<n; i++) {
       if (nums[i] > nums[i - 1]) {
        inc += 1;
        dec = 1;
       } else if (nums[i] < nums[i - 1]) {
         dec += 1;
         inc = 1;
       } else {
        inc = dec = 1;
       }
       maxLen = Math.max(maxLen, inc, dec)
    }
    return maxLen;
};