/**
 * Date:11-05-2025
 * 1550.Three Consecutives Odds(https://leetcode.com/problems/three-consecutive-odds/?envType=daily-question&envId=2025-05-11)
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
      return true;
    }
  }
  return false;
};