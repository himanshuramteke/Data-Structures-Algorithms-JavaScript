/*
448. Find All Numbers Disappeared in an Array
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:
Input: nums = [1,1]
Output: [2]
*/

var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let x = Math.abs(nums[i]);
        let idx = x - 1;
        if(nums[idx] > 0) {
          nums[idx] *= -1;
        }
    }   
       let result = [];
       for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0){
            result.push(i+1);
        }
    }
    return result;
};