/**
 * Date: 19-02-2025
 * 1415.The k-th Lexicographical String of All Happy Strings of Length n(https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/description/?envType=daily-question&envId=2025-02-19)
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let result = [];

    function backtrack(current) {
        if(current.length === n) {
            result.push(current);
            return;
        }
        for (let char of ['a', 'b', 'c']) {
            if (current.length === 0 || current[current.length - 1] !== char) {
                backtrack(current + char);
            }
        }
    }

    backtrack("");
    
    return result.length >= k ? result[k - 1] : "";
};