/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const dp = [
        [["(", 1, 1]]
    ];
    for (let i=1; i<2*n; i++){
        const arr = [];
        for (let k=0; k<dp[i-1].length; k++){
            // "("의 개수가 다 찬 경우
            if (dp[i-1][k][1] >= n){
                arr.push([dp[i-1][k][0] + ")", dp[i-1][k][1], dp[i-1][k][2] - 1]);
                continue;
            }
            // "("이 다 차지 않고 "("와 ")"의 개수가 똑같은 경우
            if (dp[i-1][k][2] === 0){
                arr.push([dp[i-1][k][0] + "(", dp[i-1][k][1] + 1, dp[i-1][k][2] + 1]);
                continue;
            }
            // "("이 다 차지 않고 "("의 개수가 더 많은 경우
            if (dp[i-1][k][1] >= 1){
                arr.push([dp[i-1][k][0] + "(", dp[i-1][k][1] + 1, dp[i-1][k][2] + 1]);
                arr.push([dp[i-1][k][0] + ")", dp[i-1][k][1], dp[i-1][k][2] - 1]);
            }
        }
        dp.push(arr);
    }
    const result = dp[2*n-1].map(e => e[0]);
    return result;
};

