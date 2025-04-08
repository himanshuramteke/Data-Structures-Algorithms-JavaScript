/**
 * Date: 08-04-2025
 * 3396.Minimum Number of Operations to Make Elements in Array Distinct(https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/?envType=daily-question&envId=2025-04-08)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let op = 0;
    while(new Set(nums).size !== nums.length) {
        nums.splice(0, 3);
        op++;
    }
    return op;
};