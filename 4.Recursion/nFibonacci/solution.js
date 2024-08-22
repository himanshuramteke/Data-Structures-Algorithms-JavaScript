/*
Given a value n(+ve integer), calculate the nth fibonacci recursively.
Ex:- n = 6 ans=8
*/

function f(n) {
    if (n==0 || n==1) return n;
    return f(n-1) + f(n-2);
}
console.log(f(6));