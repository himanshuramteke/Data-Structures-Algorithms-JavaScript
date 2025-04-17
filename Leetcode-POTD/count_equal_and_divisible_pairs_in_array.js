/**
 * Date: 17-04-2025
 * 2176.Count Equal and Divisible Pairs in an array(https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/?envType=daily-question&envId=2025-04-17)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0;
    let n = nums.length;
    for(let i=0; i<n; i++) {
       for(let j=i+1; j<n; j++) {
        if(nums[i] === nums[j] && (i * j) % k === 0) {
            count++;
        }
       }
    }
    return count;
};