/**
 * Date: 03-01-2025
 * 2270.Number of Ways to Split Array(https://leetcode.com/problems/number-of-ways-to-split-array/description/?envType=live)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const n = nums.length;
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;
    let validSplits = 0;

    for(let i=0; i< n - 1; i++) {
        leftSum += nums[i];
        const rightSum = totalSum - leftSum;
        if(leftSum >= rightSum) {
            validSplits++;
        }
    }
    return validSplits;
};