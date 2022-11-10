/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let leftMax = height[left];
    let rightMax = height[right];
    let max = Math.min(height[left], height[right]) * (right - left);

    while (left < right){
        if (height[left] < height[right]){
            while(leftMax >= height[left+1]){
                left++;
            }
            left++;
        }   
        else {
            while(rightMax >= height[right-1]){
                right--;
            }
            right--
        }
        
        if ( left >= right){
            break;
        }

        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    }

    return max;
};
