/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max = 0;
    const stringObj = {};
    let currentWord = "";
    let i=0;
    while (i < s.length){
        if ( !stringObj[s[i]] || stringObj[s[i]] === 0){
            stringObj[s[i]] = 1;
            currentWord += s[i];
            i++;
        }   
        else {
            max = Math.max(max, currentWord.length);
            
            while (currentWord[0] !== s[i]){
                stringObj[currentWord[0]] -= 1;
                currentWord = currentWord.slice(1);
            }
            stringObj[currentWord[0]] -= 1;
            currentWord = currentWord.slice(1);
        }
    }
    max = Math.max(max, currentWord.length);
    return max;
};