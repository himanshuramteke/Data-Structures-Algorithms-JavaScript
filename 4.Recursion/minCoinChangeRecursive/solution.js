/*
Consider a money system consisting of n coins.Each coin has a positive integer value.Your task is to produce a sum of money x using the available coins in such way that the number of coins is minimal.
for e.g, if the coins are {1,5,7} and desired sum is 11, an optimal solutions is 5+5+1 which requires 3 coins.
Input: The first input line has two integers n and x; the number of coins and teh desired sum of the money. the second line has n distinct integers c1, c2,.....cn; the value of each coin.
Output: Print one integer: the minimum number of coins.If it is not possible to produce the desired sum , print - 1;
Ex:- n = 3 x = 11
[1,5,7]
ans=3
*/


// function f(coins, x) {
//     //base case 
//     if(x == 0) return 0;
//     let result = Infinity;
//     for (let i = 0; i < coins.length; i++) {
//         if (x - coins[i] < 0 ) continue;
//         result = Math.min(result, f(coins, x - coins[i]));
//     }
//     return 1 + result;
// }

// console.log(f([1,5,7]),11);  This is not working.

function f(coins, x, memo = {}) {
    // base case
    if (x == 0) return 0;

    // check if result is already calculated
    if (x in memo) return memo[x];

    let result = Infinity;

    for (let i = 0; i < coins.length; i++) {
        if (x - coins[i] >= 0) {
            result = Math.min(result, f(coins, x - coins[i], memo));
        }
    }

    // store the result in memoization object
    memo[x] = 1 + result;
    return memo[x];
}

// Example usage
console.log(f([1, 5, 7], 11)); // Output: 3


