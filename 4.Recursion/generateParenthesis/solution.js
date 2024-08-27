/*
https://leetcode.com/problems/generate-parentheses/
22. Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

Constraints:

1 <= n <= 8
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

   function generate(currentString, openCount, closeCount) {
       // Base case: if the current string length equals n * 2, it's a valid combination
       if (currentString.length === n * 2) {
           result.push(currentString);
           return;
       }

       // Recursive case 1: add an opening parenthesis if possible
       if (openCount < n) {
           generate(currentString + "(", openCount + 1, closeCount);
       }

       // Recursive case 2: add a closing parenthesis if possible
       if (closeCount < openCount) {
           generate(currentString + ")", openCount, closeCount + 1);
       }
   }

   // Start the recursion with an empty string and counts set to 0
   generate("", 0, 0);
   return result;
};