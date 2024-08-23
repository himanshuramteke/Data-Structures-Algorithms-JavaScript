/*
386. Lexicographical Numbers;
https://leetcode.com/problems/lexicographical-numbers/
Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.
You must write an algorithm that runs in O(n) time and uses O(1) extra space. 
Example 1:
Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
Example 2:
Input: n = 2
Output: [1,2]
*/

/**
 * @param {number} n
 * @return {number[]}
 */
let arr;
function f(i, n) {
   if(i > n) return;
   if (i != 0) {
    arr.push(i);
   }
   for(let j = ((i == 0) ? 1 : 0); j <= 9; j++) {
    f(10 * i + j, n);
   }
}

var lexicalOrder = function(n) {
  arr = [];
  f(0, n);
  return arr;
};