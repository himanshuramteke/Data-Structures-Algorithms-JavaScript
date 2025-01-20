/**
 * Date:20-1-25
 * 2661.First completely painted row or column.(https://leetcode.com/problems/first-completely-painted-row-or-column/description/?envType=daily-question&envId=2025-01-20)
 */

/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const m = mat.length;
    const n = mat[0].length;
 
    const positionMap = new Map();
    for (let i = 0; i < m; i++) {
         for (let j = 0; j < n; j++) {
             positionMap.set(mat[i][j], [i, j]);
         }
     }
     const rowCount = new Array(m).fill(0);
     const colCount = new Array(n).fill(0);
     for (let i = 0; i < arr.length; i++) {
         const [row, col] = positionMap.get(arr[i]);
 
         rowCount[row]++;
         colCount[col]++;
 
         if (rowCount[row] === n || colCount[col] === m) {
             return i;
         }
     }
 
     return -1;
 };