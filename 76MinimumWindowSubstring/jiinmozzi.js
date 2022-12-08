/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const arrT = new Array(52).fill(0);
    const arrS = new Array(52).fill(0);
    
    for (let i=0; i<t.length; i++){
        arrT[chars.indexOf(t[i])]++;
        arrS[chars.indexOf(s[i])]++;
    }

    let match = 0;
    for (let i=0; i<52; i++){
        if (arrT[i] <= arrS[i]) match++;
    }

    let minLength = 100001;
    let minLengthString = "";

    if (match === 52)   return s.slice(0, t.length);
    
    let init = 0;
    for (let i=0; i<s.length - t.length; i++){
        const newChar = s[i + t.length];
        const newCharIdx = chars.indexOf(newChar);

        arrS[newCharIdx]++;
        if (arrS[newCharIdx] === arrT[newCharIdx]) match++;
        
        if (match === 52)
        {
            while ( arrS[chars.indexOf(s[init])] > arrT[chars.indexOf(s[init])]){
                arrS[chars.indexOf(s[init])]--;
                init++;
            }
            if ( minLength > t.length + i + 1 - init ){
                minLength = t.length + i + 1 - init;
                minLengthString = s.slice(init, t.length + i + 1);
                arrS[chars.indexOf(s[init])]--;
                match--;
                init++;
            }
        }
    }
    if (minLength === 100001) return "";
    else return minLengthString;
    
};