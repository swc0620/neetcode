var TimeMap = function() {
    // timeMaps { str : [ [value, timestamp] ] }.
    this.timeMaps = {};    
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    const timeMaps = this.timeMaps;
    if (timeMaps[key]) timeMaps[key].push([value, timestamp]);
    else {
        timeMaps[key] = [];
        timeMaps[key].push([value, timestamp]);
    }
    return null;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const timeMaps = this.timeMaps[key];
    if (!timeMaps) return "";
    let left = 0;
    let right = timeMaps.length - 1;

    while (left < right){
        const mid = Math.floor((left + right)/2);
        if (timeMaps[mid][1] < timestamp){
            left = mid + 1;
        }   else if ( timeMaps[mid][1] > timestamp){
            right = mid;
        }   else {
            return timeMaps[mid][0]
        }
    }

    if (timeMaps[left][1] <= timestamp) return timeMaps[left][0];
    else if (left - 1 >= 0 && timeMaps[left-1][1] <= timestamp){
        return timeMaps[left-1][0];
    }   else return "";
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */