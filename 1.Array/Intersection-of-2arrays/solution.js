/*
349. Intersection of Two Arrays;
https://leetcode.com/problems/intersection-of-two-arrays/
Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let freqNums1 = {};
    for(let i = 0; i < nums1.length; i++) {
        let element = nums1[i];
        if(freqNums1[element]) {
            freqNums1[element]++;
        } else {
            freqNums1[element] = 1;
        }
    }
    let freqNums2 = {};
    for(let i = 0; i < nums2.length; i++) {
        let element = nums2[i];
        if(freqNums1[element]) {
            freqNums2[element] = 1;
        }
    }
    return Object.keys(freqNums2);
};