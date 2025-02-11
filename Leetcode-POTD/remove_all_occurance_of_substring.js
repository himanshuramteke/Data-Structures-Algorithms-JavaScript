/**
 * Date:11-02-2025
 * 1910.Remove all the occurences of the substring(https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/?envType=daily-question&envId=2025-02-11)
 */

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    while(s.includes(part)) {
        s = s.replace(part, '');
    }
    return s;
};