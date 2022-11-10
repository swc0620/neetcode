/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    const obj = {};
    numbers.forEach((e, idx) => {
        obj[target - e] = idx + 1;
    })
    
    for (let i=0; i<numbers.length; i++){
        if (obj[numbers[i]]!==undefined && i+1 !== obj[numbers[i]]){
            return [obj[numbers[i]], i+1].sort((a, b) => a-b)
        }
    }
};