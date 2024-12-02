/*
https://leetcode.com/problems/find-the-duplicate-number/
287. Find the Duplicate Number
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and using only constant extra space.
Example 1:
Input: nums = [1,3,4,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
let findDuplicate = function(arr) {
    let t = arr[0];
    let r = arr[0];
    do {
     t = arr[t];
     r = arr[arr[r]];
    } while (t != r);
    t = arr[0];
    while (t != r) {
     t = arr[t];
     r = arr[r];
    }
    return t;
 };