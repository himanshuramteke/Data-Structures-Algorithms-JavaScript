/**
 * Date:01-04-2025
 * 2140.Solving question with brainpower(https://leetcode.com/problems/solving-questions-with-brainpower/description/?envType=daily-question&envId=2025-04-01)  
 * 
 * 
 */    

/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const n = questions.length;
    const dp = new Array(n).fill(0);
    dp[n - 1] = questions[n - 1][0]; // Base case: last question
    
    for (let i = n - 2; i >= 0; i--) {
        const [points, brainpower] = questions[i];
        const nextQuestion = i + brainpower + 1;
        const ifSolve = points + (nextQuestion < n ? dp[nextQuestion] : 0);
        const ifSkip = dp[i + 1];
        dp[i] = Math.max(ifSolve, ifSkip);
    }
    
    return dp[0];
};