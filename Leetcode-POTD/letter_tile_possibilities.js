/**
 * Date: 17-02-2025
 * 1079.Letter Tile Possibilities(https://leetcode.com/problems/letter-tile-possibilities/description/?envType=daily-question&envId=2025-02-17)
 */

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let freqMap = new Map();
    for (let ch of tiles) {
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    }
    
    return backtrack(freqMap);
  };

  function backtrack(freqMap) {
    let count = 0;
    
    for (let [ch, freq] of freqMap.entries()) {
        if (freq > 0) {
            // Choose the character
            freqMap.set(ch, freq - 1);
            count += 1 + backtrack(freqMap); // 1 for current sequence, rest from recursion
            // Backtrack
            freqMap.set(ch, freq);
        }
    }
    
    return count;

};