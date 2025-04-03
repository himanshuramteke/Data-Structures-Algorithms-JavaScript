/**
 * Date: 03-04-2025
 * 2874.Maximum value of ordered triplet(https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/?envType=daily-question&envId=2025-04-03)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let maxValue = 0;
    let maxLeft = nums[0];  // Keeps track of the maximum nums[i] found so far
    let maxMiddle = new Array(nums.length).fill(0);  // Stores the max (nums[i] - nums[j])

    // Precompute max (nums[i] - nums[j]) for all j
    for (let j = 1; j < nums.length - 1; j++) {
        maxMiddle[j] = Math.max(maxMiddle[j - 1], maxLeft - nums[j]);
        maxLeft = Math.max(maxLeft, nums[j]);
    }

    // Find the max value of (nums[i] - nums[j]) * nums[k]
    for (let k = 2; k < nums.length; k++) {
        maxValue = Math.max(maxValue, maxMiddle[k - 1] * nums[k]);
    }

    return maxValue; 
};