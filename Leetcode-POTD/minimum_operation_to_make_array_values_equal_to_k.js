/**
 * Date: 09-04-2025
 * 3375.Minimum operation to make array values equal to k(https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/?envType=daily-question&envId=2025-04-09)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    // Step 1: If any value is less than k, return -1
   for (let num of nums) {
       if (num < k) return -1;
   }

   // Step 2: Frequency map
   const freq = new Array(101).fill(0);
   for (let num of nums) {
       freq[num]++;
   }

   let operations = 0;
   let totalAbove = 0;
   let lastSeen = -1;

   // Step 3: Traverse from 100 down to k+1
   for (let val = 100; val > k; val--) {
       if (freq[val] > 0) {
           if (lastSeen === -1) {
               lastSeen = val; // first value greater than k
           } else if (lastSeen !== val) {
               // If we have more than one distinct value > current
               operations++;
               lastSeen = val;
           }
           totalAbove += freq[val];
       }
   }

   // If any values above k were processed
   if (totalAbove > 0) {
       operations++; // Final operation to bring all to k
   }

   return operations;
};