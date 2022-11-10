/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max = -1;
    const left = [height[0]];
    const right = [height[height.length-1]];
    for (let i=1; i<=height.length - 1; i++){
        if (height[i] > left[left.length-1]){
            left.push(height[i]);
        }
    }
    for (let i=height.length-2; i>=0; i--){
        if (height[i] > right[right.length - 1]){
            right.push(height[i]);
        }
    }

    console.log(left);
    console.log(right);

    let rightIndex = 0 ;
    for (let i=0; i<left.length; i++){
        while (left[i] > right[rightIndex]){
            rightIndex++;
        }
        max = Math.max(max, (height.lastIndexOf(right[rightIndex])- height.indexOf(left[i])) * left[i] )
    }

    let leftIndex = 0 ;
    for (let i=0; i<right.length; i++){
        while (right[i] > left[leftIndex]){
            leftIndex++;
        }
        max = Math.max(max, (height.lastIndexOf(right[i])- height.indexOf(left[leftIndex])) * right[i] )
    }
    return max;
};