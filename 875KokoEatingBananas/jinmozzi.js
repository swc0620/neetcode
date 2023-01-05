/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    piles.sort((a,b) => a - b);
    let left = 1;
    let right = piles[piles.length -1];
    while (left < right){
        let mid = Math.floor((left + right)/2);
        const time = piles.map((bananas) => Math.ceil(bananas/mid)).reduce((p,c) => p + c, 0);
        if (time > h){
            left = mid + 1;
        }   
        else if ( time <= h ){
            right = mid;
        }
    }
    return left;
};