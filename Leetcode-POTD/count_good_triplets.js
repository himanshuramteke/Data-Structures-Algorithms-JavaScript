/**
 * Date: 14-04-2025
 * 1534. Count Good Triplets(https://leetcode.com/problems/count-good-triplets/?envType=daily-question&envId=2025-04-14)
 */

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    let n = arr.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            const ab = Math.abs(arr[i] - arr[j]);
            if (ab > a) continue; // skip if first condition fails early

            for (let k = j + 1; k < n; k++) {
                const bc = Math.abs(arr[j] - arr[k]);
                if (bc > b) continue;

                const ac = Math.abs(arr[i] - arr[k]);
                if (ac <= c) {
                    count++;
                }
            }
        }
    }

    return count;
};