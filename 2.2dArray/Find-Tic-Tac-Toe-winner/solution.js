/*
1275. Find Winner on a Tic Tac Toe Game;
https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:
Players take turns placing characters into empty squares ' '.
The first player A always places 'X' characters, while the second player B always places 'O' characters.
'X' and 'O' characters are always placed into empty squares, never on filled ones.
The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".
You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.
Example 1:
Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: A wins, they always play first.
*/

/**
 * @param {number[][]} moves
 * @return {string}
 */
let mp = {
    'A': 'X',
    'B': '0'
} 
function winCheck(grid, player) {
    //check rows
    //row0
    if(grid[0][0] == mp[player] && grid[0][1] == mp[player] && grid[0][2] == mp[player]) {
        return true;
    }
    //row1
    if(grid[1][0] == mp[player] && grid[1][1] == mp[player] && grid[1][2] == mp[player]) {
        return true;
    }
    //row2
    if(grid[2][0] == mp[player] && grid[2][1] == mp[player] && grid[2][2] == mp[player]) {
        return true;
    }
    //check col
    //col 0
    if(grid[0][0] == mp[player] && grid[1][0] == mp[player] && grid[2][0] == mp[player]) {
        return true;
    }  
    //col 1
    if(grid[0][1] == mp[player] && grid[1][1] == mp[player] && grid[2][1] == mp[player]) {
        return true;
    }
    //col 2
    if(grid[0][2] == mp[player] && grid[1][2] == mp[player] && grid[2][2] == mp[player]) {
        return true;
    }

    //check diagonals

    if(grid[0][0] == mp[player] && grid[1][1] == mp[player] && grid[2][2] == mp[player]) {
        return true;
    }
    if(grid[0][2] == mp[player] && grid[1][1] == mp[player] && grid[2][0] == mp[player]) {
        return true;
    }
    return false;
 }; 

var tictactoe = function(moves) {
    let turn = 0;
    let grid = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    let count = 0;
    for(let i = 0; i < moves.length; i++) {
        let currMove = moves[i];
        let x = currMove[0];
        let y = currMove[1];
        let player = (turn == 0) ? 'A' : 'B';
        if(turn == 0 && grid[x][y] == ' ') {
            grid[x][y] = 'X';
        } else if(turn == 1 && grid[x][y] == ' ') {
            grid[x][y] = '0';
        }
        count++;
        let doesPlayerWin = winCheck(grid, player);
        if(doesPlayerWin) {
            return player;
        }
        if (count == 9) {
            return "Draw";
        }
        turn = (turn + 1) % 2;
    }
    return "Pending";
};