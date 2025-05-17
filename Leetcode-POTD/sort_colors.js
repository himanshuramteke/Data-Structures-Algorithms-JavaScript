/**
 * Date: 17-05-2025
 * 75.Sort Colors(https://leetcode.com/problems/sort-colors/?envType=daily-question&envId=2025-05-17)
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]]; // Swap elements
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]]; // Swap elements
            high--;
        }
    }
};