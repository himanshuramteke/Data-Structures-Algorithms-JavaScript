/*
169. Majority Element;
https://leetcode.com/problems/majority-element/
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:
Input: nums = [3,2,3]
Output: 3
Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let currPossibleMajority = -1;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if (count == 0) {
            currPossibleMajority = nums[i];
        }
        if (currPossibleMajority == nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return currPossibleMajority;
};