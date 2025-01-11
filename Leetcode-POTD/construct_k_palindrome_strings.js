/**
 * Date:11-01-2025
 * 1400.Construct K palindrome strings(https://leetcode.com/problems/construct-k-palindrome-strings/description/?envType=daily-question&envId=2025-01-11)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if(k > s.length) return false;

    const freq = new Map();
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    let oddCount = 0;
    for(const count of freq.values()) {
        if(count % 2 === 1) {
            oddCount++;
        }
    }

    return oddCount <= k;
};