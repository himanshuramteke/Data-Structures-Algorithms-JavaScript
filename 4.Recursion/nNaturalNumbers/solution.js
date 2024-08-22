/*
Given a number n, print the first n natural numbers increasing order recursively.
Ex:-n=6 ans=1,2,3,4,5,6
*/

function f(n) {
    //base case
    if(n < 1) {
    //don't do anything
        return;
    }
    //recursive assumption
    f(n-1);
    console.log(n) ;
}
f(6);