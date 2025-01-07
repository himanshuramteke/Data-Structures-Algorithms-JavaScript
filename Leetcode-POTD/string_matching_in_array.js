/**
 * Date:07-01-2025
 * 1408.String matching in array(https://leetcode.com/problems/string-matching-in-an-array/description/?envType=daily-question&envId=2025-01-07)
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const result = [];
    
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            // Check if words[i] is a substring of words[j] and i != j
            if (i !== j && words[j].includes(words[i])) {
                result.push(words[i]);
                break; // Avoid duplicates
            }
        }
    }
    
    return result;
};
