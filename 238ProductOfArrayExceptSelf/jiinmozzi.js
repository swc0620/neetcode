var productExceptSelf = function(nums) {
    
    if (nums.indexOf(0) !== nums.lastIndexOf(0)){
        return new Array(nums.length).fill(0);
    }   
    else if ( nums.indexOf(0) !== -1 &&  nums.indexOf(0) === nums.lastIndexOf(0) ){
        const result = new Array(nums.length).fill(0);
        const product = nums.filter(e => e!==0).reduce((p,c) => p*c , 1);
        result[nums.indexOf(0)] = product;
        return result;
    }  
    
    let initial = 1;
    for (let i=1; i<nums.length; i++){
        initial *= nums[i];
    }
    const result = [initial];
    for (let i=0; i<nums.length -1; i++){
        result.push( initial * (nums[i]/nums[i+1]) ) ;
        initial *= (nums[i]/nums[i+1]);
    } 
    return result; 
}; 