/**
 * Date:09-01-2025
 * 2185.Counting words with given prefix(https://leetcode.com/problems/counting-words-with-a-given-prefix/description/?envType=daily-question&envId=2025-01-09)
 */

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0;

    for(let word of words) {
        if(word.startsWith(pref)) {
            count++;
        };
    }
    return count;
};