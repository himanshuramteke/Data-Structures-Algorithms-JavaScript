/**
 * Date:2379.Minimum Recolors to get consective black blocks(https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/?envType=daily-question&envId=2025-03-08)
 */

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let minRecolors = Infinity;
    let whiteCount = 0;

    for(let i=0; i<k; i++) {
        if (blocks[i] === 'W') whiteCount++;
    }
     minRecolors = whiteCount;
    for (let i = k; i < blocks.length; i++) {
        if (blocks[i] === 'W') whiteCount++;
        if (blocks[i - k] === 'W') whiteCount--;
        
        minRecolors = Math.min(minRecolors, whiteCount);
    }
    
    return minRecolors; 
};