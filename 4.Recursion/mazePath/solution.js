/*
Let's say you are standing on the top left corner of a grid having dimension nxm.Find the total no. of ways in which you can reach the bottom right.Given the fact that from any cell of the grid you can move one step down or one step right.
*/

function f(i, j, n, m) {
    if(i == n-1 && j == m-1) return 1;
    if(i >= n || j >= m) return 0;
    return f(i, j+1, n,m) + f (i+1, j, n,m);
}

console.log(f(0, 0, 3,3))