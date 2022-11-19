var characterReplacement = function(s, k) {
    const obj = {};
    let max = 0;
    let word = "";
    let slicedMaxRepeat = 1;
    
    let i=0;
    while( i < s.length ) {
        if ( !obj[s[i]] || obj[s[i]] === 0){
            obj[s[i]] = 1;
        }   else {
            obj[s[i]] += 1;
            slicedMaxRepeat = Math.max(slicedMaxRepeat, obj[s[i]]);
        }
        
        word += s[i];
        
        if ( word.length > k + slicedMaxRepeat ){
            max = Math.max(max, word.length - 1);
            obj[word[0]] -= 1;
            word = word.slice(1);
        }
        i++;
    }
    max = Math.max(max, word.length);
    return max;
};