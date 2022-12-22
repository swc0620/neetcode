/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const FALSE = -1;

const selectRow = (matrix, target) => {
    const lastNumbers = matrix.map(e => e[e.length -1]);
    let left = 0;
    let right = matrix.length - 1;

    while (left < right){
        const mid = Math.floor((left + right) / 2);
        if ( lastNumbers[mid] > target){
            right = mid;
        }   else if ( lastNumbers[mid] < target ){
            left = mid + 1;
        }   else {
            return left;
        }
    }
    if (lastNumbers[left] < target) return FALSE;
    else return left;
}

var searchMatrix = function(matrix, target) {
    const rowNumber = selectRow(matrix, target);
    if (rowNumber === FALSE) return false;

    const row = matrix[rowNumber];
    let left = 0;
    let right = row.length - 1

    while (left < right){
        const mid = Math.floor((left + right) / 2);
        if ( row[mid] > target){
            right = mid;
        }   else if ( row[mid] < target ){
            left = mid + 1;
        }   else {
            return row[mid];
        }
    }

    return row[left] === target ? true : false;
};