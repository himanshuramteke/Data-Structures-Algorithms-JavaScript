/**
 * Date: 16-02-2025
 * 1718.Construct the Lexicographically Largest Valid Sequence(https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/description/?envType=daily-question&envId=2025-02-16)
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
    const size = 2 * n-1;
    const result = new Array(size).fill(0);
    let used = 0; // Bitmask for used numbers
    
    const backtrack = (index) => {
        if (index === size) return true;
        if (result[index] !== 0) return backtrack(index + 1);
        
        for (let num = n; num >= 1; num--) {
            let bit = 1 << num;
            if (used & bit) continue; // Skip if num is already used
            
            if (num === 1) {
                result[index] = 1;
                used |= bit;
                if (backtrack(index + 1)) return true;
                result[index] = 0;
                used ^= bit;
            } else {
                let secondIndex = index + num;
                if (secondIndex < size && result[secondIndex] === 0) {
                    result[index] = result[secondIndex] = num;
                    used |= bit;
                    
                    if (backtrack(index + 1)) return true;
                    
                    result[index] = result[secondIndex] = 0;
                    used ^= bit;
                }
            }
        }
        return false;
    };
    
    backtrack(0);
    return result;
};