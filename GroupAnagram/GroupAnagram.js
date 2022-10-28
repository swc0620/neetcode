/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const obj = {};
    strs.forEach(str => {
        const ascendingOrderedWord = str.split('').sort().join('');
        if (obj[ascendingOrderedWord]){
            obj[ascendingOrderedWord].push(str);
        }   else {
            obj[ascendingOrderedWord] = [str];
        }
    })
    
    return Object.values(obj);
};