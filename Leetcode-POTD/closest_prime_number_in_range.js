/**
 * Date: 07-03-2025
 * 2523.Closest Prime Numbers in Range(https://leetcode.com/problems/closest-prime-numbers-in-range/description/?envType=daily-question&envId=2025-03-07)
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    function isPrime(n) {
       if (n < 2) return false;
       for (let i = 2; i * i <= n; i++) {
           if (n % i === 0) return false;
       }
       return true;
   }

   const primes = [];
   for (let i = left; i <= right; i++) {
       if (isPrime(i)) {
           primes.push(i);
       }
   }

   if (primes.length < 2) {
       return [-1, -1];
   }

   let minDiff = Infinity;
   let result = [-1, -1];

   for (let i = 1; i < primes.length; i++) {
       const diff = primes[i] - primes[i - 1];
       if (diff < minDiff) {
           minDiff = diff;
           result = [primes[i - 1], primes[i]];
       }
   }

   return result;
};