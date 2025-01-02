/**
 * Date: 02-02-2025
 * 2559.Count Vowels Strings in range(https://leetcode.com/problems/count-vowel-strings-in-ranges/description/?envType=daily-question&envId=2025-01-02)
 * 
*/

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
   
   const isVowelString = (word) => 
       vowels.has(word[0]) && vowels.has(word[word.length - 1]);

   const prefixSum = new Array(words.length + 1).fill(0);
   for (let i = 0; i < words.length; i++) {
       prefixSum[i + 1] = prefixSum[i] + (isVowelString(words[i]) ? 1 : 0);
   }

   const result = [];
   for (const [li, ri] of queries) {
       result.push(prefixSum[ri + 1] - prefixSum[li]);
   }

   return result;
};