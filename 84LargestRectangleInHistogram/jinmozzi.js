/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let idx = 0;
    let max = 0;
    const height = [];
    const index = [];
    while ( heights.length > 0 ){
        let currentHeight = heights.pop();
        let currentIndex = idx++;
        let lastIndex;

        if (height.length === 0 || currentHeight > height[height.length -1]){
            height.push(currentHeight);
            index.push(currentIndex);
        }

        else if (height[height.length -1] > currentHeight){
            while ( height.length > 0 && height[height.length -1] > currentHeight ){
                const lastHeight = height.pop();
                lastIndex = index.pop();
                max = Math.max(max, lastHeight * (currentIndex - lastIndex));
            }
            height.push(currentHeight);
            index.push(lastIndex);
        }
        
    }

    // 나머지
    while (height.length > 0){
        const lastHeight = height.pop();
        const lastIndex = index.pop();
        max = Math.max(max, lastHeight * (idx - lastIndex));
    }

    return max;
};