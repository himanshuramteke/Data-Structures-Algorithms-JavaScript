/**
 * Date:04-01-2025
 * 1930.Unique Length-3 Palindromic Subsequences(https://leetcode.com/problems/unique-length-3-palindromic-subsequences/description/?envType=live)
 */

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const leftSet = new Set();
    const uniquePalindromes = new Set();

    const aCode = "a".charCodeAt(0);
    const rightMap = new Map();
    for (const char of s) {
        rightMap.set(char, (rightMap.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        const midChar = s[i];
        rightMap.set(midChar, rightMap.get(midChar) - 1);
        if (rightMap.get(midChar) === 0) {
            rightMap.delete(midChar);
        }

        for (let charCode = 0; charCode < 26; charCode++) {
            const leftChar = String.fromCharCode(aCode + charCode);

            if (leftSet.has(leftChar) && rightMap.has(leftChar)) {
                uniquePalindromes.add(`${leftChar}${midChar}${leftChar}`);
            }
        }

        leftSet.add(midChar);
    }

    return uniquePalindromes.size;
};