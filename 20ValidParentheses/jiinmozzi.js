/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    const parentheses = { '{' : '}', '[' : ']', '(' : ')'};
    for ( let i=0; i<s.length; i++ ){
        if (s[i] === "(" || s[i] === "[" || s[i] === "{"){
            stack.push(s[i]);
        }   else {
            if ( s[i] !== parentheses[stack.pop()] ){
                return false;
            }
        }
        
    }
    if (stack.length === 0) return true;
    return false;
};