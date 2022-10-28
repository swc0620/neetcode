var isAnagram = function(s, t) {
    const sText = s.split("");
    const tText = t.split("");
    
    const obj = {};
    for(let i=0; i<sText.length; i++){
        if (!obj[sText[i]]){
            obj[sText[i]] = 1;
        }   else {
            obj[sText[i]] +=1;
        }
    }
    for (let i=0; i<tText.length; i++){
        obj[tText[i]] -= 1;
    }
    const keys = Object.keys(obj);
    for (let i=0; i<keys.length; i++){
        if (obj[keys[i]] !== 0){
            return false;
        }
    }
    return true;
};