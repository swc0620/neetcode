/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (s2.length < s1.length)  return false;
    const arrS1 = new Array(26).fill(0);
    const arrS2 = new Array(26).fill(0);
    for (let i=0; i<s1.length; i++){
        arrS1[alphabet.indexOf(s1[i])] += 1;
        arrS2[alphabet.indexOf(s2[i])] += 1;
    }
    
    let match = 0; 
    for (let i=0; i<26; i++){
        if ( arrS1[i] === arrS2[i] ) match += 1;
    }
    // initial match
    if (match === 26){
        return true;
    }

    for (let i=0; i<s2.length - s1.length; i++){
    
        const newChar = s2[i + s1.length];
        const oldChar = s2[i];
        const newCharIdx = alphabet.indexOf(newChar);
        const oldCharIdx = alphabet.indexOf(oldChar); 
        // console.log('--------------------')
        // console.log(arrS1, arrS2)
        // console.log(newCharIdx, oldCharIdx);
        // console.log(match)    
        // console.log('--------------------')
        arrS2[newCharIdx] += 1;
        
        // check if adding new char made a match or mismatch
        if (arrS2[newCharIdx] === arrS1[newCharIdx]){
            match += 1;
        }   else if (arrS2[newCharIdx] === arrS1[newCharIdx] + 1){
            match -= 1;
        }

        // arrS2[newCharIdx] ++ , arrS2[oldCharIdx]-- 같이 있으면 같은 문자 들어왔을때 +2;
        arrS2[oldCharIdx] -= 1;
        // check if removing old char made a match or mismatch
        if (arrS2[oldCharIdx] === arrS1[oldCharIdx]){
            match += 1;
        }   else if (arrS2[oldCharIdx] === arrS1[oldCharIdx] - 1){
            match -= 1;
        }

        if (match === 26){
            return true;
        }
    }
    return false;
};