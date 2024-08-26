/*
Given a string of digits,Calculate the sum of digits of the string.
Ex:-"1234"
ans=10;
*/

function sumOfDigits(str) {
    // Base case: If the string is empty, return 0
    if (str.length === 0) return 0;

    // Convert the first character to a number and add it to the sum of the rest
    return parseInt(str[0]) + sumOfDigits(str.slice(1));
}

console.log(sumOfDigits("1234")); // Output: 10
console.log(sumOfDigits("5678")); // Output: 26
