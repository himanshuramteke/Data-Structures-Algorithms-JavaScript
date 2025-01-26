/**
 * Date:26-1-2025
 * 2127.Maximum employees invited in a meeting(https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/description/?envType=daily-question&envId=2025-01-26)
 */

/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations =  (fav, n = fav.length) => {
    let inDegree = new Array(n).fill(0), pairs = [], reverseMap = {}, maxResult = 0;
 
     for (let i = 0; i < n; i++) {
         inDegree[fav[i]]++;
         if (fav[fav[i]] === i && fav[i] > i) {
             pairs.push([i, fav[i]]);
         }
         if (!(fav[i] in reverseMap)) {
             reverseMap[fav[i]] = [];
         }
         reverseMap[fav[i]].push(i);
     }
 
     let stack = [];
     for (let i = 0; i < n; i++) {
         if (inDegree[i] === 0) {
             stack.push(i);
         }
     }
 
     while (stack.length > 0) {
         let current = stack.pop();
         inDegree[fav[current]]--;
         if (inDegree[fav[current]] === 0) {
             stack.push(fav[current]);
         }
     }
 
     for (let i = 0; i < n; i++) {
         if (inDegree[i] === 1) {
             let count = 1, start = i;
             while (fav[start] !== i) {
                 inDegree[start]--;
                 start = fav[start];
                 count++;
             }
             maxResult = Math.max(maxResult, count);
         }
     }
 
     let pairSum = 0;
     for (let pair of pairs) {
         const maxChain = [1, 1];
         for (let i = 0; i < 2; i++) {
             let stack = [[pair[i], 1]];
             while (stack.length > 0) {
                 let [current, length] = stack.pop();
                 if (!(current in reverseMap)) {
                     maxChain[i] = Math.max(maxChain[i], length);
                     continue;
                 }
                 for (let neighbor of reverseMap[current]) {
                     if (neighbor === fav[pair[i]]) continue;
                     stack.push([neighbor, length + 1]);
                 }
             }
         }
         pairSum += maxChain[0] + maxChain[1];
     }
 
     maxResult = Math.max(maxResult, pairSum);
 
     return maxResult;
 };