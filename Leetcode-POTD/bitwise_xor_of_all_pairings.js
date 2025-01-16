/**
 * Date:16-1-2025
 *  2425.Bitwise XOR of all the Pairings(https://leetcode.com/problems/bitwise-xor-of-all-pairings/description/?envType=daily-question&envId=2025-01-16)   
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    let xor1 = 0, xor2 = 0;
 
    for(const num of nums1) {
      xor1 ^= num;
    } 
 
    for(const num of nums2) {
      xor2 ^= num;
    }
 
    let result = 0;
    if (nums2.length % 2 !== 0) {
     result ^= xor1;
    }
 
     if (nums1.length % 2 !== 0) {
         result ^= xor2;
     }
     return result;
 };