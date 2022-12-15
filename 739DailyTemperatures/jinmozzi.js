/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // 뒤에서부터 stacks에 내림차순으로 정렬
    // 더 큰 것이 오면 순서대로 pop
    // 작은 것이 오면 last index로부터 몇 칸째인지
    const answer = [0]

    const stacks = [
        // array of [idx ,temperature]
        [temperatures.length - 1, temperatures[temperatures.length - 1]]
    ];
    for (let i=temperatures.length-2; i>=0; i--){
        while (stacks.length > 0 && temperatures[i] >= stacks[stacks.length - 1][1]){
            stacks.pop();
        }
        if (stacks.length === 0){
            answer.push(0);
        }   else {
            answer.push(stacks[stacks.length -1][0] - i);
        }
        stacks.push([i, temperatures[i]]);
             
    }
    const reverseAnswer = [];
    for (let i=temperatures.length-1; i>=0; i--){
        reverseAnswer.push(answer[i]);
    }
    return reverseAnswer;
};