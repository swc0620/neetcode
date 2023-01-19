/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fast = nums[0];
    let slow = nums[0];
    do {
        fast = nums[nums[fast]];
        slow = nums[slow];
    }   while ( fast !== slow);

    slow = nums[0];
    while (fast !== slow){
        slow = nums[slow];
        fast = nums[fast];
    }
    return fast;
};