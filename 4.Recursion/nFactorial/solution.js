/*
Given a value of n integer. Calculate n! recursively.
Let's say f is a function which takes a value n as an argument and can calculate n!.
*/

function f(n) {
    if (n == 1) {
        return 1;
    }
    return n * f(n-1);
}
console.log(f(7));

