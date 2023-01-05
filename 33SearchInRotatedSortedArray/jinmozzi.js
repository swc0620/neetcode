/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 1){
        if (target === nums[0]) return 0;
        else return -1;
    }
    let minLeft = 0;
    let minRight = nums.length -1;

    while (minLeft < minRight){
        const mid = Math.floor((minLeft + minRight)/2);
        if (nums[mid] > nums[minRight]) minLeft = mid + 1;
        else minRight = mid;
    }
    
    const ascendingOrdered = nums.slice(minLeft).concat(nums.slice(0, minLeft));

    let left = 0;
    let right = nums.length-1;
    
    while (left < right){
        const mid = Math.floor((left + right)/2);
        if (ascendingOrdered[mid] > target) right = mid;
        else if (ascendingOrdered[mid] < target) left = mid + 1;
        else if (ascendingOrdered[mid] === target){
            if (minLeft === 0) return mid;
            else return target < nums[0] ? mid + minLeft : mid - (nums.length - minLeft);
        }
    }

    if (ascendingOrdered[left] === target){
        if (minLeft === 0) return left;
        return target < nums[0] ? left + minLeft : left - (nums.length - minLeft);
    }   else return -1;
};







