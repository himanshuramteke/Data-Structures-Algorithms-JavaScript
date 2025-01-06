/**
 * Date:06-01-2025
 * 1769.Minimum Number of Operations to Move All Balls to Each Box(https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/?envType=daily-question&envId=2025-01-06)
 */ 

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length;
    const answer = new Array(n).fill(0);
    let moves = 0, balls = 0;

    for(let i = 0; i < n; i++) {
        answer[i] += moves;
        balls += boxes[i] === '1' ? 1 : 0;
        moves += balls;
    }

    moves = 0;
    balls = 0;

    for(let i = n-1; i >= 0; i--) {
        answer[i] += moves;
        balls += boxes[i] === '1' ? 1 : 0;
        moves += balls;
    }
    return answer;
};