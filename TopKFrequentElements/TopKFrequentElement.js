/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const answer = [];
    const obj = {};
    const arr = [];
    for (let i=0; i<nums.length; i++){
        if (obj[nums[i]]){
            obj[nums[i]] += 1;
        }   else {
            obj[nums[i]] = 1;
        }
        
        if (!arr[obj[nums[i]] -1 ]){
            arr[obj[nums[i]] - 1] = [];
        }
        
        const arrSpace = arr[obj[nums[i]] - 1];
        const idx = arrSpace.indexOf(nums[i]);
        if (idx !== -1){
            arrSpace.splice(idx, 1);
        }  
        if (!arr[obj[nums[i]]]){
            arr[obj[nums[i]]] = [];
        }
        arr[obj[nums[i]]].push(nums[i]);
    }
    
    
    
    const filteredArr = arr.filter(e => e.length > 0);
    console.log(filteredArr);
    let count = 0;
    
    for (let i=filteredArr.length-1; i>=0; i--){
        for (let j=filteredArr[i].length -1; j>=0; j--){
            answer.push(filteredArr[i][j]);
            count += 1;
            if (count === Number(k)){
                return answer;
            }
        }
    }
    
};