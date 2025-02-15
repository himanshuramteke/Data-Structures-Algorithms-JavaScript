/**
 * Date: 15-02-2025
 * 2698.Find the punishment Number of an Integer(https://leetcode.com/problems/find-the-punishment-number-of-an-integer/description/?envType=daily-question&envId=2025-02-15)
 */

/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    function canPartition(squareStr, target, index) {
        if (index === squareStr.length) return target === 0;
        
        let num = 0;
        for (let i = index; i < squareStr.length; i++) {
            num = num * 10 + (squareStr[i] - '0');
            if (num > target) break;
            if (canPartition(squareStr, target - num, i + 1)) return true;
        }
        return false;
    }
    
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        let square = i * i;
        if (canPartition(square.toString(), i, 0)) {
            totalSum += square;
        }
    }
    return totalSum;
};