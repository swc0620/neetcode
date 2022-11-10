/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const results = []; 
    nums.sort((a,b) => a-b);

    const firstNonNegativeIndex = nums.findIndex(e => e>= 0);
    const negatives = nums.slice(0, firstNonNegativeIndex);
    const nonNegatives = nums.slice(firstNonNegativeIndex);
    
    for (let i=0; i<negatives.length; i++){
        if (negatives[i] === negatives[i + 1]) continue;
        let target = negatives[i] * (-1); 
        const obj = {};
        for (let i=0; i<nonNegatives.length; i++){
            obj[target-nonNegatives[i]] = i;
        }
        for (let i=0; i<nonNegatives.length; i++){
            if (obj[nonNegatives[i]] !== undefined && obj[nonNegatives[i]] !== i){
                results.push([target*(-1), target-nonNegatives[i], nonNegatives[i]].sort((a,b) => a-b))
                delete obj[target - nonNegatives[i]];
                delete obj[nonNegatives[i]];
            }
        }
    }

    for (let i=0; i<nonNegatives.length; i++){
        if (nonNegatives[i] === nonNegatives[i + 1]) continue;
        let target = nonNegatives[i] * (-1); 
        const obj = {};
        for (let i=0; i<negatives.length; i++){
            obj[target-negatives[i]] = i;
        }
        for (let i=0; i<negatives.length; i++){
            if (obj[negatives[i]] !== undefined && obj[negatives[i]] !== i){
                results.push([target*(-1), target-negatives[i], negatives[i]].sort((a,b) => a-b))
                delete obj[target - negatives[i]];
                delete obj[negatives[i]];
            }
        }
    }

    // in case there are three zeros
    if (nonNegatives[2] === 0){
        results.push([0,0,0]);
    }
    return results
};