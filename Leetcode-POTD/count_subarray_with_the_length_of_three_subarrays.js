/**
 * Date: 27-04-2025
 * 3392. Count Subarrays of Length Three With a Condition(https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/?envType=daily-question&envId=2025-04-27)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let count = 0;
      for (let i = 0; i <= nums.length - 3; i++) {
        let first = nums[i];
        let middle = nums[i + 1];
        let third = nums[i + 2];

        if (first + third === middle / 2) {
            count++;
        }
    }

    return count;
};