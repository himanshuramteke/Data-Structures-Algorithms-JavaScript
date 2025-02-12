/**
 * Date:12-02-2025
 * 2342.Max Sum of a Pair with Equal Sum of Digits(https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/description/?envType=daily-question&envId=2025-02-12)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const sumMap = new Map();
    let maxSum = -1;

    function getDigitSum(num) {
        return num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    }

    for(let num of nums) {
        let digitSum = getDigitSum(num);

        if(sumMap.has(digitSum)) {
            maxSum = Math.max(maxSum, sumMap.get(digitSum) + num);
            sumMap.set(digitSum, Math.max(sumMap.get(digitSum), num));
        } else {
            sumMap.set(digitSum, num);
        }    
    }
    return maxSum;
};