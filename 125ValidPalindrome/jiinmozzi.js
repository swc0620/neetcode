/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let left = 0;
    let right = s.length -1; 
    
    while (left < right){
        while (
            !(ascii = s[left].charCodeAt(0) > 47 && s[left].charCodeAt(0) < 58)
            && !(ascii = s[left].charCodeAt(0) > 64 && s[left].charCodeAt(0) < 91)
            && !(ascii = s[left].charCodeAt(0) > 96 && s[left].charCodeAt(0) < 123)
            && left < s.length -1
        ){
            left++;
        }
        while (
            !(ascii = s[right].charCodeAt(0) > 47 && s[right].charCodeAt(0) < 58)
            && !(ascii = s[right].charCodeAt(0) > 64 && s[right].charCodeAt(0) < 91)
            && !(ascii = s[right].charCodeAt(0) > 96 && s[right].charCodeAt(0) < 123)
            && right > 0
        ){
            right--;
        }
        // case when right index gets bigger than left one.
        if (left > right){
            return true;
        }

        // case when both are alphabets.
        if (s[left].charCodeAt(0) > 64 && s[right].charCodeAt(0) > 64){
            if (s[left].toLowerCase() === s[right].toLowerCase()){
                left++;
                right--;
                continue;
            }   else {
                return false;
            }
        }
        // when both are numbers
        if (s[left].charCodeAt(0) < 58 && s[right].charCodeAt(0) < 58 && s[left] === s[right]){
            left++;
            right--;
            continue;
        }   else {
            return false;
        }
    }
    return true;
};
