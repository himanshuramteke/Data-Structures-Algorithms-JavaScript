/**
 * Date:01-02-2025
 * 3151.Special array 1(https://leetcode.com/problems/special-array-i/description/?envType=daily-question&envId=2025-02-01)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let n = nums.length;
    for(let i=1; i<n; i++) {
       if((nums[i] % 2) === (nums[i - 1] % 2)){
        return false;
       }
    }
    return true; 
};