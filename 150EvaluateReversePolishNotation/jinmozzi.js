/**
 * @param {string[]} tokens
 * @return {number}
 */

const calc = (operator, v1, v2) => {
    if (operator === "+"){
        return v1 + v2;
    }
    if (operator === "-"){
        return v1 - v2;
    }
    if (operator === "*"){
        return v1 * v2;
    }
    if (operator === "/"){
        return parseInt(v1/v2);
    }
}
var evalRPN = function(tokens) {
    const numbers = [];

    for (let i=0; i<tokens.length; i++){
        const val = tokens[i];
        if (val === "+" || val === "-" || val === "*" || val === "/"){
            const v2 = numbers.pop();
            const v1 = numbers.pop();
            numbers.push(calc(tokens[i], v1, v2));
        }   else {
            numbers.push(Number(tokens[i]));
        }
    }
    return numbers[0];
};

