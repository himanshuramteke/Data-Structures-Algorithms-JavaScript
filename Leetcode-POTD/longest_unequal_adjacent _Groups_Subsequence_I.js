/**
 * Date:15-05-2025
 * 2900.Longest Unequal Adjacent Groups Subsequence I(https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/?envType=daily-question&envId=2025-05-15)
 */

/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const result = [];

    for (let i = 0; i < words.length; i++) {
        if (result.length === 0) {
            result.push({ word: words[i], group: groups[i] });
        } else {
            const lastGroup = result[result.length - 1].group;
            if (groups[i] !== lastGroup) {
                result.push({ word: words[i], group: groups[i] });
            }
        }
    }

    // Return only the words from the result
    return result.map(item => item.word);
};