/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const obj = {}
    nums.forEach((num, idx) => {
        obj[num] = idx;
    })
    
    for (let i=0; i<nums.length; i++){
        if (obj[target - nums[i]] && obj[target-nums[i]] !== i){
            return [obj[target-nums[i]], i];
        }
    }
};