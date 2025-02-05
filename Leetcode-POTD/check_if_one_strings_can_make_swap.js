/**
 * Date:05-02-2025
 * 1790.Check if One String Swap Can Make Strings Equal(https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/?envType=daily-question&envId=2025-02-05)
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;

    const diffIndices = [];
    for(let i=0; i<s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffIndices.push(i);
        }
        if (diffIndices.length > 2) {
            return false;
        }
    }
    if (diffIndices.length !== 2) {
        return false;
    }

    const [i, j] = diffIndices;
    return s1[i] === s2[j] && s1[j] === s2[i];
};