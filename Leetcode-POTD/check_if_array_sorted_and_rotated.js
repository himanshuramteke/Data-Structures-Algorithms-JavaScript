/**
 * Date:02-02-2025
 * 1752.Check if Array is sorted and rotated(https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/?envType=daily-question&envId=2025-02-02)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;
    let n = nums.length;
    for(let i=0; i<n; i++) {
        if(nums[i] > nums[(i+1) % n]) {
            count ++;
        }
    }
    return count <= 1;
};