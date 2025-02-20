/**
 * Date: 20-02-2025
 * 1980.Find unique Binary String(https://leetcode.com/problems/find-unique-binary-string/description/?envType=daily-question&envId=2025-02-20)
 */

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let n = nums.length;
    let result= "";

    for(let i=0; i<n; i++) {
        result += nums[i][i] === '0' ? '1' :'0';
    }
    return result;
};